from flask import Flask, render_template,request,jsonify
app = Flask(__name__)

## URL 별로 함수명이 같거나,
## route('/') 등의 주소가 같으면 안됩니다.

from pymongo import MongoClient           # pymongo를 임포트 하기(패키지 인스톨 먼저 해야겠죠?)
client = MongoClient('localhost', 27017)  # mongoDB는 27017 포트로 돌아갑니다.
db = client.dbsparta

@app.route('/')
def home():
    return render_template('index.html')

@app.route('/order', methods=['POST'])
def save_orders():
   name_receive = request.form['name_give']
   count_receive = request.form['count_give']
   address_receive = request.form['address_give']
   phone_receive = request.form['phone_give']

   orderList = {
      'name':name_receive,
      'count':count_receive,
      'address':address_receive,
      'phone':phone_receive
   }

   db.order.insert_one(orderList)

   return jsonify({'result': 'success'})

@app.route('/orderlist', methods=['GET'])
def listing():
    result = list(db.order.find({},{'_id':0}))
    return jsonify({'result':'success', 'order':result})


if __name__ == '__main__':
    app.run('0.0.0.0',port=5000,debug=True)


