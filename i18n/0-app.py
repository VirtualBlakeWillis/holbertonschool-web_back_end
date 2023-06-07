#!/usr/bin/env python3
from flask import Flask, render_template


app = Flask(__name__)


@app.route('/')
def hello():
    return render_template('0-index.html')
