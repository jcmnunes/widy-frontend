import { connect } from 'react-redux';
import Sidebar from './Sidebar';
import { closeSidebar } from '../../../actions/sidebar';

const mapStateToProps = state => ({
  isOpen: state.sidebar.isOpen,
});

export default connect(
  mapStateToProps,
  { closeSidebar },
)(Sidebar);
