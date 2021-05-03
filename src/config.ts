import { Configuration } from "@azure/msal-browser";

export const azureAdConfig: Configuration = {
    auth: {
        clientId: "62b76b1d-22bd-4127-8398-0fc0b6570e10",
        authority: "https://login.microsoftonline.com/cb0df0a9-0c65-493b-80cf-efba788a2604",
        redirectUri: "http://localhost:3000",
        postLogoutRedirectUri: "http://localhost:3000"
    },
    cache: {
        cacheLocation: 'sessionStorage',
        storeAuthStateInCookie: true
    }
}