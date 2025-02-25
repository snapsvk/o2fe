const { configureAxe } = require('jest-axe');

const axe = configureAxe({
  checks: [
    {
      // color contrast checking doesnt work in a jsdom environment.
      id: 'color-contrast',
      enabled: false
    }
  ]
});

module.exports = axe;
