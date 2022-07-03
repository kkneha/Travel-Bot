from cgitb import text
from urllib import response
from flask_restful import Resource 
from flask_pymongo import PyMongo
from flask import request, jsonify
from regex import E
from app import app
from src.Response import Response


class DBFetch(Resource):
    def __init__(self):
        mongo = PyMongo(app, uri="mongodb+srv://kkneha:nehabloom04@chatbot-cluster.1qtfe.mongodb.net/chatbot-data")
        self.mongo = mongo.db

    def post(self):
        requirements = request.json
        # iterarnary = Response.generate_response(flag=1)
        iterarnary = Response.fetch_response(self, requirements = requirements)
        return iterarnary