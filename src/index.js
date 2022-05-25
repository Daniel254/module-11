import axios from "axios";

const refs = {
  form: document.querySelector(".post-form"),
  todoList: document.querySelector(".todo-list"),
};
const deleteIcon =
  '<svg class="delete-icon" focusable="false" aria-hidden="true" viewBox="0 0 24 24"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"></path></svg>';

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
const request = axios.create({
  baseURL: "https://628a5c1f5da6ddfd5d6299d2.mockapi.io",
  // timeout: 1000,
});

const getAllPosts = () => {
  request.get("posts").then((posts) => drawTemplate(posts.data));
  // .then((data) => console.log(data))
};
const addPost = (e) => {
  e.preventDefault();
  const { target } = e;
  const post = {};
  const formData = new FormData(target);

  formData.forEach((value, name) => (post[name] = value));
  request
    .post("/posts", post)
    .then((res) => console.log("after adding post", res))
    .then(() => getAllPosts())
    .catch((err) => {
      throw new Error(`Не смогли добавить задачу: ${err}`);
    });
};
const deletePost = (id) => {
  request
    .delete(`/posts/${id}`)
    .then((res) => console.log("after deleting post", res))
    .then(() => getAllPosts())
    .catch((err) => console.log("error deleting post", err));
};

refs.form.addEventListener("submit", addPost);
refs.todoList.addEventListener("click", (e) => {
  const listItemIdToDelete = e.target
    .closest(".todo-list__delete")
    ?.closest(".todo-list__list-item").dataset.id;
  if (!isNaN(listItemIdToDelete)) {
    deletePost(listItemIdToDelete);
  }
});
getAllPosts();
