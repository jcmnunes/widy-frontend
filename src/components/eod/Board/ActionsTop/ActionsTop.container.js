import { connect } from 'react-redux';
import { withTheme } from 'styled-components/macro';
import ActionsTop from './ActionsTop';

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(withTheme(ActionsTop));
