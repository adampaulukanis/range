'use strict';

module.exports = function range(start, end, step = 1) {
  if (start == end) {
    return [start];
  }

  let tab = [];
  if (start < end) {
    for (let i = start; i <= end; i += step) {
      tab.push(i);
    }
  }
  else {
    // e.g.: range(3, -3)
    if (step > 0)
      step *= -1;

    for (let i = start; i >= end; i += step) {
      tab.push(i);
    }
  }
  return tab;
}
