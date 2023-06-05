#!/usr/bin/env python3
""" Unittests and Integration tests for the utils.py file.
"""
import unittest
from unittest.mock import patch
from parameterized import parameterized
from utils import access_nested_map, get_json, memoize


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
        self.assertEqual(get_json(test_url), mock_get.return_value.json.return_value) # noqa


class TestMemoize(unittest.TestCase):
    """ task 3 """

    def test_memoize(self):
        """ tests memoize property """

        class TestClass:
            """ test class """

            def a_method(self):
                return 42

            @memoize
            def a_property(self):
                return self.a_method()

        with patch.object(TestClass, 'a_method', return_value=42) as mock_method: # noqa
            test = TestClass()
            test.a_property
            test.a_property
            mock_method.assert_called_once()
