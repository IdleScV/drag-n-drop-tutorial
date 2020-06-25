import React from 'react';
import Task from './Task.component';

function TaskList({ tasks }) {
	return <div id="task-list">{tasks.map((task, i) => <Task task={task} key={i} />)}</div>;
	// return <div>This is a Task List</div>;
}

export default TaskList;
