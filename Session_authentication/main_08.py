#!/usr/bin/python3
""" Check response
"""
import requests
import base64

if __name__ == "__main__":
    user_email = "u3@hbtn.io"
    user_clear_pwd = "pwd"

    basic_clear = "{}:{}".format(user_email, user_clear_pwd)
    r = requests.get('http://0.0.0.0:5000/api/v1/users/me', headers={ 'Authorization': "Basic {}".format(base64.b64encode(basic_clear.encode('utf-8')).decode("utf-8")) })
    if r.status_code != 200:
        print("Wrong status code: {}".format(r.status_code))
        exit(1)
    if r.headers.get('content-type') != "application/json":
        print("Wrong content type: {}".format(r.headers.get('content-type')))
        exit(1)
    
    try:
        r_json = r.json()
        
        if type(r_json) is not dict:
            print("/api/v1/users/me should return a dictionary, not {}".format(type(r_json)))
            exit(1)
            
        if r_json.get('email') != user_email:
            print("/api/v1/users/me should return the user authenticated: {}".format(r_json))
            exit(1)

        print("OK", end="")
    except:
        print("Error, not a JSON")