import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actions';
import App from './App';

const mapStateToProps = (state) => ({
  id: state.todos,
  todos: state.todos,
})

const mapDispachToProps = (dispatch) => (
  bindActionCreators(actionCreators, dispatch)
)

const MapPropsToApp = connect(mapStateToProps, mapDispachToProps)(App);

export default MapPropsToApp;