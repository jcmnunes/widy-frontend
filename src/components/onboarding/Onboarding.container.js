import { connect } from 'react-redux';
import { withTheme } from 'styled-components/macro';
import Onboarding from './Onboarding';

const mapStateToProps = state => ({
  daysLoading: state.days.loading,
  sectionsLoading: state.sections.loading,
});

export default connect(mapStateToProps)(withTheme(Onboarding));
