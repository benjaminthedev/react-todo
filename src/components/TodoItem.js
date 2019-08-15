import React, { Component } from 'react'
import PropTypes from 'prop-types';
//import './TodoItem.css';


export class TodoItem extends Component {

    getStyle = () =>  {
        return {
            background: '#f4f4f4',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none',
            color: '#000',
            padding: '20px',
            borderBottom: '1px solid #ccc'
        }
    }



    render() {

        const { id, title } = this.props.todo;

        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" className="checkbox-custom" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                {title}
                <button onClick={this.props.delToDo.bind(this, id)} style={btnStyles}>x</button></p>
            </div>
        )
    }
}

//PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}



const btnStyles = {
    padding: "10px 15px",
    color: "#fff",
    borderRadius: "10%",
    background: "#ff0011",
    cursor: "pointer",
    float: "right",
    fontSize: "22px",
    marginTop: "-15px"
}

export default TodoItem
