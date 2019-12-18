import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Select } from '@binarycapsule/ui-capsules';
import CustomLabel from './components/CustomLabel';
import { scopesOptionsSelector, scopesSelector } from '../../../selectors/scopes/scopesSelectors';
import { selectedTaskSelector } from '../../../selectors/tasks/tasksSelectors';
import { updateTask } from '../../../actions/tasks';

const ScopeSelect = () => {
  const scopesOptions = useSelector(scopesOptionsSelector);
  const task = useSelector(selectedTaskSelector);
  const scopes = useSelector(scopesSelector);
  const scope = scopes.find(({ id }) => id === task.scopeId);

  const dispatch = useDispatch();

  const filterScopes = ({ data: { label, shortCode } }, input) => {
    if (input) {
      return (
        label.toLowerCase().includes(input.toLowerCase()) ||
        shortCode.toLowerCase().includes(input.toLowerCase())
      );
    }
    return true;
  };

  return (
    <Select
      isClearable
      value={scope ? { id: scope.id, label: scope.name, shortCode: scope.shortCode } : null}
      options={scopesOptions}
      placeholder="No scope"
      onChange={opt => dispatch(updateTask(task.id, { scopeId: opt ? opt.value : null }))}
      formatOptionLabel={CustomLabel}
      menuPortalTarget={document.body}
      filterOption={filterScopes}
    />
  );
};

export default ScopeSelect;
