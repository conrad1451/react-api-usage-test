// How to Use Axios in React? A Beginner's Guide [2021]
import React from "react";
import { useState } from "react";
import axios from "axios";

// import axios from "axios";

// interface IProps {
//   name: string;
//   tag: string;
// }
type NotionCSPage = {
  id: string;
  name: string;
  tags: string[];
};

function Snap() {
  const [counter, setCounter] = useState(0);
  const [pages, setPages] = useState(Array<NotionCSPage>);
  const [myText, setMyText] = useState("");

  axios.get(`https://notion-cs-content.onrender.com/users`).then((res) => {
    // const persons: Object[] = res.data;
    const pages: Array<NotionCSPage> = res.data;
    // console.log(pages[4].tags);
    console.error(pages[4].tags);
    setMyText(pages[4].tags[0]);
    // console.log(pages[4]);
    // this.setState(["dd", "dddd"]); // it says that setState does not exist on personList but I don't understand why
    // this.setState({ pages });
  });

  return (
    <>
      <div>
        <p>counter is {counter}</p>
        <p>myText is {myText}</p>
      </div>
    </>
  );
}

export default Snap;
