import axios from "axios";

const baseUrl = "/api/users";

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
