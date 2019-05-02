


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

	addTaskBtn.addEventListener('click', function(event) {
		if(taskField.value != '') {
			creatTask(allTalk, taskField.value)
			taskField.value = ''
		}
	})

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

		let taskController = createTaskController(singleTask)
		singleTask.appendChild(taskController)
	}

	// Task Controller Creating
	function createTaskController(parent) {
		let controlPanel = document.createElement('div')
		controlPanel.setAttribute('class', 'task-control')

		let colorPallete = createColorPallete(parent)
		controlPanel.appendChild(colorPallete)

		let edit = createEditBtn(parent)
		controlPanel.appendChild(edit)

		return controlPanel
	}

	// Creating Color Pallete
	function createColorPallete(parent) {
		let colors = ['palegreen', 'skyblue', 'powderblue', 'salmon', 'grey', 'red']

		let colorPallete = document.createElement('div')
		colorPallete.setAttribute('class', 'color-pallete')

		colors.forEach(function(color) {
			let colorDiv = document.createElement('div')

			colorDiv.setAttribute('class', 'color-circle')
			colorDiv.style.background = color
			colorPallete.appendChild(colorDiv)

			colorDiv.addEventListener('click', function() {
				parent.style.background = color
			})
		})

		return colorPallete
	}

	// Creating Edit Button
	function createEditBtn(parent) {
		let span = document.createElement('span')
		span.innerHTML = '<i class="fas fa-edit"></i>'

		let textEditor = document.createElement('textarea')
		parent.appendChild(textEditor)

		let p = parent.querySelector('p')

		textEditor.innerHTML = event.target.value

		textEditor.style.display = 'none'

		span.addEventListener('click', function() {
			textEditor.style.display = 'block'
		})
		
		textEditor.addEventListener('keypress', function() {
			if(event.keyCode === 13 && textEditor.innerHTML != '') {
				p.innerHTML = textEditor.value
				textEditor.style.display = 'none'
			}
		})

		return span 
	}


}