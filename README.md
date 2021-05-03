# React MSAL typescript sample
## Overview 

This is a sample to demonstrate how [Create React App](https://github.com/facebook/create-react-app) can implement Azure AD authentication using [Azure MSAL](https://github.com/AzureAD/microsoft-authentication-library-for-js).

## Setup
- You will have to register an app in Azure in order to connect it with Azure AD. You can follow this [tutorial](https://docs.microsoft.com/en-us/azure/active-directory/develop/scenario-spa-app-registration) on how to register. Make sure to take note the App / Client ID, you can copy it from the overview section of your registered app. Additionally, get the publisher domain value in the Manifest.
- Update the `config.ts` file and replace the clientId and authority using the values you got from the previous step.