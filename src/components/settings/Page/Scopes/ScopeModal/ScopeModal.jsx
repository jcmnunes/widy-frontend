import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import styled from 'styled-components/macro';
import {
  Modal,
  ModalBody,
  ModalTitle,
  Input,
  ModalFooter,
  Button,
} from '@binarycapsule/ui-capsules';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { createScope } from './ScopeModal.actions';

export const InputField = styled.label`
  display: block;
  margin-bottom: 16px;
  font-size: 16px;
`;

export const ShortCodeWrapper = styled.div`
  width: 128px;
`;

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Please enter the scope's name"),
  shortCode: Yup.string().required('Please enter a short-code'),
});

const ScopeModal = ({ scope, closeModal }) => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: scope ? scope.name : '',
      shortCode: scope ? scope.shortCode : '',
    },
    validationSchema,
    onSubmit: (values, { setFieldError }) => {
      dispatch(createScope(values, { closeModal, setFieldError }));
    },
  });

  return (
    <Modal isOpen onRequestClose={closeModal} contentLabel="Create scope modal" width="384px">
      <form onSubmit={formik.handleSubmit}>
        <ModalBody>
          <ModalTitle>{scope ? 'Edit scope' : 'Create new scope'}</ModalTitle>
          <InputField>
            Name
            <Input
              placeholder="Scope name"
              id="name"
              name="name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.name}
              error={formik.errors.name && formik.touched.name ? formik.errors.name : ''}
            />
          </InputField>
          <InputField>
            Short Code
            <ShortCodeWrapper>
              <Input
                placeholder="Scope code"
                id="shortCode"
                name="shortCode"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.shortCode}
                error={
                  formik.errors.shortCode && formik.touched.shortCode ? formik.errors.shortCode : ''
                }
              />
            </ShortCodeWrapper>
          </InputField>
        </ModalBody>
        <ModalFooter>
          <Button appearance="secondary" size="large" onClick={closeModal}>
            Cancel
          </Button>
          <Button type="submit" appearance="primary" size="large">
            {scope ? 'Save Changes' : 'Create Scope'}
          </Button>
        </ModalFooter>
      </form>
    </Modal>
  );
};

ScopeModal.defaultProps = {
  scope: null,
};

ScopeModal.propTypes = {
  scope: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    shortCode: PropTypes.string,
  }),
  closeModal: PropTypes.func.isRequired,
};

export default ScopeModal;
