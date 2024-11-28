import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig)
  .then(res => {
    console.log('Shell App bootstrap application');
    console.log(res);
  })
  .catch((err) => console.error(err));
