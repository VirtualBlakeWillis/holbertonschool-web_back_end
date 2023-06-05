#!/usr/bin/env python3
""" testing for client file """

import unittest
from unittest.mock import patch, PropertyMock, Mock
from parameterized import parameterized, parameterized_class
from client import GithubOrgClient
from fixtures import TEST_PAYLOAD


class TestGithubOrgClient(unittest.TestCase):
    """ testing class """


    @parameterized.expand([
        ("google"),
        ("abc"),
    ])
    def test_org(self, org_name):
        """ test org method """
        test_class = GithubOrgClient(org_name)
        self.assertEqual(test_class.org, self.org_payload.return_value)
        self.org_payload.assert_called_once
