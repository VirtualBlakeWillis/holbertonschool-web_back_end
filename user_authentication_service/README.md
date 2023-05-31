# Project: User authentication service | Holberton Tulsa, OK, USA Intranet



![](https://s3.eu-west-3.amazonaws.com/hbtn.intranet/uploads/medias/2019/12/4cb3c8c607afc1d1582d.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4MYA5JM5DUTZGMZG%2F20230531%2Feu-west-3%2Fs3%2Faws4_request&X-Amz-Date=20230531T165355Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=a928aa4d204c5ee52214b0c64008241ebb113326923b5f04080185d9b3eab242)


In the industry, you should **not** implement your own authentication system and use a module or framework that doing it for you (like in Python-Flask: [Flask-User](https://flask-user.readthedocs.io/en/latest/ "Flask-User")). Here, for the learning purpose, we will walk through each step of this mechanism to understand it by doing.


Resources
---------


**Read or watch:**


* [Flask documentation](https://flask.palletsprojects.com/en/1.1.x/quickstart/ "Flask documentation")
* [Requests module](https://requests.kennethreitz.org/en/latest/user/quickstart/ "Requests module")
* [HTTP status codes](https://www.w3.org/Protocols/rfc2616/rfc2616-sec10.html "HTTP status codes")


Learning Objectives
-------------------


At the end of this project, you are expected to be able to [explain to anyone](https://fs.blog/feynman-learning-technique/ "explain to anyone"), **without the help of Google**:


* How to declare API routes in a Flask app
* How to get and set cookies
* How to retrieve request form data
* How to return various HTTP status codes


Requirements
------------


* Allowed editors: `vi`, `vim`, `emacs`
* All your files will be interpreted/compiled on Ubuntu 18.04 LTS using `python3` (version 3.7)
* All your files should end with a new line
* The first line of all your files should be exactly `#!/usr/bin/env python3`
* A `README.md` file, at the root of the folder of the project, is mandatory
* Your code should use the `pycodestyle` style (version 2.5)
* You should use `SQLAlchemy` 1.3.x
* All your files must be executable
* The length of your files will be tested using `wc`
* All your modules should have a documentation (`python3 -c 'print(__import__("my_module").__doc__)'`)
* All your classes should have a documentation (`python3 -c 'print(__import__("my_module").MyClass.__doc__)'`)
* All your functions (inside and outside a class) should have a documentation (`python3 -c 'print(__import__("my_module").my_function.__doc__)'` and `python3 -c 'print(__import__("my_module").MyClass.my_function.__doc__)'`)
* A documentation is not a simple word, it’s a real sentence explaining what’s the purpose of the module, class or method (the length of it will be verified)
* All your functions should be type annotated
* The flask app should only interact with `Auth` and never with `DB` directly.
* Only public methods of `Auth` and `DB` should be used outside these classes


Setup
-----


You will need to install `bcrypt`



```
pip3 install bcrypt

```


