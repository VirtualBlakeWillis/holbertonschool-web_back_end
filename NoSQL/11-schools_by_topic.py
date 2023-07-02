#!/usr/bin/env python3
""" module = return list of school having a specific topic """


def schools_by_topic(mongo_collection, topic):
    """ returns list of school having a specific topic """
    result = mongo_collection.find({"topics": {"$in": [topic]}})
    return result
