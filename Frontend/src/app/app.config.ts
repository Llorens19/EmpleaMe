import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CoreModule } from './core/core.module';  // Importa el módulo Core
import { provideHttpClient } from '@angular/common/http'; // necesario para utilizar httpClient en services

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    CoreModule,
    provideHttpClient()
  ]
};
