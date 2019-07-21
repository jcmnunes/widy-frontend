import { connect } from 'react-redux';
import Toaster from './Toaster.component';
import { showSuccessToast } from './Toaster.actions';

const mapDispatchToProps = {
  showSuccessToast,
};

export default connect(
  null,
  mapDispatchToProps,
)(Toaster);
