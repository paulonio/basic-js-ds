const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 *    
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 */
  // Singly - linked lists are already defined using interface

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

function removeKFromList(l, k) {
  let list = l;
  let prev = null;

  while (l) {
    if(l.value === k) {
      if(!prev) {
        list = l = l.next;
        continue
      } else {
        prev.next = l.next;
        l = l.next;
        continue
      }
    } 
    prev = l;
    l = l.next;
  }
  return list
}

module.exports = {
  removeKFromList
};
