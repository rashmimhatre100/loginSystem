import React, { Component } from 'react';
import { Redirect } from 'react-router';

export default class Registration extends Component {
	constructor(){
		super();
		this.state = {
						firstName : '',
						lastName  : '',
						email     : '',
						password  : '',
						mobile    : '',
						redirect  : false,
					};
		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	onSubmit(event){
		event.preventDefault();

		var emailExistTest = this.props.usersData.filter((item, index)=>{
								return item.email === this.refs.email.value ;
							})[0];
		if(!emailExistTest){
			var firstName = this.refs.firstName.value;
			var lastName  = this.refs.lastName.value;
			var email     = this.refs.email.value;
			var password  = this.refs.password.value;
			var mobile    = this.refs.mobile.value;

			// console.log('firstName ',firstName);
			// console.log('lastName ',lastName);
			// console.log('email ',email);
			// console.log('password ',password);
			// console.log('mobile ',mobile);
			var formData = {
								'firstName' : firstName,
								'lastName'  : lastName,
								'email'     : email,
								'password'  : password,
								'mobile'    : mobile,
							};
			this.props.getUserData(formData);
			this.setState({'redirect':true});
		}else{
			alert('Email address is already register with us. Kindly use another one or login with existing.')
		}
	}

	onChange(event){
		this.setState({
			[event.target.name] : event.target.value
		});
	}

	render(){
	  if(this.state.redirect){
	  	return(<Redirect to='/login' />);
	  }
	  return (
	    <div className="col-lg-4 offset-lg-4">
	    	<form onSubmit={this.onSubmit}>
	    		<div className="pageTitle">Let's Get Started</div>
	    		<div>
	    			<label className="col-lg-4">First Name</label>
	    			<input className="col-lg-8" type="text" required onChange={this.onChange} value={this.state.firstName} name="firstName" ref="firstName"/>
	    		</div>
	    		<div>
	    			<label className="col-lg-4">Last Name</label>
	    			<input className="col-lg-8" type="text" required onChange={this.onChange} value={this.state.lastName} name="lastName" ref="lastName"/>
	    		</div>
	    		<div>
	    			<label className="col-lg-4">Email</label>
	    			<input className="col-lg-8" type="email" required onChange={this.onChange} value={this.state.email} name="email" ref="email"/>
	    		</div>
	    		<div>
	    			<label className="col-lg-4">Password</label>
	    			<input className="col-lg-8" type="password" required onChange={this.onChange} value={this.state.password} name="password" ref="password"/>
	    		</div>
	    		<div>
	    			<label className="col-lg-4">Mobile</label>
	    			<input className="col-lg-8" type="text" required onChange={this.onChange} value={this.state.mobile} name="mobile" ref="mobile"/>
	    		</div>
	    		<div>
	    			<input className="col-lg-4 offset-lg-4 btn btn-primary submitBtn" type="submit" value="JOIN US"/>
	    		</div>
	    	</form>
	    </div>
	  );
	}
}
