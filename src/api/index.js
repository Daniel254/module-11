console.log("api/index.js");

import axios from "axios";

const api = axios.create({
  baseURL: "https://628a5c1f5da6ddfd5d6299d2.mockapi.io",
});

export const getAllTasks = async () => {
  console.log("getAllTasks fired");
  try {
    const { data } = await api.get("tasks");
    return data;
  } catch (error) {
    throw new Error(error);
  }
};

export const addTask = async (task) => {
  console.log("addTask fired");
  try {
    const response = await api.post("/tasks", task);
    console.log("addTask done");
    return response;

    console.log("after adding post", response);
  } catch (error) {
    throw new Error(`Create task error: ${error}`);
  }
};

export const deleteTask = async (taskId) => {
  try {
    const response = await api.delete(`/tasks/${taskId}`);
    console.log("after deleting post", response);
  } catch (error) {
    throw new Error(`Delete task error: ${error}`);
  }
};
