'use strict';

const food = {
  Drink: {
    Wine: {},
    Schnaps: {},
  },

  Fruit: {
    Red: {
      Cherry: {},
      Strawberry: {},
    },
    Yellow: {
      Banana: {},
      Pineapple: {},
    },
  },
};

const tree = document.querySelector('#tree');

function createTree(element, data) {
  // WRITE YOUR CODE HERE
  const ul = document.createElement('ul');

  for (const key of data) {
    const li = document.createElement('li');

    li.textContent = key;

    if (key !== null && key.constructor === Object) {
      createTree(li, data[key]);
    }
  }

  element.append(ul);
}

createTree(tree, food);
