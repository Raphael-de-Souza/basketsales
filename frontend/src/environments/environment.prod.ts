/** 
The production environment config contains variables required to run the application in production. 
This enables you to build the application with a different configuration for each different environment 
(e.g. production & development) without updating the app code.

When you build the application for production with the command ng build --prod, the output environment.ts is replaced with environment.prod.ts.
*/

export const environment = {
  production: true,
  apiUrl: 'http://localhost:8080'
};
