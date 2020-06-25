export const initialState = {
	tasks: {
		'task-1': { id: 'task-1', content: '1' },
		'task-2': { id: 'task-2', content: '2' },
		'task-3': { id: 'task-3', content: '3' },
		'task-4': { id: 'task-4', content: '4' },
		'task-5': { id: 'task-5', content: '5' },
		'task-6': { id: 'task-6', content: '6' },
		'task-7': { id: 'task-7', content: '7' },
		'task-8': { id: 'task-8', content: '8' },
		'task-9': { id: 'task-9', content: '9' },
		'task-10': { id: 'task-10', content: '10' },
		'task-11': { id: 'task-11', content: '11' },
		'task-12': { id: 'task-12', content: '12' },
		'task-13': { id: 'task-13', content: '13' },
		'task-14': { id: 'task-14', content: '14' },
		'task-15': { id: 'task-15', content: '15' }
	},
	columns: {
		'column-1': {
			id: 'column-1',
			title: 'To Do',
			taskIds: [ 'task-1', 'task-2', 'task-3', 'task-4', 'task-5', 'task-6', 'task-7' ]
		},
		'column-2': {
			id: 'column-2',
			title: 'In Progress',
			taskIds: [ 'task-8', 'task-9', 'task-10', 'task-11', 'task-12', 'task-13', 'task-14' ]
		},
		'column-3': {
			id: 'column-3',
			title: 'Done',
			taskIds: [ 'task-15' ]
		}
	},
	columnOrder: [ 'column-1', 'column-2', 'column-3' ]
};
