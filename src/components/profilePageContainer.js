import { connect } from 'react-redux';
import { receiveFirstName, receiveLastName, receiveBio, receiveLocation } from '../actions/profileActions';
import ProfilePage from './profilePage';

const mapStateToProps = state => (
  state.user
);

const mapDispatchToProps = dispatch => ({
  receiveFirstName: firstName => dispatch(receiveFirstName(firstName)),
  receiveLastName: lastName => dispatch(receiveLastName(lastName)),
  receiveBio: bio => dispatch(receiveBio(bio)),
  receiveLocation: location => dispatch(receiveLocation(location)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ProfilePage);
