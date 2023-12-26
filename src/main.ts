import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/environments/app.config';

import { AppComponent } from './app/Components/MainPage/MainPage.component';


bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
