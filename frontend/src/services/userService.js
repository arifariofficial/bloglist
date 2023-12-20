import axios from "axios";

const baseUrl = "http://localhost:3003/api/users";

const getUsers = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(baseUrl, config);
  return response.data;
};

export default { getUsers };
