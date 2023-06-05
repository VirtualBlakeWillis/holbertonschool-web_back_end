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
    @patch('client.get_json')
    def test_org(self, org_name, mock_get):
        """ test org method """
        test_class = GithubOrgClient(org_name)
        self.assertEqual(test_class.org, mock_get.return_value)
        mock_get.assert_called_once()
