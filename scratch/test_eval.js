
const fs = require('fs');
const vm = require('vm');

const dataCode = fs.readFileSync('data.js', 'utf8');

const sandbox = {
  window: {},
  document: {
    addEventListener: () => {},
    getElementById: () => ({ addEventListener: () => {}, style: {} }),
    querySelector: () => null,
    querySelectorAll: () => []
  },
  console: console,
  setTimeout: setTimeout
};

sandbox.window = sandbox;

try {
  vm.runInNewContext(dataCode, sandbox);
  console.log("data.js evaluated cleanly. learningData defined:", typeof sandbox.learningData);
} catch (e) {
  console.error("ERROR in data.js evaluation:", e);
}
