from flask import Flask, config, render_template
from flask_cors import CORS

app = Flask(__name__)
cors = CORS(app, resources={r"/api/*": {"origins": "*"}})

app.config.from_object(config.Config)

if __name__ == "__main__" :
    from src import *
    app.run(debug=True, use_reloader=True)