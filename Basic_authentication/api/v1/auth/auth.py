#!/usr/bin/env python3
""" Module for user authentication """

from flask import request
from typing import List, TypeVar
from os import getenv


class Auth:
    """ auth class """

    def require_auth(self, path: str, excluded_paths: List[str]) -> bool:
        """ require auth """

        if path is None or excluded_paths is None or excluded_paths == []:
            return True

        if path[-1] != '/':
            path += '/'

        for excluded in excluded_paths:
            if excluded.endswith('*'):
                if path.startswith(excluded[:-1]):
                    return False
            elif path == excluded:
                return False

        return True

    def authorization_header(self, request=None) -> str:
        """ authorization header """
        if request is None or 'Authorization' not in request.headers:
            return None

        return request.headers['Authorization']

    def current_user(self, request=None) -> TypeVar('User'):
        """ current user """
        return None
