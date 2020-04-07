module.exports = {
  rules: {
    // Disallow the use of console
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error', 'log', 'info'],
      },
    ],
  },
};
