import { InteractionType, PublicClientApplication, RedirectRequest } from '@azure/msal-browser';
import { AuthenticatedTemplate, MsalAuthenticationTemplate, MsalProvider, UnauthenticatedTemplate } from '@azure/msal-react';
import React from 'react';
import { Route, Switch } from 'react-router';
import './App.css';

type Props = {
  pca: PublicClientApplication
}

const authRequest: RedirectRequest = {
  scopes: ['User.Read'],
  prompt: 'select_account'
};

const App: React.FC<Props> = ({ pca }) => {

  const handleLogin = () => {
    pca.loginRedirect(authRequest);
  }

  const handleLogout = () => {
    pca.logoutRedirect();
  }

  return (
    <MsalProvider instance={pca}>
      <div className="App">
        <Switch>
          <Route exact path="/" render={() =>
            <div>
              Home
          </div>
          }></Route>

          <Route path="/secured" render={() => (
            <MsalAuthenticationTemplate interactionType={InteractionType.Redirect} authenticationRequest={authRequest}>
              <div>
                This is a protected route
              </div>
            </MsalAuthenticationTemplate>
          )}>
          </Route>
        </Switch>

        <UnauthenticatedTemplate>
          <button type="button" onClick={handleLogin}>Login</button>
        </UnauthenticatedTemplate>
        <AuthenticatedTemplate>
          <button type="button" onClick={handleLogout}>Logout</button>
        </AuthenticatedTemplate>
      </div>
    </MsalProvider>
  );
}

export default App;
