from flask import Flask, render_template,request,jsonify
app = Flask(__name__)

@app.route('/', methods=['GET'])
def webhook():
    if request.method == 'GET':
        token = request.args.get('hub.verify_token')
        challenge = request.args.get('hub.verify_token')
        if token == 'secret':
            return str(challenge)
        return '400'

if __name__ == '__main__':
    app.run(debug=True)

