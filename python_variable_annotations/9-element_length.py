#!/usr/bin/env python3
"""Complex types - given a function, annotate its types and returns"""
from typing import List, Tuple

def element_length(lst: List) -> Tuple[str, int]:
    """Return a list of tuples containing elements and their length"""
    return [(i, len(i)) for i in lst]
