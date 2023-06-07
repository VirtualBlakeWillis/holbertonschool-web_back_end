#!/usr/bin/env python3
""" testing for client file """

import unittest
from unittest.mock import patch, PropertyMock, Mock
from parameterized import parameterized, parameterized_class
from client import GithubOrgClient
from fixtures import org_payload, repos_payload, expected_repos, apache2_repos


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

    def test_public_repos_url(self):
        """ test public repos url """
        with patch('client.GithubOrgClient.org',
                   new_callable=PropertyMock) as mock_org:
            mock_org.return_value = {"repos_url": "twitter.com"}
            test_class = GithubOrgClient("twitter")
            self.assertEqual(test_class._public_repos_url, "twitter.com")
            mock_org.assert_called_once()

    @patch('client.get_json')
    def test_public_repos(self, mock_get):
        """ test public repos """
        mock_get.return_value = [{"name": "google"}, {"name": "abc"}]
        with patch('client.GithubOrgClient._public_repos_url',
                   new_callable=PropertyMock) as mock_public:
            mock_public.return_value = "twitter.com"
            test_class = GithubOrgClient("twitter")
            self.assertEqual(test_class.public_repos(), ["google", "abc"])
            mock_public.assert_called_once()
            mock_get.assert_called_once()

    @parameterized.expand([
        ({'license': {'key': 'my_license'}}, 'my_license', True),
        ({'license': {'key': 'other_license'}}, 'my_license', False),
    ])
    def test_has_license(self, repo, license_key, expected):
        """ test has license """
        test_class = GithubOrgClient("twitter")
        self.assertEqual(test_class.has_license(repo, license_key), expected)


class TestIntegrationGithubOrgClient(unittest.TestCase):
    """ testing integration class """

    @classmethod
    def setUpClass(cls):
        """ setting up class for test """
        cls.get_patcher = patch('requests.get', side_effect=HTTPError)
        cls.get_patcher.start()
    
    @classmethod
    def tearDownClass(cls):
        """ tear down class after test """
        cls.get_patcher.stop()

    @parameterized.expand([
        ("google"),
        ("abc"),
    ])
    def test_public_repos(self, org_name):
        """ test public repos """
        test_class = GithubOrgClient(org_name)
        self.assertEqual(test_class.public_repos(), [])
        self.get_patcher.stop()