import { initFederation } from '@angular-architects/native-federation';

initFederation('federation.manifest.json')
  .catch(err => console.error(err))
  .then(_ => {
    console.log("ShellApp Init federation");
    console.log("_", _);
    import('./bootstrap')
  }
  )
  .catch(err => console.error(err));
