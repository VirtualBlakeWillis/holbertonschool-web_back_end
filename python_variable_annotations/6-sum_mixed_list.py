#!/usr/bin/env python3
"""Basic annotations - mixed list"""
from typing import List, Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """Return the sum of all elements of a list"""
    return sum(mxd_lst)
