module.exports = {
  name: 'frontend-flower',
  exposes: {
    './Module': 'apps/frontend/flower/src/app/remote-entry/entry.module.ts',
  },
};
