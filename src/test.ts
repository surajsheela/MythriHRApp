// This file is required by karma.conf.js and loads recursively all the .spec and framework files

<<<<<<< HEAD
import 'zone.js/dist/long-stack-trace-zone';
import 'zone.js/dist/proxy.js';
import 'zone.js/dist/sync-test';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';
=======
import 'zone.js/dist/zone-testing';
>>>>>>> 107955331a3287aed8457845625dd6d9a8c823c5
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

<<<<<<< HEAD
// Unfortunately there's no typing for the `__karma__` variable. Just declare it as any.
declare const __karma__: any;
declare const require: any;

// Prevent Karma from running prematurely.
__karma__.loaded = function () {};

=======
declare const require: any;

>>>>>>> 107955331a3287aed8457845625dd6d9a8c823c5
// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);
// Then we find all the tests.
const context = require.context('./', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
<<<<<<< HEAD
// Finally, start Karma to run the tests.
__karma__.start();
=======
>>>>>>> 107955331a3287aed8457845625dd6d9a8c823c5
