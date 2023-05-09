#!/usr/bin/env python3
"""
measure_time module - From the previous file, import wait_n into
2-measure_runtime.py.
Create a measure_time function with integers n and max_delay as arguments
that measures the total execution time for wait_n(n, max_delay), and returns
total_time / n. Your function should return a float.
Use the time module to measure an approximate elapsed time.
"""
import asyncio
from time import perf_counter
wait_n = __import__('1-concurrent_coroutines').wait_n


def measure_time(n: int, max_delay: int = 10) -> float:
    """
    Args:
        n (int): Number of times to spawn wait_random.
        max_delay (int, optional): Sets delay randomly between 0 and input.
        Defaults to 10.

    Returns:
        float: Average time for each task to complete.
    """
    s = perf_counter()
    tasks = asyncio.run(wait_n(n, max_delay))
    print(tasks)
    elapsed = perf_counter() - s
    return (elapsed / n)
