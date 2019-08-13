import React from 'react';


class Todos extends React.Component {
 

    render() {
        //console.log(this.props.todos);
        return this.props.todos.map((todo) => (
            <h2>{todo.title}</h2>

        ) );
    }
}

export default Todos;
