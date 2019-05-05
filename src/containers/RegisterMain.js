import React, { Component } from 'react';
// import { Button } from 'react-bootstrap';
import Registration from '../components/Registration';
import { connect } from 'react-redux';
import { registerUser } from "../actions/userActions";


class RegisterMain extends Component{

  componentDidMount() {
  }

  render() {
    return (
      <div className="container-fluid" >
        <div className="row" >
          <Registration usersData={this.props.user.users} getUserData={(data)=>this.props.getUserData(data)}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  // console.log('RegisterMain mapStateToProps state => ',state);
  return {
    user : state.user,
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    'getUserData' : (data) =>{
      // console.log('data => ',data);
      dispatch(registerUser(data));
    },
  };
}

export default connect( mapStateToProps, mapDispatchToProps )(RegisterMain);