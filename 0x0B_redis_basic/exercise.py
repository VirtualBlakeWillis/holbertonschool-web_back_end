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

def count_calls(method: Callable) -> Callable:
    """ Decorator that takes a single method Callable argument and returns a Callable """  # noqa
    key = method.__qualname__

    @wraps(method)
    def wrapper(self, *args, **kwds):
        """ Wrapper function """
        self._redis.incr(key)
        return method(self, *args, **kwds)

    return wrapper

def call_history(method: Callable) -> Callable:
    """ Decorator to store the history of inputs and outputs for a particular function """  # noqa
    key = method.__qualname__

    @wraps(method)
    def wrapper(self, *args, **kwds):
        """ Wrapper function """
        self._redis.rpush("{}:inputs".format(key), str(args))
        result = method(self, *args, **kwds)
        self._redis.rpush("{}:outputs".format(key), result)
        return result

    return wrapper



class Cache() :
    """ Cache class """

    def __init__(self) :
        """ Constructor """
        self._redis = redis.Redis()
        self._redis.flushdb()

    @call_history
    @count_calls
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

