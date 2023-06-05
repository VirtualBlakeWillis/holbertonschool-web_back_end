#!/usr/bin/env python3
""" Unittests and Integration tests for the utils.py file.
"""
import unittest
from unittest.mock import patch
from parameterized import parameterized
from utils import access_nested_map, get_json


class TestAccessNestedMap(unittest.TestCase):
    """ task 0 """

    @parameterized.expand([
        ({"a": 1}, ("a",), 1),
        ({"a": {"b": 2}}, ("a",), {"b": 2}),
        ({"a": {"b": 2}}, ("a", "b"), 2)
    ])
    def test_access_nested_map(self, nested_map, path, expected):
        """ tests access_nested_map """
        self.assertEqual(access_nested_map(nested_map, path), expected)

    @parameterized.expand([
        ({}, ("a",), KeyError),
        ({"a": 1}, ("a", "b"), KeyError)
    ])
    def test_access_nested_map_exception(self, nested_map, path, expected):
        """ tests access_nested_map exception """
        with self.assertRaises(expected):
            access_nested_map(nested_map, path)


class TestGetJson(unittest.TestCase):
    """ task 2 """

    @parameterized.expand([
        ("http://example.com", True),
        ("http://holberton.io", False)
    ])
    @patch('requests.get')
    def test_get_json(self, test_url, test_payload, mock_get):
        """ tests get_json """
        mock_get.return_value.json.return_value = test_payload
        self.assertEqual(get_json(test_url), mock_get.return_value.json.return_value)
