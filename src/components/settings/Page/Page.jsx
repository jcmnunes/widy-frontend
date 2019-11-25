import React from 'react';
import styled from 'styled-components/macro';
import { Route, Switch } from 'react-router';
import Account from './Account/Account';
import Pomodoro from './Pomodoro/Pomodoro';

const StyledPage = styled.div`
  flex: 1;
  padding: 48px 32px;
`;

const Page = () => (
  <StyledPage>
    <Switch>
      <Route path="/settings/account">
        <Account />
      </Route>
      <Route path="/settings/pomodoro">
        <Pomodoro />
      </Route>
    </Switch>
  </StyledPage>
);

export default Page;
