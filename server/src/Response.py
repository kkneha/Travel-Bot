from json import loads
import random
import tensorflow as tf
import numpy as np
# import nltk
from nltk.corpus import stopwords
from nltk.tokenize import word_tokenize
import pickle
from app import app
from flask_pymongo import PyMongo
from bson.json_util import dumps


class Response():
    def __init__(self):
        mongo = PyMongo(app, uri="mongodb+srv://kkneha:nehabloom04@chatbot-cluster.1qtfe.mongodb.net/chatbot-data")
        self.mongo = mongo.db
    
    def fetch_response(self, requirements):
        if(requirements["intent"]=="i"):
            _budget = str(requirements['Budget'])
            _type = str(requirements['Type'])
            cursor = self.mongo.iterarnaries.find({"type": _type,
                    "budget": _budget}, {"iterarnary":1, "_id":0})
            # Converting cursor to the list 
            # of dictionaries
            list_cur = list(cursor)
            
            # Converting to the JSON
            json_data = dumps(list_cur) 
            formatted_data = loads(json_data)
            return (formatted_data[0]["iterarnary"])
        else:
            _star = str(requirements['Star'])
            cursor = self.mongo.hotels.find({"Star": _star}, {"Hotel":1, "_id":0})
            # Converting cursor to the list 
            # of dictionaries
            list_cur = list(cursor)
            
            # Converting to the JSON
            json_data = dumps(list_cur) 
            formatted_data = loads(json_data)
            return (formatted_data[0]["Hotel"])
            # find_iterarnaries(attributes)

    def generate_response(self, input):
        greetings_responses = ['Hi!', 'Hey, How can I help you today', 'Hello I am TB to help you out', 'Hey there!']
        input = str(input).lower()
        if input == "hi" or input == "hello":
            return random.choice(greetings_responses)
        elif input == 'bye':
            return "Bye"
        else:
            c = self.preprocess_text(input)
            return c
    
    def predict_model(self, input):
        classes = ["Hotel", "Flights", "Iterarnary"]
        model_path = 'server\\models\\intentClassification.h5'
        model = tf.keras.models.load_model(model_path)
        output = model.predict(np.expand_dims(input, axis=0))
        c = np.argmax(output)
        print(classes[c])
        return classes[c]

    def preprocess_text(self, input):
        with open("server\\dependancies\\bow.pickle", "rb") as file:
            bow = pickle.load(file)
        stop_words = set(stopwords.words('english'))
        word_tokens = word_tokenize(input)
        preprocessed_sentence = [w for w in word_tokens if not w.lower() in stop_words]

        vectored_text = []
        for i in preprocessed_sentence:
            if i in bow:
                a = bow.get(i)
                vectored_text.append(a)
            else:
                vectored_text.append(0)

        # vectored_text = vectored_text.append(0*(16-len(vectored_text)))
        # vectored_text = tf.keras.preprocessing.sequence.pad_sequences(vectored_text, padding='post', maxlen=16)
        for i in range(len(vectored_text)-1, 15):
            vectored_text.append(0)
        vectored_text = np.array(vectored_text)
        # print(vectored_text)
        # print(vectored_text.shape)
        c = self.predict_model(vectored_text)
        return c
