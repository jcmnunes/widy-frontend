import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, Input, Checkbox } from '@binarycapsule/ui-capsules';
import ScopesTable from './ScopesTable/ScopesTable';
import { PageDescription, PageTitle } from '../Page.styles';
import ScopeModal from './ScopeModal/ScopeModal';
import {
  archivedScopesSelector,
  scopesSelector,
} from '../../../../selectors/scopes/scopesSelectors';
import {
  ActionsTop,
  ScopesPageWrapper,
  ScopesSearch,
  ShowArchiveScopesToggle,
} from './Scopes.styles';

const Scopes = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showArchivedScopes, setShowArchivedScopes] = useState(false);

  const scopes = useSelector(scopesSelector);
  const archivedScopes = useSelector(archivedScopesSelector);

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
          <ScopesTable scopes={scopes} />
          <ShowArchiveScopesToggle>
            <Checkbox
              appearance="primary"
              checked={showArchivedScopes}
              onChange={() => setShowArchivedScopes(!showArchivedScopes)}
            >
              Show archived scopes
            </Checkbox>
          </ShowArchiveScopesToggle>
          {showArchivedScopes && <ScopesTable isArchived scopes={archivedScopes} />}
        </ScopesPageWrapper>
      </div>
      {isOpen && <ScopeModal closeModal={() => setIsOpen(false)} />}
    </>
  );
};

export default Scopes;
