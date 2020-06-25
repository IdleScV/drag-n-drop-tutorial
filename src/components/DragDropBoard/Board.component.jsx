import React, { useState } from 'react';
import { initialState } from '../../data/initial-data';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column.component';

function Board() {
	const [ data, dataSet ] = useState(initialState);

	const handleDragEnd = () => {
		console.log('Called handleDragEnd');
	};
	return (
		<DragDropContext onDragEnd={handleDragEnd}>
			{data.columnOrder.map((columnId) => {
				const column = data.columns[columnId];
				const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

				return <Column key={column.id} column={column} tasks={tasks} />;
			})}
		</DragDropContext>
	);
}

export default Board;
