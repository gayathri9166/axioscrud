import { useEffect, useState } from "react";
import "./styles.css";
import axios from "axios";

export default function App() {
  const [name, setName] = useState();
  const [api, setApi] = useState([]);

  const postName = () => {
    axios.post("https://620654a192dd6600171c09b4.mockapi.io/username", {
      name
    });
    // console.log(name)
  };

  useEffect(() => {
    axios
      .get("https://620654a192dd6600171c09b4.mockapi.io/username")
      .then((res) => setApi(res.data));
  }, []);

  const delName = (id) => {
    axios
      .delete(`https://620654a192dd6600171c09b4.mockapi.io/${id}`)
      .then(() => getData())
      .catch((err) => console.log(err));
  };
  const getData = () => {
    axios
      .get("https://620654a192dd6600171c09b4.mockapi.io/usernam")
      .then((getdata) => setApi(getdata.data));
  };
  return (
    <div className="App">
      <input
        placeholder="Type..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={postName}>Submit</button>
      {api.map((val) => {
        return (
          <>
            <p>{val.name}</p>
            <button onClick={() => delName(val.id)}>Del</button>
          </>
        );
      })}
    </div>
  );
}