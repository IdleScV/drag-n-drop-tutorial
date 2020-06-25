import React from 'react';
// import TaskList from './TaskList.component';
import Task from './Task.component';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const Container = styled.div`
	margin: 8px;
	border: 1px solid light grey;
	border-radius: 2px;
`;
const Title = styled.h3`padding: 8px;`;
const TaskList = styled.div`padding: 8px;`;

function Column({ column, tasks }) {
	return (
		<Container>
			<Title>{column.title}</Title>
			<Droppable droppableId={column.id}>
				{(provided) => (
					<TaskList ref={provided.innerRef} {...provided.droppableProps}>
						{tasks.map((task, index) => <Task key={task.id} task={task} index={index} />)}
						{provided.placeholder}
					</TaskList>
				)}
			</Droppable>
		</Container>
	);
}

export default Column;
