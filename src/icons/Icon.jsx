import React from 'react';
import PropTypes from 'prop-types';

const Icon = ({ icon, size, primaryColor, secondaryColor, className }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    className={className}
  >
    <path fill={primaryColor || 'currentColor'} className="primary" d={icon[0]} />
    <path fill={secondaryColor || 'currentColor'} className="secondary" d={icon[1]} />
  </svg>
);

Icon.defaultProps = {
  size: '24px',
  primaryColor: null,
  secondaryColor: null,
};

Icon.propTypes = {
  icon: PropTypes.arrayOf(PropTypes.string).isRequired,
  size: PropTypes.string,
  primaryColor: PropTypes.string,
  secondaryColor: PropTypes.string,
  className: PropTypes.string.isRequired,
};

Icon.CHART = [
  'M5 3h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5c0-1.1.9-2 2-2zm11 4a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1z',
  'M8 11a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0v-4a1 1 0 0 1 1-1zm4-2a1 1 0 0 1 1 1v6a1 1 0 0 1-2 0v-6a1 1 0 0 1 1-1',
];

Icon.LIGHT = [
  'M5 8a7 7 0 1 1 10.62 6l-.64 3.2a1 1 0 0 1-.98.8h-4a1 1 0 0 1-.98-.8L8.38 14A7 7 0 0 1 5 8zm12 0a5 5 0 0 0-5-5 1 1 0 0 0 0 2 3 3 0 0 1 3 3 1 1 0 0 0 2 0z',
  'M15 21a2 2 0 0 1-2 2h-2a2 2 0 0 1-2-2 1 1 0 0 1 0-2h6a1 1 0 0 1 0 2z',
];

Icon.PLAY = [
  'M12,2c5.5,0,10,4.5,10,10s-4.5,10-10,10S2,17.5,2,12S6.5,2,12,2z',
  'M15.51 11.14a1 1 0 0 1 0 1.72l-5 3A1 1 0 0 1 9 15V9a1 1 0 0 1 1.51-.86l5 3z',
];

Icon.STOP = [
  'M12,2c5.5,0,10,4.5,10,10s-4.5,10-10,10S2,17.5,2,12S6.5,2,12,2z',
  'M9.5 8.5h5a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1z',
];

Icon.TIME = [
  'M12,2c5.5,0,10,4.5,10,10s-4.5,10-10,10S2,17.5,2,12S6.5,2,12,2z',
  'M13 11.59l3.2 3.2a1 1 0 0 1-1.4 1.42l-3.5-3.5A1 1 0 0 1 11 12V7a1 1 0 0 1 2 0v4.59z',
];

Icon.SURVEY = [
  'M5 5h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2zm3 7a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2H8zm0 4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2H8z',
  'M15 4a2 2 0 0 1 2 2v1a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V6c0-1.1.9-2 2-2 0-1.1.9-2 2-2h2a2 2 0 0 1 2 2z',
];

Icon.CHEVERON_DOWN = [
  'M15.3 10.3a1 1 0 0 1 1.4 1.4l-4 4a1 1 0 0 1-1.4 0l-4-4a1 1 0 0 1 1.4-1.4l3.3 3.29 3.3-3.3z',
  '',
];

Icon.CHEVERON_RIGHT = [
  'M10.3 8.7a1 1 0 0 1 1.4-1.4l4 4a1 1 0 0 1 0 1.4l-4 4a1 1 0 0 1-1.4-1.4l3.29-3.3-3.3-3.3z',
  '',
];

Icon.PRESENTATION = [
  'M11 18.62l-6.55 3.27a1 1 0 0 1-.9-1.78L11 16.38V5a1 1 0 0 1 2 0v11.38l7.45 3.73a1 1 0 0 1-.9 1.78L13 18.62V21a1 1 0 0 1-2 0v-2.38z',
  'M21 14a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2V4a1 1 0 1 1 0-2h18a1 1 0 0 1 0 2v10z',
];

Icon.USER = [
  'M12 12a5 5 0 1 1 0-10 5 5 0 0 1 0 10z',
  'M21 20v-1a5 5 0 0 0-5-5H8a5 5 0 0 0-5 5v1c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2z',
];

Icon.USER_CIRCLE = [
  'M3.66 17.52a10 10 0 1 1 16.68 0C19.48 16.02 17.86 16 16 16H8c-1.86 0-3.48.01-4.34 1.52z',
  'M3.66 17.52A5 5 0 0 1 8 15h8a5 5 0 0 1 4.34 2.52 10 10 0 0 1-16.68 0zM12 13a4 4 0 1 1 0-8 4 4 0 0 1 0 8z',
];

Icon.COG = [
  'M6.8 3.45c.87-.52 1.82-.92 2.83-1.17a2.5 2.5 0 0 0 4.74 0c1.01.25 1.96.65 2.82 1.17a2.5 2.5 0 0 0 3.36 3.36c.52.86.92 1.8 1.17 2.82a2.5 2.5 0 0 0 0 4.74c-.25 1.01-.65 1.96-1.17 2.82a2.5 2.5 0 0 0-3.36 3.36c-.86.52-1.8.92-2.82 1.17a2.5 2.5 0 0 0-4.74 0c-1.01-.25-1.96-.65-2.82-1.17a2.5 2.5 0 0 0-3.36-3.36 9.94 9.94 0 0 1-1.17-2.82 2.5 2.5 0 0 0 0-4.74c.25-1.01.65-1.96 1.17-2.82a2.5 2.5 0 0 0 3.36-3.36zM12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z',
  'M12 10a2 2 0 1 1-2 2 2 2 0 0 1 2-2z',
];

Icon.DUPLICATE = [
  'M5 3h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z',
  'M9 7h10a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2z',
];

Icon.EDIT = [
  'M4,14a1,1,0,0,1,.3-.7l11-11a1,1,0,0,1,1.4,0l3,3a1,1,0,0,1,0,1.4l-11,11A1,1,0,0,1,8,18H5a1,1,0,0,1-1-1Z',
  'M3,20H21a1,1,0,0,1,1,1h0a1,1,0,0,1-1,1H3a1,1,0,0,1-1-1H2A1,1,0,0,1,3,20Z',
];

Icon.LAUNCH = [
  'M14.57 6.96a2 2 0 0 1 2.47 2.47c.29.17.5.47.5.86v7.07a1 1 0 0 1-.3.71L13 22.31a1 1 0 0 1-1.7-.7v-3.58l-.49.19a1 1 0 0 1-1.17-.37 14.1 14.1 0 0 0-3.5-3.5 1 1 0 0 1-.36-1.16l.19-.48H2.39A1 1 0 0 1 1.7 11l4.24-4.24a1 1 0 0 1 .7-.3h7.08c.39 0 .7.21.86.5zM13.19 9.4l-2.15 2.15a3 3 0 0 1 .84.57 3 3 0 0 1 .57.84l2.15-2.15a2 2 0 0 1-1.4-1.41zm6.98-6.61a1 1 0 0 1 1.04 1.04c-.03.86-.13 1.71-.3 2.55-.47-.6-1.99-.19-2.55-.74-.55-.56-.14-2.08-.74-2.55.84-.17 1.7-.27 2.55-.3z',
  'M7.23 10.26A16.05 16.05 0 0 1 17.62 3.1a19.2 19.2 0 0 1 3.29 3.29 15.94 15.94 0 0 1-7.17 10.4 19.05 19.05 0 0 0-6.51-6.52zm-.86 5.5a16.2 16.2 0 0 1 1.87 1.87 1 1 0 0 1-.47 1.6c-.79.25-1.6.42-2.4.54a1 1 0 0 1-1.14-1.13c.12-.82.3-1.62.53-2.41a1 1 0 0 1 1.6-.47zm7.34-5.47a2 2 0 1 0 2.83-2.83 2 2 0 0 0-2.83 2.83z',
];

Icon.TRASH = [
  'M5 5h14l-.89 15.12a2 2 0 0 1-2 1.88H7.9a2 2 0 0 1-2-1.88L5 5zm5 5a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1zm4 0a1 1 0 0 0-1 1v6a1 1 0 0 0 2 0v-6a1 1 0 0 0-1-1z',
  'M8.59 4l1.7-1.7A1 1 0 0 1 11 2h2a1 1 0 0 1 .7.3L15.42 4H19a1 1 0 0 1 0 2H5a1 1 0 1 1 0-2h3.59z',
];

Icon.ADD = [
  'M17 11a1 1 0 0 1 0 2h-4v4a1 1 0 0 1-2 0v-4H7a1 1 0 0 1 0-2h4V7a1 1 0 0 1 2 0v4h4z',
  '',
];

export default Icon;
