#!/usr/bin/env python3
""" Module for user authentication """

from flask import request
from typing import List, TypeVar
from os import getenv
from api.v1.auth.auth import Auth
import base64


class BasicAuth(Auth):
    """ BasicAuth class """

    def extract_base64_authorization_header(self, authorization_header: str) -> str:  # noqa
        """ extract base64 authorization header """
        if authorization_header is None or type(authorization_header) != str:
            return None
        if authorization_header.startswith('Basic '):
            return authorization_header[6:]
        return None

    def decode_base64_authorization_header(self, base64_authorization_header: str) -> str:  # noqa
        """ decode base64 authorization header """
        if base64_authorization_header is None or type(base64_authorization_header) != str:  # noqa
            return None
        try:
            return base64.b64decode(base64_authorization_header).decode('utf-8')  # noqa
        except Exception:
            return None

    def extract_user_credentials(self, decoded_base64_authorization_header: str) -> (str, str):  # noqa
        """ extract user credentials """
        if decoded_base64_authorization_header is None or type(decoded_base64_authorization_header) != str:  # noqa
            return None, None
        if ':' not in decoded_base64_authorization_header:
            return None, None
        return tuple(decoded_base64_authorization_header.split(':', 1))
