#!/usr/bin/env python3
""" Redis basic project """
import redis
import uuid
from typing import Union, Callable, Optional
from functools import wraps


def get_str(self, key: str) -> str :
    """ Method that takes a key string argument and returns a string"""
    return val.decode('utf-8')

def get_int(self, val: str) -> int :
    """ Method that takes a key string argument and returns an int"""
    return int(val)

class Cache() :
    """ Cache class """

    def __init__(self) :
        """ Constructor """
        self._redis = redis.Redis()
        self._redis.flushdb()

    def store(self, data: Union[str, bytes, int, float]) -> str :
        """ Method that takes a data argument and returns a string """
        key = str(uuid.uuid4())
        self._redis.set(key, data)
        return key

    def get(self, key: str, fn: Optional[Callable] = None) -> Union[str, bytes, int, float] :  # noqa
        """ Method that takes a key string argument and an optional Callable argument """  # noqa
        if fn :
            return fn(self._redis.get(key))
        else :
            return self._redis.get(key)

