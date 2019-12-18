import React from 'react';
import styled from 'styled-components/macro';
import { Route, Switch } from 'react-router';
import Account from './Account/Account';
import ChangePassword from './ChangePassword/ChangePassword';
import Pomodoro from './Pomodoro/Pomodoro';
import Scopes from './Scopes/Scopes';

const StyledPage = styled.div`
  flex: 1;
  padding: 48px 32px;
  overflow-y: auto;
`;

const Page = () => (
  <StyledPage>
    <Switch>
      <Route path="/settings/account">
        <Account />
      </Route>
      <Route path="/settings/changePassword">
        <ChangePassword />
      </Route>
      <Route path="/settings/scopes">
        <Scopes />
      </Route>
      <Route path="/settings/pomodoro">
        <Pomodoro />
      </Route>
    </Switch>
  </StyledPage>
);

export default Page;
