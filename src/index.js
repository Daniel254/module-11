import axios from "axios";

const refs = {
  form: document.querySelector(".post-form"),
};

const request = axios.create({
  baseURL: "https://628a5c1f5da6ddfd5d6299d2.mockapi.io",
  timeout: 1000,
});

const getAllPosts = () => {
  request.get("posts").then((data) => console.log(data));
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
    .then(() => getAllPosts());
};

refs.form.addEventListener("submit", addPost);
