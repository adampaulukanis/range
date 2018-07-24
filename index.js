'use strict';

module.exports = function range(start, end) {
  if (start > end) {
    return null;
  }
  else {
    let tab = [];
    for (let i = start; i <= end; i++) {
      tab.push(i);
    }
    return tab;
  }
}
