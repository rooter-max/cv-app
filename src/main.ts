import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { akitaConfig, enableAkitaProdMode, persistState } from '@datorama/akita';
import { AppBrowserModule } from './app/app.browser.module';
import * as Sentry from '@sentry/angular';
import { Integrations } from '@sentry/tracing';

Sentry.init({
  dsn: 'https://92e805c83c614b99a5b6d44a0560d472@o950695.ingest.sentry.io/5899244',
  integrations: [
    new Integrations.BrowserTracing({
      tracingOrigins: ['localhost'],
      routingInstrumentation: Sentry.routingInstrumentation
    })
  ],

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0
});

if (environment.production) {
  enableProdMode();
  enableAkitaProdMode();
}

persistState({
  key: 'cv',
  include: []
});

akitaConfig({
  resettable: true
});

document.addEventListener('DOMContentLoaded', () => {
  platformBrowserDynamic()
    .bootstrapModule(AppBrowserModule)
    .catch((err) => console.log(err));
});
