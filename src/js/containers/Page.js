import { DISMISS_SESSION_WARNING } from '../actions/types';
import { connect } from 'react-redux';
import Page from '../components/page';

const mapStateToProps = state => {
  const { pageToDisplay, showSessionWarning } = state.page;
  return {
    pageToDisplay,
    showSessionWarning
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleCloseModal: () => {
      dispatch({
        type: DISMISS_SESSION_WARNING
      });
    }
  };
};

const PageContainer = connect(mapStateToProps, mapDispatchToProps)(Page);
export default PageContainer;
