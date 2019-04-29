


window.onload = function() {

	const taskField = document.getElementById('taskField')
	const addTaskBtn = document.getElementById('addTaskBtn')
	const allTalk = document.getElementById('allTask')


	taskField.addEventListener('keypress', function(event) {
		if(event.keyCode === 13) {
			creatTask(allTalk, event.target.value)
			this.value = ''
		}
	})

	function creatTask(parent, task) {
		console.log(task)
	}













}