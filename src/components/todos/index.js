console.log("/components/todos/index.js");
import { getAllTasks, addTask, deleteTask } from "../../api";
import { renderList } from "../../helpers";
import { refs } from "../../refs";

getAllTasks().then(renderList);

refs.form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const task = {};
  const formData = new FormData(e.target);
  formData.forEach((value, name) => (task[name] = value));
  await addTask(task);
  const allPosts = await getAllTasks();
  renderList(allPosts);
});

// Delete a task listener
refs.todoList.addEventListener("click", async (e) => {
  const listItemIdToDelete = e.target
    .closest(".todo-list__delete")
    ?.closest(".todo-list__list-item").dataset.id;
  if (!isNaN(listItemIdToDelete)) {
    await deleteTask(listItemIdToDelete);
    const allPosts = await getAllTasks();
    renderList(allPosts);
  }
});
