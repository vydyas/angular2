import "core-js";
import "reflect-metadata";
import "zone.js/dist/zone.js";

import "bootstrap/dist/js/bootstrap.js";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app.module";

let platform = platformBrowserDynamic();

platform.bootstrapModule(AppModule);