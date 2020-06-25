import React from 'react';
// import TaskList from './TaskList.component';
import Task from './Task.component';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
	margin: 8px;
	border: 1px solid grey;
	border-radius: 2px;
	width: 220px;
	display: flex;
	height: 100%;
	flex-direction: column;
`;
const Title = styled.h3`padding: 8px;`;
const TaskList = styled.div`
	padding: 8px;
	transition: background-color 0.4s ease;
	background-color: ${(props) => (props.isDraggingOver ? 'lightblue' : 'white')};
	flex-grow: 1;
`;

function Column({ column, tasks, isDropDisabled }) {
	return (
		<Container>
			<Title>{column.title}</Title>
			<Droppable droppableId={column.id} isDropDisabled={isDropDisabled}>
				{(provided, snapshot) => (
					<TaskList ref={provided.innerRef} {...provided.droppableProps} isDraggingOver={snapshot.isDraggingOver}>
						{tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
						{provided.placeholder}
					</TaskList>
				)}
			</Droppable>
		</Container>
	);
}

export default Column;
