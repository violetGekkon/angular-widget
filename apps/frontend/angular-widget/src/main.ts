/** The code you normally find in the file main.ts was moved to the bootstrap.ts file
 * The reason is that Module Federation needs to decide which version of a shared library to load.
 * If the shell, for instance, is using version 12.0 and one of the micro frontends is already built with version 12.1, it will decide
 * to load the latter one. To look up the needed meta data for this decision, Module Fedaration squeezes itself into dynamic imports like
 * this one here. Other than the more tradtional static imports, dynamic imports are asynchronous.
 * Hence, Module Federation can decide on the versions to use and actually load them.
 *
 * https://www.angulararchitects.io/aktuelles/getting-out-of-version-mismatch-hell-with-module-federation/
 */

// import('./bootstrap')
//   .catch(err => console.error(err));

/**
 * Beginning with the plugin’s version 14.3, we can generate a dynamic host that takes the key data about the Micro Frontend from a JSON file —
 * called the Micro Frontend Manifest — at runtime:
 */

import { setRemoteDefinitions } from '@nx/angular/mf';

fetch('/assets/mf.manifest.json')
  .then((res) => res.json())
  .then((definitions) => setRemoteDefinitions(definitions))
  .then(() => import('./bootstrap').catch((err) => console.error(err)));
