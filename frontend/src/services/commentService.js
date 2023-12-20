import axios from "axios";
const baseUrl = "http://localhost:3003/api/blogs";

const getAll = async (id, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(`${baseUrl}/${id}/comments`, config);
  return response.data;
};

const createComment = async (id, comment, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(`${baseUrl}/${id}/comments`, comment, config);

  return response.data;
};

export default { getAll, createComment };
