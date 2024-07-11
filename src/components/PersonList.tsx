import React from "react";
import axios from "axios";

type NotionPageT = {
  id: string;
  name: string;
  tags: string[];
};

// type NotionPageT = Object[];

//Object[] and Array[] dont work for the below
// type NotionPageT = {
//   id: string;
//   name: string;
//   tags: string[];
// } || Array<Any>;

export default class PersonList extends React.Component {
  state = {
    pages: Array<NotionPageT>,
    // persons: {},
    // persons: [],
  };

  componentDidMount() {
    axios.get(`https://notion-cs-content.onrender.com/users`).then((res) => {
      // const persons: Object[] = res.data;
      const pages: Array<NotionPageT> = res.data;
      console.log(pages[4].tags);
      // console.log(pages[4]);
      // this.setState(["dd", "dddd"]); // it says that setState does not exist on personList but I don't understand why
      // this.setState({ pages });
    });
  }

  render() {
    return (
      <ul>
        {
        if (pages instanceof Array) {
          this.state.pages.map((page: NotionPageT) => (
            <li key={page.id}>{page.name}</li>
          ))
      }
        
        }
      </ul>
    );
  }
}


