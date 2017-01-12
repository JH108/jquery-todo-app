$(function() {
	var todos = [
		{
			task: 'finish tutorials',
			isCompleted: false,
		}, 

		{
			task: 'take a nap',
			isCompleted: true,
		}
	]

	var app = {
		showTodos: function() {
			var todosListEl = $('#todos-list');

			todosListEl.html('');

			todos.forEach(function(todo) {
				var taskClasses = 'todo-task' + (todo.isCompleted ? ' is-completed' : '');

				todosListEl.append('\
						<tr>\
							<td class="'+ taskClasses + '">'  + todo.task + '</td>\
							<td>\
								<button>Edit</button>\
								<button>Delete</button>\
							</td>\
						</tr>\
					')
			});
		},

		addTodo: function(event) {
			event.preventDefault();

			var createInput = $('#create-input');
			var createInputValue = createInput.val();
			
			todos.push({
				task: createInputValue,
				isCompleted: false
			});

			createInput.val('');

			app.showTodos();
		},

		toggleTodo: function() {
			todos.forEach(function(todo) {
				if (todo.task === $(this).text()) {
					todo.isCompleted = !todo.isCompleted;
				}
			}.bind(this));
			app.showTodos();
		}
	};

	app.showTodos();

	//$('.todo-task').on('click', app.toggleTodo);
	$('#create-form').on('submit', app.addTodo);
	$('table').on('click', '.todo-task', app.toggleTodo)
});