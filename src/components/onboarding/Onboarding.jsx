import React from 'react';
import PropTypes from 'prop-types';
import Joyride from 'react-joyride';

const steps = [
  {
    target: '[data-onboarding="no-days"]',
    content: (
      <div>
        <h1
          style={{
            fontWeight: 700,
            fontSize: '18px',
          }}
        >
          Hello{' '}
          <span role="img" aria-label="wave-emoji">
            👋
          </span>
          , thank you for using Widy{' '}
          <span role="img" aria-label="respect-emoji">
            ✊
          </span>
        </h1>
        Follow this guide to learn the basics of Widy.
        <br />
        Click the &quot;Next&quot; button below to get started.
      </div>
    ),
    placement: 'bottom',
  },
  {
    target: '.add-day-button',
    content:
      'Widy focus is your work day. To start tracking your work add a new day by clicking the button above.',
    spotlightClicks: true,
  },
];

const Onboarding = ({ daysLoading, sectionsLoading, theme }) => {
  const loading = daysLoading || sectionsLoading;

  return (
    !loading && (
      <Joyride
        steps={steps}
        continuous
        styles={{
          options: {
            primaryColor: theme.blue500,
          },
        }}
      />
    )
  );
};

Onboarding.propTypes = {
  daysLoading: PropTypes.bool.isRequired,
  sectionsLoading: PropTypes.bool.isRequired,
  theme: PropTypes.shape({
    [PropTypes.string]: PropTypes.string,
  }).isRequired,
};

export default Onboarding;
