$(function() {
	let todos = [
		{
			task: 'finish tutorials',
			isCompleted: false,
		}, 

		{
			task: 'take a nap',
			isCompleted: true,
		}
	]

	const app = {
		showTodos: function() {
			let todosListEl = $('#todos-list');

			todosListEl.html('');

			todos.forEach(function(todo) {
				todosListEl.append('\
						<tr>\
							<td>' + todo.task + '</td>\
							<td>\
								<button>Edit</button>\
								<button>Delete</button>\
							</td>\
						</tr>\
					')
			});
		}
	};

	app.showTodos();
});