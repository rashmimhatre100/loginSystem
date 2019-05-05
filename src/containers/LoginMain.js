import React from 'react';
// import { Button } from 'react-bootstrap';
import Login from '../components/Login';
import { connect } from 'react-redux';
import { LoginUser } from "../actions/userActions";


class LoginMain extends React.Component {

  componentDidMount() {
  }

  render() {
    return (
      <div className="container-fluid" >
        <div className="row" >
          <Login usersData={this.props.user.users} getUserLoginData={(data)=>this.props.getUserLoginData(data)}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('LoginMain mapStateToProps state => ',state);
  return {
    user : state.user,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    'getUserLoginData' : (data) =>{
      // console.log('data => ',data);
      dispatch(LoginUser(data));
    },
  };
}

export default connect( mapStateToProps, mapDispatchToProps )(LoginMain);