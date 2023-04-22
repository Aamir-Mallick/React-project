import { useState, useEffect } from "react";

export default function ServerCall() {
  const [data, setData] = useState([]);

  const serverAPI = async () => {
    let res = fetch("https://jsonplaceholder.typicode.com/posts", {
      method: "GET",
    }).then((data) => data.json());
    return res;
  };

  useEffect(() => {
    serverAPI().then((data) => {
      setData(data);

      console.log("data", data);
    });
  }, []);

  return (
    <div className='App'>
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div>
        {data.map((x) => (
          <div key={x.id}>
            <p>{x.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
