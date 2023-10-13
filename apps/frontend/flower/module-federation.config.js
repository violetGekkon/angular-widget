module.exports = {
  name: 'flower',
  exposes: {
    './Module': 'apps/frontend/flower/src/app/remote-entry/entry.module.ts',
  },
};
