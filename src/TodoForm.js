import React, { Component } from 'react';
import PropTypes from 'prop-types';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: '',
        };
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    handleSubmit(event) {
		console.log(this);
        console.log(this.state);
        
		this.props.updateMyTodoList(this.state.title);
        // alert('A email was submitted: ' + this.state.email);
        // event.preventDefault();
        // console.log(this.state);
        // this.verifyConfirmPwd();

    }
	
	handleReset(event) {
		this.props.resetMyTodoList();
    }
	
    handleTitleChange(event) {
        this.onChange("title", event.target.value);
    }

    onChange(field, value) {
        this.setState({[field]: value});
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} >
                <label>
                    Mon nouveau petit Todo :
                    <input type="text" name="title" onChange={this.handleTitleChange} />
                </label>

                <input type="button" name="mySubmit" value="Ajouter dans la liste" onClick={this.handleSubmit}/>
                <input type="button" name="myReset" value="Reset todoList" onClick={this.handleReset}/>
            </form>
        );
    }
}


LoginForm.propTypes = {

};

export default LoginForm;