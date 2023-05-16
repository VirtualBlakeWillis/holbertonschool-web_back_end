#!/usr/bin/python3
"""
Create class MRUCache that inherits from BaseCaching and is a caching system:

You must use self.cache_data - dictionary from the parent class BaseCaching
You can overload def __init__(self): but don’t forget to call the parent init:
super().__init__()
def put(self, key, item):
Must assign to the dictionary self.cache_data the item value for the key key.
If key or item is None, this method should not do anything.
If the number of items in self.cache_data is higher that BaseCaching.MAX_ITEMS:
you must discard the most recently used item (MRU algorithm)
you must print DISCARD: with the key discarded and following by a new line
def get(self, key):
Must return the value in self.cache_data linked to key.
If key is None or if the key doesn’t exist in self.cache_data, return None.
"""
from base_caching import BaseCaching


class MRUCache(BaseCaching):
    """ MRUCache class """
    def __init__(self):
        super().__init__()
        self.queue = []

    def put(self, key, item):
        """ add an item in cache """
        if key is None or item is None:
            return
        if key in self.cache_data:
            self.cache_data[key] = item
            if key in self.queue:
                self.queue.remove(key)
                self.queue.append(key)
            return
        if len(self.cache_data) >= BaseCaching.MAX_ITEMS:
            discard = self.queue.pop()
            del self.cache_data[discard]
            print("DISCARD: {}".format(discard))
        self.queue.append(key)
        self.cache_data[key] = item

    def get(self, key):
        """ get an item from cache """
        if key is None or key not in self.cache_data:
            return None
        if key in self.queue:
            self.queue.remove(key)
            self.queue.append(key)
        return self.cache_data[key]
