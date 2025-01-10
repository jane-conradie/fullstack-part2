import axios from "axios";

const baseUrl = "http://localhost:3001/persons";

const create = (person) => {
  // send to server
  const request = axios.post(baseUrl, person);

  return request.then((response) => response.data);
};

export default { create };
