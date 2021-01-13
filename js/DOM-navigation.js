'use strict';

console.log(document.body);

console.log(document.documentElement); // tag HTML

console.log(document.body.childNodes); // NodeList element in body

// Каждый DOM элемент == узел,
// но не каждый DOM узел == элемент  -- узлов больше

console.log(document.body.firstChild); // first Node
console.log(document.body.lastChild); // last Node lastElementChild - for elements

console.log(document.querySelector('.current').parentNode); // parent node
console.log(document.querySelector('.current').parentNode.parentNode); // parent node parent's node

// we can use self parametres, the have view data='.....' (eg. data-current)

console.log(document.querySelector('[data-current="3"]'));
console.log(document.querySelector('[data-current="3"]').nextSibling); // next node, it can be text or line break 
console.log(document.querySelector('[data-current="3"]').previousSibling); // previous node, it can be text or line break 

/// there are anologues: nextElementSibling, previousElementSibling, parentElement // only elements, no any nodes
/// there are no any methods body.childElements
/// but we can сreate such method ourselves with forof

for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') { // we will miss text nodes
        continue;
    }
    console.log(node); // and wait elements
}