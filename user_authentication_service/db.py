#!/usr/bin/env python3
"""DB module
"""
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm.exc import NoResultFound
from sqlalchemy.orm import sessionmaker
from sqlalchemy.orm.session import Session

from user import Base
import user


class DB:
    """DB class
    """

    def __init__(self) -> None:
        """Initialize a new DB instance
        """
        self._engine = create_engine("sqlite:///a.db", echo=False)
        Base.metadata.drop_all(self._engine)
        Base.metadata.create_all(self._engine)
        self.__session = None

    @property
    def _session(self) -> Session:
        """Memoized session object
        """
        if self.__session is None:
            DBSession = sessionmaker(bind=self._engine)
            self.__session = DBSession()
        return self.__session

    def add_user(self, email: str, hashed_password: str) -> user.User:
        """Method that saves a new user to the database
        """
        from user import User
        new_user = User(email=email, hashed_password=hashed_password)
        self._session.add(new_user)
        self._session.commit()
        return new_user

    def find_user_by(self, **kwargs) -> user.User:
        """Method that returns the first row found in the users table
        """
        if not kwargs:
            raise InvalidRequestError
        row = self._session.query(user.User).filter_by(**kwargs).first()
        if not row:
            raise NoResultFound
        return row

    def update_user(self, user_id: int, **kwargs) -> None:
        """Method that takes as argument a required user_id integer
        and arbitrary keyword arguments, and returns None
        """
        user = self.find_user_by(id=user_id)
        for key, value in kwargs.items():
            if key not in user.__dict__:
                raise ValueError
            setattr(user, key, value)
        self._session.commit()
