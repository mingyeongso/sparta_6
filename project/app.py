from flask import Flask, render_template,request,jsonify
app = Flask(__name__)

@app.route('/', methods=['GET'])
def webhook():
    if request.method == 'GET':
        return '200'

if __name__ == '__main__':
    app.run('0.0.0.0',port=5000,debug=True)

