import axios from "axios";

const refs = {
  form: document.querySelector(".post-form"),
  todoList: document.querySelector(".todo-list"),
};
const deleteIcon =
  '<svg class="delete-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>';
const request = axios.create({
  baseURL: "https://628a5c1f5da6ddfd5d6299d2.mockapi.io",
  // timeout: 1000,
});

const drawTemplate = (listArrays) => {
  const template = listArrays.reduce(
    (acc, post) =>
      acc +
      `<li data-id="${post.id}" data-status="${post.status}" class="todo-list__list-item"><span>${post.taskName}</span><button class="todo-list__delete">${deleteIcon}</button></li>`,
    ""
  );
  refs.todoList.innerHTML = template;
  // console.log(template);
};
const getAllPosts = async () => {
  const posts = await request.get("posts");
  drawTemplate(posts.data);
};
getAllPosts();
