import os

class Config:
    SQLALCHEMY_DATABASE_URI = 'sqlite:///users.db'  # You can switch to MySQL/PostgreSQL later
    SQLALCHEMY_TRACK_MODIFICATIONS = False
    SECRET_KEY = os.urandom(24)