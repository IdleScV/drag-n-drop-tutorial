export const initialState = {
	tasks: {
		'task-1': { id: 'task-1', content: 'Take out the garbage' },
		'task-2': { id: 'task-2', content: 'Take out the garbage' },
		'task-3': { id: 'task-3', content: 'Take out the garbage' },
		'task-4': { id: 'task-4', content: 'Take out the garbage' },
		'task-5': { id: 'task-5', content: 'Take out the garbage' },
		'task-6': { id: 'task-6', content: 'Take out the garbage' },
		'task-7': { id: 'task-7', content: 'Take out the garbage' }
		// 'task-8': { id: 'task-8', content: 'Take out the garbage' },
		// 'task-9': { id: 'task-9', content: 'Take out the garbage' },
		// 'task-10': { id: 'task-10', content: 'Take out the garbage' },
		// 'task-11': { id: 'task-11', content: 'Take out the garbage' },
		// 'task-12': { id: 'task-12', content: 'Take out the garbage' },
		// 'task-13': { id: 'task-13', content: 'Take out the garbage' },
		// 'task-14': { id: 'task-14', content: 'Take out the garbage' }
	},
	columns: {
		'column-1': {
			id: 'column-1',
			title: 'To Do',
			taskIds: [ 'task-1', 'task-2', 'task-3', 'task-4', 'task-5', 'task-6', 'task-7' ]
		}
		// 'column-2': {
		// 	id: 'column-2',
		// 	title: 'To Do',
		// 	taskIds: [ 'task-8', 'task-9', 'task-10', 'task-11', 'task-12', 'task-13', 'task-14' ]
		// }
	},
	columnOrder: [ 'column-1' ]
};
