// Get references to the DOM elements
const inputField = document.getElementById('todo-input');
const addButton = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// Function to add a new task to the list
function addTodo() {
  const task = inputField.value.trim(); // Get the input value and remove extra spaces

  if (task !== '') {
    // Create a new list item
    const li = document.createElement('li');
    li.className = 'flex justify-between items-center p-3 bg-gray-100 rounded-lg shadow-sm';

    // Create span for task text
    const taskSpan = document.createElement('span');
    taskSpan.textContent = task;

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.className = 'text-red-500 hover:text-red-700';
    deleteButton.onclick = function() {
      li.remove(); // Remove the task when 'Delete' is clicked
    };

    // Append task text and delete button to the list item
    li.appendChild(taskSpan);
    li.appendChild(deleteButton);

    // Add the list item to the to-do list
    todoList.appendChild(li);

    // Clear the input field after adding the task
    inputField.value = '';
  }
}

// Event listener for the 'Add' button click
addButton.addEventListener('click', addTodo);

// Optional: Add an event listener for pressing 'Enter' to add a task
inputField.addEventListener('keypress', function(event) {
  if (event.key === 'Enter') {
    addTodo();
  }
});
