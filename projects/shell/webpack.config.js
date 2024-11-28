const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const { environment } = require('./src/environments/environment');

module.exports = {
  plugins: [
    new ModuleFederationPlugin({
      name: 'shell',
      remotes: {
        todo: `taskapp@http://localhost:4201/remoteEntry.js`,
        taskapp: `taskapp@https://angular-mfa-taskapp.vercel.app/remoteEntry.js`,
      },
      shared: {
        '@angular/core': { singleton: true, strictVersion: true },
        '@angular/common': { singleton: true, strictVersion: true },
        '@angular/router': { singleton: true, strictVersion: true },
      },
    }),
  ],
};
