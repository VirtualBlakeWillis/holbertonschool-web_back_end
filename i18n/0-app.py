#!/usr/bin/env python3
""" Basic Flask app - task 0 """
from flask import Flask, render_template


@app.route('/')
def hello():
    """ Return welcome message """
    return render_template('0-index.html')
