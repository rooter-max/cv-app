import { APP_INITIALIZER, ErrorHandler, NgModule } from '@angular/core';
import { AppModule } from './app.module';
import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { AkitaNgDevtools } from '@datorama/akita-ngdevtools';
import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { Router } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserStateInterceptor } from './core/interceptor/browser-state.interceptor';
import * as Sentry from '@sentry/angular';

// the Request object only lives on the server
const getRequest = () => ({ headers: { cookie: document.cookie } });

@NgModule({
  imports: [
    AppModule,
    BrowserTransferStateModule,
    BrowserModule.withServerTransition({
      appId: 'cv-app'
    }),
    environment.production ? [] : AkitaNgDevtools.forRoot()
  ],
  bootstrap: [AppComponent],
  providers: [
    {
      // The server provides these in main.server
      provide: REQUEST,
      useFactory: getRequest
    },
    {
      provide: 'ORIGIN_URL',
      useValue: location.origin
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: BrowserStateInterceptor,
      multi: true
    },
    {
      provide: ErrorHandler,
      useValue: Sentry.createErrorHandler({
        showDialog: true
      })
    },
    {
      provide: Sentry.TraceService,
      deps: [Router]
    },
    {
      provide: APP_INITIALIZER,
      useFactory: () => () => {},
      deps: [Sentry.TraceService],
      multi: true
    }
  ]
})
export class AppBrowserModule {}
