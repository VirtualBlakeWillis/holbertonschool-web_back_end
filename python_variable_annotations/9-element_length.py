#!/usr/bin/env python3
"""Complex types - given a function, annotate its types and returns"""


def element_length(lst: List) -> List[Tuple[str, int]]:
    """Return a list of tuples containing elements and their length"""
    return [(i, len(i)) for i in lst]
