#!/usr/bin/env python3
"""Log stats"""
from pymongo import MongoClient

if __name__ == "__main__":
    # Connect to MongoDB
    client = MongoClient()
    db = client['logs']
    collection = db['nginx']

    # Get the total number of logs
    total_logs = collection.count_documents({})

    # Display the total number of logs
    print(f"{total_logs} logs")

    # Get the count of each HTTP method
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    method_counts = {method: 0 for method in methods}
    for method in methods:
        method_count = collection.count_documents({"method": method})
        method_counts[method] = method_count

    # Display the counts of each HTTP method
    print("Methods:")
    for method, count in method_counts.items():
        print(f"\tmethod {method}: {count}")

    # Get the count of logs with method=GET and path=/status
    specific_logs_count = collection.count_documents({"method": "GET", "path": "/status"})

    # Display the count of logs with specific method and path
    print(f"{specific_logs_count} status check")
