import * as axios from "axios";

export const fetchTodos = () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts/1");
};
