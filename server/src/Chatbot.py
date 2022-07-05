from cgitb import text
from urllib import response
from flask_restful import Resource 
from flask_pymongo import PyMongo
from flask import request, jsonify
from regex import E
from app import app
from src.Response import Response


class Chatbot(Resource):
    def __init__(self):
        mongo = PyMongo(app, uri="") #add your URI to the DB
        self.mongo = mongo.db

    def post(self):
        chat_text = request.json
        bot_response = ""
        intent = "Null"

        response = Response()

        get_intent = response.generate_response(chat_text['chat-text'])
        # return "Chat text not found"
        if get_intent == "Bye":
            bot_response = "Bye"
        elif get_intent == "Iterarnary":
            bot_response = {
                "text": "Let me find you an iterarnary, please choose your requirements!",
                "intent": get_intent
            }
            # bot_response = "Let me find you an iterarnary, please choose your requirements!"
        elif get_intent == "Hotel":
             bot_response = {
                "text": "Let me check what kind of hotel you would like? Select your requirements!",
                "intent": get_intent
            }
        elif get_intent == "Flights":
            print("Flights")
        else:
            bot_response = {
                         "text": get_intent,
                         "intent": intent
                }
            print(bot_response)

        # bot_response = get_intent
        print(chat_text["chat-text"])
        result = self.mongo.chats.insert_one({
            "chat-text":chat_text["chat-text"], 
            "response":bot_response
        })

        if result:
            return bot_response, 200
        else:
            return False, 500