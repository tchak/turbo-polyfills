function getRootNode(opt) {
  var composed = typeof opt === 'object' && Boolean(opt.composed);

  return composed ? getShadowIncludingRoot(this) : getRoot(this);
}

function getShadowIncludingRoot(node) {
  var root = getRoot(node);

  if (isShadowRoot(root)) {
    return getShadowIncludingRoot(root.host);
  }

  return root;
}

function getRoot(node) {
  if (node.parentNode != null) {
    return getRoot(node.parentNode);
  }

  return node;
}

function isShadowRoot(node) {
  return node.nodeName === '#document-fragment' && node.constructor.name === 'ShadowRoot';
}

function isImplemented() {
  return Object.prototype.hasOwnProperty.call(Node.prototype, 'getRootNode');
}

if (!isImplemented()) {
  Object.defineProperty(Node.prototype, 'getRootNode', {
    enumerable: false,
    configurable: false,
    value: getRootNode,
  });
}
