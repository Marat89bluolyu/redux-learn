/**
 * Created by Marat on 08.03.2018.
 */
import React, {Component} from 'react';

let nextTodoId = 0;
export default class TodoApp extends React.Component {
	render() {
		const {store} = this.props;
		
		return (
			<div>
				<button onClick={() => {
					store.dispatch({
						type: 'ADD_TODO',
						text: 'text',
						id: nextTodoId++
					})
				}}>
					Add</button>
				<ul>
					{...store.getState().todos.map(todo => {
						<li key={todo.id}>{todo.text}</li>
					})}
				</ul>
			</div>
		)
	}
}

