!/usr/bin/env python3
""" function that lists all documents in a collection """


def list_all(mongo_collection):
    documents = []
    for document in mongo_collection.find():
        documents.append(document)
    return documents
