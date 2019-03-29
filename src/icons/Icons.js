/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import theme from '../styles/theme';

export const IconChart = ({ size, primaryColor, secondaryColor }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
    <path
      fill={primaryColor}
      d="M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm11 4a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1z"
    />
    <path
      fill={secondaryColor}
      d="M8 11a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm4-2a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1z"
    />
  </svg>
);

IconChart.defaultProps = {
  size: 24,
  primaryColor: theme.neutral400,
  secondaryColor: theme.neutral500,
};

IconChart.propTypes = {
  size: PropTypes.number,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
};

export const IconLight = ({ size, primaryColor, secondaryColor }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
    <path
      fill={primaryColor}
      d="M5 8a7 7 0 1 1 10.62 6l-.64 3.2a1 1 0 0 1-.98.8h-4a1 1 0 0 1-.98-.8L8.38 14A7 7 0 0 1 5 8zm12 0a5 5 0 0 0-5-5 1 1 0 0 0 0 2 3 3 0 0 1 3 3 1 1 0 0 0 2 0z"
    />
    <path
      fill={secondaryColor}
      d="M15 21a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2 1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z"
    />
  </svg>
);

IconLight.defaultProps = {
  size: 24,
  primaryColor: theme.neutral400,
  secondaryColor: theme.neutral500,
};

IconLight.propTypes = {
  size: PropTypes.number,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
};

export const IconTrophy = ({ size, primaryColor, secondaryColor }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
    <path
      fill={secondaryColor}
      d="M7 4v2H4v4c0 1.1.9 2 2 2h1v2H6a4 4 0 0 1-4-4V6c0-1.1.9-2 2-2h3zm10 2V4h3a2 2 0 0 1 2 2v4a4 4 0 0 1-4 4h-1v-2h1a2 2 0 0 0 2-2V6h-3zm-3 14h2a1 1 0 0 1 0 2H8a1 1 0 0 1 0-2h2a1 1 0 0 0 1-1v-3h2v3a1 1 0 0 0 1 1z"
    />
    <path fill={primaryColor} d="M8 2h8a2 2 0 0 1 2 2v7a6 6 0 1 1-12 0V4c0-1.1.9-2 2-2z" />
  </svg>
);

IconTrophy.defaultProps = {
  size: 24,
  primaryColor: theme.neutral400,
  secondaryColor: theme.neutral500,
};

IconTrophy.propTypes = {
  size: PropTypes.number,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
};

export const IconAdd = ({ size, primaryColor }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
    <path
      fill={primaryColor}
      fillRule="evenodd"
      d="M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z"
    />
  </svg>
);

IconAdd.defaultProps = {
  size: 24,
  primaryColor: theme.neutral400,
};

IconAdd.propTypes = {
  size: PropTypes.number,
  primaryColor: PropTypes.string,
};

export const IconCheveronRight = ({ size, primaryColor }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
    <path
      fill={primaryColor}
      d="M10.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z"
    />
  </svg>
);

IconCheveronRight.defaultProps = {
  size: 24,
  primaryColor: theme.neutral400,
};

IconCheveronRight.propTypes = {
  size: PropTypes.number,
  primaryColor: PropTypes.string,
};

export const IconClose = ({ size, primaryColor }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
    <path
      fill={primaryColor}
      d="M15.78 14.36a1 1 0 0 1-1.42 1.42l-2.82-2.83-2.83 2.83a1 1 0 1 1-1.42-1.42l2.83-2.82L7.3 8.7a1 1 0 0 1 1.42-1.42l2.83 2.83 2.82-2.83a1 1 0 0 1 1.42 1.42l-2.83 2.83 2.83 2.82z"
    />
  </svg>
);

IconClose.defaultProps = {
  size: 24,
  primaryColor: theme.neutral400,
};

IconClose.propTypes = {
  size: PropTypes.number,
  primaryColor: PropTypes.string,
};

export const IconUserCircle = ({ size, primaryColor, secondaryColor }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
    <path
      fill={secondaryColor}
      d="M3.66 17.52a10 10 0 1 1 16.68 0C19.48 16.02 17.86 16 16 16H8c-1.86 0-3.48.01-4.34 1.52z"
    />
    <path
      fill={primaryColor}
      d="M3.66 17.52A5 5 0 0 1 8 15h8a5 5 0 0 1 4.34 2.52 10 10 0 0 1-16.68 0zM12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8z"
    />
  </svg>
);

IconUserCircle.defaultProps = {
  size: 24,
  primaryColor: theme.neutral700,
  secondaryColor: theme.neutral300,
};

IconUserCircle.propTypes = {
  size: PropTypes.number,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
};
