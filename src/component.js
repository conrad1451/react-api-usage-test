// mycomponent.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const MyComponent = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data: response } = await axios.get("/stuff/to/fetch");
        setData(response);
      } catch (error) {
        console.error(error.message);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div>
      {loading && <div>Loading</div>}
      {!loading && (
        <div>
          <h2>Doing stuff with data</h2>
          {data.map((item) => (
            <span>{item.name}</span>
          ))}
        </div>
      )}
    </div>
  );
};

export default MyComponent;
