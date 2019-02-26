import React, { Component } from 'react';
import './TodoItem.css';

class TodoItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isDone: this.props.isDone,
        };
        this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
    }

    componentDidMount() {

    }

    // shouldComponentUpdate() {
    // }

    // handleClick(event) {
    //     console.log(event.nativeEvent.type);
    // }

    handleCheckBoxChange(event) {
        console.log('onChange');
        console.log('event.target : ' + event.target);
        console.log('event.target.value : ' + event.target.value);
        console.log('event.target.checked : ' + event.target.checked);
        this.setState({isDone: event.target.checked});
    }

    render() {
        const upperTitle = this.props.title.toUpperCase();
        // const isDone = this.props.isDone;
        const isDone = this.state.isDone;
        console.log('isDone : ' + isDone);
        return <li className={isDone!==false?"isChecked":""} > <input type="checkbox" name={this.props.mykey} checked={isDone!==false} onChange={this.handleCheckBoxChange} /> {upperTitle}</li>;
  }
}

export default TodoItem;


// disabled={this.checkIfFormIsValid()===false} />
