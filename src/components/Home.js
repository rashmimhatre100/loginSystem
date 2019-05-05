import React, { Component } from 'react';
import { connect } from 'react-redux';

export default class Home extends Component {
	render(){
	  return (
	    <div className="col-lg-4 offset-lg-4">
            <div className="pageTitle">Home</div>
    		<div>
    			<label className="col-lg-4">First Name </label>
    			<span className="col-lg-8">{this.props.user.loginUser.firstName}</span>
    		</div>
    		<div>
    			<label className="col-lg-4">Last Name </label>
    			<span className="col-lg-8">{this.props.user.loginUser.lastName}</span>
    		</div>
    		<div>
    			<label className="col-lg-4">Email </label>
    			<span className="col-lg-8">{this.props.user.loginUser.email}</span>
    		</div>
    		<div>
    			<label className="col-lg-4">Mobile </label>
    			<span className="col-lg-8">{this.props.user.loginUser.mobile}</span>
    		</div>
	    </div>
	  );
	}
}
