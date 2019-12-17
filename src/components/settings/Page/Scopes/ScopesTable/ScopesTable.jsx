import React, { useState } from 'react';
import styled from 'styled-components/macro';
import { useSelector } from 'react-redux';
import { DropdownItem } from '@binarycapsule/ui-capsules';
import ScopeCode from '../../../../common/ScopeCode/ScopeCode';
import DotsMenu from '../../../../common/DotsMenu/DotsMenu';
import ScopeModal from '../ScopeModal/ScopeModal';
import { scopesSelector } from '../../../../../selectors/scopes/scopesSelectors';

const StyledScopesTable = styled.div`
  border: 1px solid ${props => props.theme.neutral200};
  border-radius: 4px;
  margin-top: 24px;
`;

const ScopeName = styled.span`
  display: inline-block;
  font-size: 16px;
  flex: 1;
  margin-left: 12px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 48px;
  padding: 0 24px;
  cursor: pointer;

  &:first-child {
    border-top-left-radius: 4px;
    border-top-right-radius: 4px;
  }

  &:last-child {
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
  }

  &:nth-child(odd) {
    background: #fff;
  }

  &:nth-child(even) {
    background: ${props => props.theme.neutral050};
  }
`;

const ScopesTable = () => {
  const [selectedScope, setSelectedScope] = useState(null);

  const scopes = useSelector(scopesSelector);

  return (
    <>
      <StyledScopesTable>
        {scopes.map(scope => (
          <Row key={scope._id}>
            <ScopeCode scopeCode={scope.shortCode} onClick={() => setSelectedScope(scope)} />
            <ScopeName onClick={() => setSelectedScope(scope)}>{scope.name}</ScopeName>
            <DotsMenu>
              <DropdownItem text="Edit" icon="EDIT" handleAction={() => setSelectedScope(scope)} />
              <DropdownItem text="Archive" icon="TRASH" handleAction={() => {}} />
            </DotsMenu>
          </Row>
        ))}
      </StyledScopesTable>
      {!!selectedScope && (
        <ScopeModal scope={selectedScope} closeModal={() => setSelectedScope(null)} />
      )}
    </>
  );
};

export default ScopesTable;
