import axios from "axios";
const getData = async (user_id) => {
  if (user_id < 0 || !Number.isInteger(user_id)) {
    return null;
  }
  const { data: user } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${user_id}`
  );
  const { data: todos } = await axios.get(
    `https://jsonplaceholder.typicode.com/todos?userId=${user_id}`
  );
  return { user, todos };
};

export default getData; //getData default export
