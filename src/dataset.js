/*
  @preserve dataset polyfill for IE < 11. See https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset and http://caniuse.com/#search=dataset

  @author ShirtlessKirk copyright 2015
  @license WTFPL (http://www.wtfpl.net/txt/copying)
*/

const dash = /-([a-z])/gi;
const dataRegEx = /^data-(.+)/;
const test = document.createElement('_');
const DOMAttrModified = 'DOMAttrModified';

let mutationSupport = false;

function clearDataset(event) {
  delete event.target._datasetCache;
}

function toCamelCase(string) {
  return string.replace(dash, function (_, letter) {
    return letter.toUpperCase();
  });
}

function getDataset() {
  const dataset = {};

  for (let attribute of this.attributes) {
    let match = attribute.name.match(dataRegEx);
    if (match) {
      dataset[toCamelCase(match[1])] = attribute.value;
    }
  }

  return dataset;
}

function mutation() {
  test.removeEventListener(DOMAttrModified, mutation, false);

  mutationSupport = true;
}

if (!test.dataset) {
  test.addEventListener(DOMAttrModified, mutation, false);

  // trigger event (if supported)
  test.setAttribute('foo', 'bar');

  Object.defineProperty(Element.prototype, 'dataset', {
    get: mutationSupport
      ? function get() {
          if (!this._datasetCache) {
            this._datasetCache = getDataset.call(this);
          }

          return this._datasetCache;
        }
      : getDataset,
  });

  if (mutationSupport) {
    // < IE9 supports neither
    document.addEventListener(DOMAttrModified, clearDataset, false);
  }
}
