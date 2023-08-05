import { useEffect, useState } from "react";

export default function FetchData() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/data/db.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  return data;
}
