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
  primaryColor: theme.neutral300,
  secondaryColor: theme.neutral400,
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
  primaryColor: theme.neutral300,
  secondaryColor: theme.neutral400,
};

IconLight.propTypes = {
  size: PropTypes.number,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
};

export const IconTime = ({ size, primaryColor, secondaryColor }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
    <circle fill={primaryColor} cx="12" cy="12" r="10" />
    <path
      fill={secondaryColor}
      d="M13 11.59l3.2 3.2a1 1 0 0 1-1.4 1.42l-3.5-3.5A1 1 0 0 1 11 12V7a1 1 0 0 1 2 0v4.59z"
    />
  </svg>
);

IconTime.defaultProps = {
  size: 24,
  primaryColor: theme.neutral300,
  secondaryColor: theme.neutral400,
};

IconTime.propTypes = {
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
  primaryColor: theme.neutral300,
  secondaryColor: theme.neutral400,
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
  primaryColor: theme.neutral300,
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
  primaryColor: theme.neutral300,
};

IconCheveronRight.propTypes = {
  size: PropTypes.number,
  primaryColor: PropTypes.string,
};

export const IconCheveronDown = ({ size, primaryColor }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
    <path
      fill={primaryColor}
      d="M15.3 10.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z"
    />
  </svg>
);

IconCheveronDown.defaultProps = {
  size: 24,
  primaryColor: theme.neutral600,
};

IconCheveronDown.propTypes = {
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
  primaryColor: theme.neutral300,
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
  primaryColor: theme.neutral600,
  secondaryColor: theme.neutral200,
};

IconUserCircle.propTypes = {
  size: PropTypes.number,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
};

export const IconPresentation = ({ size, primaryColor, secondaryColor }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
    <path
      fill={primaryColor}
      d="M11 18.62l-6.55 3.27a1 1 0 0 1-.9-1.78L11 16.38V5a1 1 0 0 1 2 0v11.38l7.45 3.73a1 1 0 0 1-.9 1.78L13 18.62V21a1 1 0 0 1-2 0v-2.38z"
    />
    <path
      fill={secondaryColor}
      d="M21 14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2V4a1 1 0 1 1 0-2h18a1 1 0 0 1 0 2v10z"
    />
  </svg>
);

IconPresentation.defaultProps = {
  size: 24,
  primaryColor: theme.neutral600,
  secondaryColor: theme.neutral200,
};

IconPresentation.propTypes = {
  size: PropTypes.number,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
};

export const IconDoorExit = ({ size, primaryColor, secondaryColor }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
    <path
      fill={primaryColor}
      d="M11 4h3a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V6h-2v12h2v-2a1 1 0 0 1 2 0v3a1 1 0 0 1-1 1h-3v1a1 1 0 0 1-1.27.96l-6.98-2A1 1 0 0 1 2 19V5a1 1 0 0 1 .75-.97l6.98-2A1 1 0 0 1 11 3v1z"
    />
    <path
      fill={secondaryColor}
      d="M18.59 11l-1.3-1.3c-.94-.94.47-2.35 1.42-1.4l3 3a1 1 0 0 1 0 1.4l-3 3c-.95.95-2.36-.46-1.42-1.4l1.3-1.3H14a1 1 0 0 1 0-2h4.59z"
    />
  </svg>
);

IconDoorExit.defaultProps = {
  size: 24,
  primaryColor: theme.neutral200,
  secondaryColor: theme.neutral600,
};

IconDoorExit.propTypes = {
  size: PropTypes.number,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
};

export const IconUser = ({ size, primaryColor, secondaryColor }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24">
    <path fill={primaryColor} d="M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z" />
    <path
      fill={secondaryColor}
      d="M21 20v-1a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v1c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2z"
    />
  </svg>
);

IconUser.defaultProps = {
  size: 24,
  primaryColor: theme.neutral200,
  secondaryColor: theme.neutral600,
};

IconUser.propTypes = {
  size: PropTypes.number,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
};

export const IconEdit = ({ size, primaryColor, secondaryColor, ...other }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...other}>
    <path
      fill={primaryColor}
      d="M4 14a1 1 0 0 1 .3-.7l11-11a1 1 0 0 1 1.4 0l3 3a1 1 0 0 1 0 1.4l-11 11a1 1 0 0 1-.7.3H5a1 1 0 0 1-1-1v-3z"
    />
    <rect fill={secondaryColor} width="20" height="2" x="2" y="20" rx="1" />
  </svg>
);

IconEdit.defaultProps = {
  size: 24,
  primaryColor: theme.neutral400,
  secondaryColor: theme.neutral400,
};

IconEdit.propTypes = {
  size: PropTypes.number,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
};

export const IconCheck = ({ size, primaryColor, ...other }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...other}>
    <path
      fill={primaryColor}
      d="M10 14.59l6.3-6.3a1 1 0 0 1 1.4 1.42l-7 7a1 1 0 0 1-1.4 0l-3-3a1 1 0 0 1 1.4-1.42l2.3 2.3z"
    />
  </svg>
);

IconCheck.defaultProps = {
  size: 24,
  primaryColor: theme.green400,
};

IconCheck.propTypes = {
  size: PropTypes.number,
  primaryColor: PropTypes.string,
};

export const IconFormatBold = ({ size, primaryColor, ...other }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20" {...other}>
    <path
      fill={primaryColor}
      d="M3 19V1h8a5 5 0 0 1 3.88 8.16A5.5 5.5 0 0 1 11.5 19H3zm7.5-8H7v5h3.5a2.5 2.5 0 1 0 0-5zM7 4v4h3a2 2 0 1 0 0-4H7z"
    />
  </svg>
);

IconFormatBold.defaultProps = {
  size: 20,
  primaryColor: theme.neutral400,
};

IconFormatBold.propTypes = {
  size: PropTypes.number,
  primaryColor: PropTypes.string,
};

export const IconFormatItalic = ({ size, primaryColor, ...other }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20" {...other}>
    <path fill={primaryColor} d="M8 1h9v2H8V1zm3 2h3L8 17H5l6-14zM2 17h9v2H2v-2z" />
  </svg>
);

IconFormatItalic.defaultProps = {
  size: 20,
  primaryColor: theme.neutral400,
};

IconFormatItalic.propTypes = {
  size: PropTypes.number,
  primaryColor: PropTypes.string,
};

export const IconFormatUnderline = ({ size, primaryColor, ...other }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20" {...other}>
    <path fill={primaryColor} d="M16 9A6 6 0 1 1 4 9V1h3v8a3 3 0 0 0 6 0V1h3v8zM2 17h16v2H2v-2z" />
  </svg>
);

IconFormatUnderline.defaultProps = {
  size: 20,
  primaryColor: theme.neutral400,
};

IconFormatUnderline.propTypes = {
  size: PropTypes.number,
  primaryColor: PropTypes.string,
};

export const IconFormatCode = ({ size, primaryColor, ...other }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20" {...other}>
    <path
      fill={primaryColor}
      d="M.7 9.3l4.8-4.8 1.4 1.42L2.84 10l4.07 4.07-1.41 1.42L0 10l.7-.7zm18.6 1.4l.7-.7-5.49-5.49-1.4 1.42L17.16 10l-4.07 4.07 1.41 1.42 4.78-4.78z"
    />
  </svg>
);

IconFormatCode.defaultProps = {
  size: 20,
  primaryColor: theme.neutral400,
};

IconFormatCode.propTypes = {
  size: PropTypes.number,
  primaryColor: PropTypes.string,
};

export const IconFormatHeading1 = ({ size, primaryColor, ...other }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20" {...other}>
    <path
      fill={primaryColor}
      d="M5 13.9v.9c0 .3-.2.5-.5.5H.7c-.3 0-.5-.2-.5-.5v-.9c0-.3.2-.5.5-.5h.7V6.6H.7c-.3 0-.5-.2-.5-.5v-.9c0-.3.2-.5.5-.5h3.8c.2 0 .5.2.5.5v.9c0 .3-.2.5-.5.5h-.8V9h4.1V6.6h-.7c-.3 0-.5-.2-.5-.5v-.9c0-.3.2-.5.5-.5h3.8c.3 0 .5.2.5.5v.9c0 .3-.2.5-.5.5h-.7v6.8h.7c.3 0 .5.2.5.5v.9c0 .3-.2.5-.5.5H7.1c-.3 0-.5-.2-.5-.5v-.9c0-.3.2-.5.5-.5h.7V11H3.7v2.4h.7c.3 0 .6.2.6.5zm12.2-9.2H16c-.1 0-.3.1-.4.1L13.3 7c-.2.2-.2.5 0 .8l.7.7c.2.2.5.2.8 0l.6-.6v5.3h-1.7c-.3 0-.5.2-.5.5v1c0 .3.2.5.5.5h5.7c.3 0 .5-.2.5-.5v-1c0-.3-.2-.5-.5-.5h-1.7v-8c0-.3-.3-.5-.5-.5z"
    />
  </svg>
);

IconFormatHeading1.defaultProps = {
  size: 20,
  primaryColor: theme.neutral400,
};

IconFormatHeading1.propTypes = {
  size: PropTypes.number,
  primaryColor: PropTypes.string,
};

export const IconFormatHeading2 = ({ size, primaryColor, ...other }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 20 20" {...other}>
    <path
      fill={primaryColor}
      d="M14.9 13.8h4.7c.2 0 .4.2.4.4v.8c0 .2-.2.4-.4.4h-6.3c-.2 0-.4-.1-.4-.4v-.6c0-3.8 5.1-4.4 5.1-6.7 0-.9-.7-1.5-1.7-1.5-.8 0-1.4.4-1.8 1.1-.1.2-.4.2-.6.1l-.7-.4c-.2-.2-.3-.4-.2-.6.2-.3.4-.6.7-.8.5-.5 1.4-1 2.6-1 2 0 3.5 1.3 3.5 3.2 0 3.3-4.6 4-4.9 6zm-10.4.6v.7c0 .2-.2.4-.4.4H.4c-.2 0-.4-.2-.4-.4v-.7c0-.3.2-.4.4-.4h.9V6.2H.4C.2 6.2 0 6 0 5.8v-.7c0-.2.2-.4.4-.4H4c.2 0 .4.2.4.4v.7c0 .2-.2.4-.4.4h-.9v3.1h5V6.2h-.8c-.3 0-.4-.2-.4-.4v-.7c0-.2.2-.4.4-.4h3.6c.2 0 .4.2.4.4v.7c0 .2-.2.4-.4.4H10V14h.9c.2 0 .4.2.4.4v.7c0 .2-.2.4-.4.4H7.3c-.2 0-.4-.2-.4-.4v-.7c0-.3.1-.4.4-.4h.9v-3.1h-5V14h.9c.2 0 .4.1.4.4z"
    />
  </svg>
);

IconFormatHeading2.defaultProps = {
  size: 20,
  primaryColor: theme.neutral400,
};

IconFormatHeading2.propTypes = {
  size: PropTypes.number,
  primaryColor: PropTypes.string,
};

export const IconFormatQuote = ({ size, primaryColor, ...other }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 16 16" {...other}>
    <path
      fill={primaryColor}
      d="M12.5 10c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5l0.016 0.5c0 3.866-3.134 7-7 7v-2c1.336 0 2.591-0.52 3.536-1.464 0.182-0.182 0.348-0.375 0.497-0.578-0.179 0.028-0.362 0.043-0.549 0.043zM3.5 10c-1.933 0-3.5-1.567-3.5-3.5s1.567-3.5 3.5-3.5 3.5 1.567 3.5 3.5l0.016 0.5c0 3.866-3.134 7-7 7v-2c1.336 0 2.591-0.52 3.536-1.464 0.182-0.182 0.348-0.375 0.497-0.578-0.179 0.028-0.362 0.043-0.549 0.043z"
    />
  </svg>
);

IconFormatQuote.defaultProps = {
  size: 16,
  primaryColor: theme.neutral400,
};

IconFormatQuote.propTypes = {
  size: PropTypes.number,
  primaryColor: PropTypes.string,
};

export const IconFormatListNumber = ({ size, primaryColor, ...other }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...other}>
    <path
      fill={primaryColor}
      d="M2 17h2v.5H3v1h1v.5H2v1h3v-4H2v1zm1-9h1V4H2v1h1v3zm-1 3h1.8L2 13.1v.9h3v-1H3.2L5 10.9V10H2v1zm5-6v2h14V5H7zm0 14h14v-2H7v2zm0-6h14v-2H7v2z"
    />
    <path d="M0 0h24v24H0z" fill="none" />
  </svg>
);

IconFormatListNumber.defaultProps = {
  size: 24,
  primaryColor: theme.neutral400,
};

IconFormatListNumber.propTypes = {
  size: PropTypes.number,
  primaryColor: PropTypes.string,
};

export const IconFormatListBullet = ({ size, primaryColor, ...other }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...other}>
    <path
      fill={primaryColor}
      d="M4 10.5c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5zm0-6c-.83 0-1.5.67-1.5 1.5S3.17 7.5 4 7.5 5.5 6.83 5.5 6 4.83 4.5 4 4.5zm0 12c-.83 0-1.5.68-1.5 1.5s.68 1.5 1.5 1.5 1.5-.68 1.5-1.5-.67-1.5-1.5-1.5zM7 19h14v-2H7v2zm0-6h14v-2H7v2zm0-8v2h14V5H7z"
    />
    <path fill="none" d="M0 0h24v24H0V0z" />
  </svg>
);

IconFormatListBullet.defaultProps = {
  size: 24,
  primaryColor: theme.neutral400,
};

IconFormatListBullet.propTypes = {
  size: PropTypes.number,
  primaryColor: PropTypes.string,
};

export const IconRightThickArrow = ({
  size,
  withCircle,
  primaryColor,
  secondaryColor,
  ...other
}) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...other}>
    {withCircle && <circle fill={secondaryColor} cx="12" cy="12" r="10" />}
    <path
      fill={primaryColor}
      d="M12 14H7a1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1h5V8a1 1 0 0 1 1.7-.7l4 4a1 1 0 0 1 0 1.4l-4 4A1 1 0 0 1 12 16v-2z"
    />
  </svg>
);

IconRightThickArrow.defaultProps = {
  size: 24,
  withCircle: false,
  primaryColor: theme.neutral700,
  secondaryColor: theme.neutral300,
};

IconRightThickArrow.propTypes = {
  size: PropTypes.number,
  withCircle: PropTypes.bool,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
};

export const IconLaunch = ({ size, primaryColor, secondaryColor, ...other }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...other}>
    <path
      fill={primaryColor}
      d="M14.57 6.96a2 2 0 0 1 2.47 2.47c.29.17.5.47.5.86v7.07a1 1 0 0 1-.3.71L13 22.31a1 1 0 0 1-1.7-.7v-3.58l-.49.19a1 1 0 0 1-1.17-.37 14.1 14.1 0 0 0-3.5-3.5 1 1 0 0 1-.36-1.16l.19-.48H2.39A1 1 0 0 1 1.7 11l4.24-4.24a1 1 0 0 1 .7-.3h7.08c.39 0 .7.21.86.5zM13.19 9.4l-2.15 2.15a3 3 0 0 1 .84.57 3 3 0 0 1 .57.84l2.15-2.15a2 2 0 0 1-1.4-1.41zm6.98-6.61a1 1 0 0 1 1.04 1.04c-.03.86-.13 1.71-.3 2.55-.47-.6-1.99-.19-2.55-.74-.55-.56-.14-2.08-.74-2.55.84-.17 1.7-.27 2.55-.3z"
    />
    <path
      fill={secondaryColor}
      d="M7.23 10.26A16.05 16.05 0 0 1 17.62 3.1a19.2 19.2 0 0 1 3.29 3.29 15.94 15.94 0 0 1-7.17 10.4 19.05 19.05 0 0 0-6.51-6.52zm-.86 5.5a16.2 16.2 0 0 1 1.87 1.87 1 1 0 0 1-.47 1.6c-.79.25-1.6.42-2.4.54a1 1 0 0 1-1.14-1.13c.12-.82.3-1.62.53-2.41a1 1 0 0 1 1.6-.47zm7.34-5.47a2 2 0 1 0 2.83-2.83 2 2 0 0 0-2.83 2.83z"
    />
  </svg>
);

IconLaunch.defaultProps = {
  size: 24,
  primaryColor: theme.neutral300,
  secondaryColor: theme.neutral200,
};

IconLaunch.propTypes = {
  size: PropTypes.number,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
};

export const IconTrash = ({ size, primaryColor, secondaryColor, ...other }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...other}>
    <path
      fill={primaryColor}
      d="M5 5h14l-.89 15.12a2 2 0 0 1-2 1.88H7.9a2 2 0 0 1-2-1.88L5 5zm5 5a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1z"
    />
    <path
      fill={secondaryColor}
      d="M8.59 4l1.7-1.7A1 1 0 0 1 11 2h2a1 1 0 0 1 .7.3L15.42 4H19a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2h3.59z"
    />
  </svg>
);

IconTrash.defaultProps = {
  size: 24,
  primaryColor: theme.neutral300,
  secondaryColor: theme.neutral200,
};

IconTrash.propTypes = {
  size: PropTypes.number,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
};

export const IconCog = ({ size, primaryColor, secondaryColor, ...other }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" {...other}>
    <path
      fill={primaryColor}
      d="M6.8 3.45c.87-.52 1.82-.92 2.83-1.17a2.5 2.5 0 0 0 4.74 0c1.01.25 1.96.65 2.82 1.17a2.5 2.5 0 0 0 3.36 3.36c.52.86.92 1.8 1.17 2.82a2.5 2.5 0 0 0 0 4.74c-.25 1.01-.65 1.96-1.17 2.82a2.5 2.5 0 0 0-3.36 3.36c-.86.52-1.8.92-2.82 1.17a2.5 2.5 0 0 0-4.74 0c-1.01-.25-1.96-.65-2.82-1.17a2.5 2.5 0 0 0-3.36-3.36 9.94 9.94 0 0 1-1.17-2.82 2.5 2.5 0 0 0 0-4.74c.25-1.01.65-1.96 1.17-2.82a2.5 2.5 0 0 0 3.36-3.36zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"
    />
    <circle fill={secondaryColor} cx="12" cy="12" r="2" />
  </svg>
);

IconCog.defaultProps = {
  size: 24,
  primaryColor: theme.neutral200,
  secondaryColor: theme.neutral600,
};

IconCog.propTypes = {
  size: PropTypes.number,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
};
