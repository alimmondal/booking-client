import React from "react";
import useFetch from "../../hooks/useFetch";

function Admin() {
  // const [data, setData] = useState([]);
  const { data, loading, error } = useFetch("http://localhost:8800/api/users/");
  // const { data, loading, error } = useFetch(
  //   "https://jsonplaceholder.typicode.com/users"
  // );

  // useEffect(() => {
  //   axios.get("http://localhost:8800/api/users").then((res) => setData(res));
  // }, []);

  console.log("error", error);
  console.log("data", data);

  return (
    <div>
      <h1>Admin Dashboard</h1>

      <h1>{data.username}</h1>
    </div>
  );
}

export default Admin;
