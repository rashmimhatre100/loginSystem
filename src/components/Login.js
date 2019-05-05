import React, { Component } from 'react';
import { Redirect } from 'react-router';

export default class Login extends Component {
	constructor(){
		super();
		this.state = {
						email     : '',
						password  : '',
						redirect  : false,
					};
		this.onSubmit = this.onSubmit.bind(this);
		this.onChange = this.onChange.bind(this);
	}

	onSubmit(event){
		event.preventDefault();
		var userExist = this.props.usersData.filter((item, index)=>{
			return item.email === this.refs.email.value && item.password === this.refs.password.value;
		})[0];
		if(userExist){
			var email     = this.refs.email.value;
			var password  = this.refs.password.value;

			// console.log('email ',email);
			// console.log('password ',password);
			var formData = {
								'email'     : email,
								'password'  : password,
							};
			this.props.getUserLoginData(formData);
			this.setState({'redirect':true});
		}else{
			alert('Please enter valid email address and password.');
		}
	}

	onChange(event){
		this.setState({
			[event.target.name] : event.target.value
		});
	}

	render(){
	  if(this.state.redirect){
	  	return(<Redirect to='/home' />);
	  }
	  return (
	    <div className="col-lg-4 offset-lg-4">
	    	<form onSubmit={this.onSubmit}>
	    		<div className="pageTitle">Let's Get Started</div>
	    		<div>
	    			<label className="col-lg-4">Email</label>
	    			<input className="col-lg-8" type="text" onChange={this.onChange} value={this.state.email} name="email" ref="email"/>
	    		</div>
	    		<div>
	    			<label className="col-lg-4">Password</label>
	    			<input className="col-lg-8" type="text" onChange={this.onChange} value={this.state.password} name="password" ref="password"/>
	    		</div>
	    		<div>
	    			<input className="col-lg-4 offset-lg-4 btn btn-primary submitBtn" type="submit" value="LOGIN"/>
	    		</div>
	    	</form>
	    </div>
	  );
	}
}
