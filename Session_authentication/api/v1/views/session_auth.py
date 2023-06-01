#!/usr/bin/env python3
""" Module for Session Authentication views """
from api.v1.views import app_views
from flask import abort, jsonify, request
from models.user import User
from os import getenv


@app_views.route('/auth_session/login', methods=['POST'], strict_slashes=False)
def login() -> str:
    """ login route """
    email = request.form.get('email')
    password = request.form.get('password')

    if not email or email == '':
        return jsonify({"error": "email missing"}), 400
    if not password or password == '':
        return jsonify({"error": "password missing"}), 400

    user_list = User.search({'email': email})

    if not user_list:
        return jsonify({"error": "no user found for this email"}), 404

    if not user_list[0].is_valid_password(password):
        return jsonify({"error": "wrong password"}), 401

    from api.v1.app import auth
    res = jsonify(user_list[0].to_json())
    session_id = auth.create_session(user_list[0].id)
    cookie_name = getenv('SESSION_NAME')

    res.set_cookie(cookie_name, session_id)
    return res
