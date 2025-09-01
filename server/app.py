from flask import Flask, request, jsonify
from flask_migrate import Migrate

from flask_cors import CORS
from models import db, User
from config import Config
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.config.from_object(Config)
db.init_app(app)
CORS(app)
migrate = Migrate(app, db)

@app.route('/signup', methods=['POST'])
def signup():
    data = request.get_json()
    username = data.get('name')
    email = data.get('email')
    phone = data.get('phone')
    password = generate_password_hash(data.get('password'))

    if User.query.filter_by(email=email).first():
        return jsonify({'message': 'Email already exists'}), 409

    new_user = User(username=username, email=email, password=password,phone= phone)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'User created successfully'}), 201

@app.route("/")
def home():
    return "<p> welcome to backend api</p>"
