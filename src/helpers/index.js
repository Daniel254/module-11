import { refs } from "../refs";

const deleteIcon =
  '<svg class="delete-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>';

export const drawTemplate = (tasksArray) => {
  console.log("drawTemplate fired");
  return tasksArray.reduce(
    (acc, post) =>
      `<li data-id="${post.id}" data-status="${post.status}" class="todo-list__list-item"><span>${post.taskName}</span><button class="todo-list__delete">${deleteIcon}</button></li>` +
      acc,
    ""
  );
};
export const renderList = (tasks) => {
  refs.todoList.innerHTML = drawTemplate(tasks);
};
