import { connect } from 'react-redux';
import Account from '../components/account';

const mapStateToProps = (state) => {
  return {
    username: state.userInfo.username
  }
};

const AccountContainer = connect(mapStateToProps)(Account);
export default AccountContainer;
