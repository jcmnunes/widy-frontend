import React, { useState } from 'react';
import { Button, Input } from '@binarycapsule/ui-capsules';
import ScopesTable from './ScopesTable/ScopesTable';
import { ActionsTop, ScopesPageWrapper, ScopesSearch } from './Scopes.styles';
import { PageDescription, PageTitle } from '../Page.styles';
import ScopeModal from './ScopeModal/ScopeModal';

const Scopes = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div>
        <PageTitle>Scopes</PageTitle>
        <PageDescription>Manage your task scopes below.</PageDescription>
        <ScopesPageWrapper>
          <ActionsTop>
            <Button
              onClick={() => setIsOpen(true)}
              appearance="primary"
              iconBefore="PLUS"
              size="large"
            >
              Create new scope
            </Button>
            <ScopesSearch>
              <Input onChange={() => {}} placeholder="Search scopes" size="large" value="" />
            </ScopesSearch>
          </ActionsTop>
          <ScopesTable />
        </ScopesPageWrapper>
      </div>
      {isOpen && <ScopeModal closeModal={() => setIsOpen(false)} />}
    </>
  );
};

export default Scopes;
