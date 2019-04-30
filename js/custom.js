


window.onload = function() {

	const taskField = document.getElementById('taskField')
	const addTaskBtn = document.getElementById('addTaskBtn')
	const allTalk = document.getElementById('allTask')


	// Create Task
	taskField.addEventListener('keypress', function(event) {
		if(event.keyCode === 13 && this.value != '') {
			creatTask(allTalk, event.target.value)
			this.value = ''
		}
	})

	// addTaskBtn.addEventListener('click', function(event) {
	// 	if(event.target.value != '') {
	// 		creatTask(allTalk, event.target.value)
	// 		this.value = ''
	// 	}
	// })

	// Single Task Create 
	function creatTask(allTaskParent, task) {

		let col = document.createElement('div')
		col.setAttribute('class', 'col-lg-4 col-md-6')

		let singleTask = document.createElement('div')
		singleTask.setAttribute('class', 'single-task')

		let singleTaskP = document.createElement('p')

		let span = document.createElement('span')
		span.innerHTML = '<i class="fas fa-times-circle"></i>'
		span.addEventListener('click', function() {
			allTaskParent.removeChild(col)
		})

		singleTaskP.innerHTML = task

		singleTask.appendChild(singleTaskP)
		singleTask.appendChild(span)
		col.appendChild(singleTask)
		allTaskParent.appendChild(col)

	}











}