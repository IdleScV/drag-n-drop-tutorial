import React, { useState } from 'react';
import { initialState } from '../../data/initial-data';
import { DragDropContext } from 'react-beautiful-dnd';
import Column from './Column.component';
import styled from 'styled-components';

const Container = styled.div`display: flex;`;

function Board() {
	const [ data, dataSet ] = useState(initialState);
	const [ update, updateSet ] = useState(true);
	const [ homeIndex, homeIndexSet ] = useState(null);

	// Handles Dom updates for states that hold objects
	const updateDom = () => {
		updateSet(!update);
	};

	// Handles changes in Drag
	const handleDragEnd = (result) => {
		//* Purely drag & drop functions
		const { destination, source, draggableId } = result;
		if (!destination) {
			return;
		}
		let sourceLocation = { column: source.droppableId, index: source.index };
		let destinationLocation = { column: destination.droppableId, index: destination.index };
		let columns = data.columns;
		// pull out task with splice
		let task = columns[sourceLocation.column].taskIds.splice(sourceLocation.index, 1);
		// insert task with splice
		columns[destinationLocation.column].taskIds.splice(destinationLocation.index, 0, ...task);
		// set old column to new column
		data.columns = columns;
		dataSet(data);
		updateDom();

		//* Drag right only function
		homeIndexSet(null);
	};

	const handleDragStart = (result) => {
		const { source, draggableId } = result;
		//* Drag right only function
		homeIndexSet(data.columnOrder.indexOf(source.droppableId));
	};

	const handleDragUpdate = (result) => {
		const { destination, source, draggableId } = result;
	};

	console.log(homeIndex);

	return (
		<DragDropContext onDragEnd={handleDragEnd} onDragStart={handleDragStart} onDragUpdate={handleDragUpdate}>
			<Container>
				{data.columnOrder.map((columnId, index) => {
					const column = data.columns[columnId];
					const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

					//* Drag right only function
					const isDropDisabled = index < homeIndex;

					return <Column key={column.id} column={column} tasks={tasks} isDropDisabled={isDropDisabled} />;
				})}
			</Container>
		</DragDropContext>
	);
}

export default Board;
