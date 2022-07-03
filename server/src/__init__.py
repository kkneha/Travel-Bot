from flask_restful import Api
from app import app
from .DBFetch import DBFetch 
from .Chatbot import Chatbot
# from .Login import Login, Signup

restserver = Api(app)

restserver.add_resource(Chatbot, "/api/chatbot/")
restserver.add_resource(DBFetch, "/api/database/")
# restserver.add_resource(Signup, "/api/signup/")