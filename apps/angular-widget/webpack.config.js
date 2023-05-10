const {
  shareAll,
  withModuleFederationPlugin,
} = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({
  shared: {
    '@angular/core': {
      singleton: true,
      strictVersion: true,
      requiredVersion: '14.3.0',
    },
    '@angular/common': {
      singleton: true,
      strictVersion: true,
      requiredVersion: '14.1.0',
    },
    '@angular/common/http': {
      singleton: true,
      strictVersion: true,
      requiredVersion: '14.1.0',
    },
    '@angular/router': {
      singleton: true,
      strictVersion: true,
      requiredVersion: '14.1.0',
    },
  },
});
