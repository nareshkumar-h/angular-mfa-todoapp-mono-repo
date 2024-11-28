import { initFederation } from '@angular-architects/native-federation';

initFederation()
  .catch(err => console.error(err))
  .then(_ => {
    console.log('Taskapp init federation - started');
    import('./bootstrap');
    console.log('Taskapp init federation loading - completed');
  })
  .catch(err => console.error(err));
