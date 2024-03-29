#!/usr/bin/env python3
"""
Take the code from wait_n and alter it into a new function task_wait_n.
The code is nearly identical to wait_n except task_wait_random is being
called.
"""
from typing import List
import asyncio
task_wait_random = __import__('3-tasks').task_wait_random


async def task_wait_n(n: int, max_delay: int) -> List[float]:
    """
    Args:
        n (int): Number of times to spawn wait_random.
        max_delay (int): Sets delay randomly between 0 and input.

    Returns:
        list: List of all the delays, sorted (float values).
    """
    tasks = [task_wait_random(max_delay) for i in range(n)]
    completed = []
    for task in asyncio.as_completed(tasks):
        result = await task
        completed.append(result)
    return completed
