// This was posted by https://www.knowledgehut.com/blog/web-development/axios-in-react#2.-performing-post-request-with-axios%C2%A0

// who plagiarized it from

// https://www.notion.so/conradhq/How-To-Use-Axios-with-React-6480d8cb3c6d4258a516253272e622ee?pvs=4

import React from "react";
import axios from "axios";
export default class MyList extends React.Component {
  state = {
    users: [],
  };
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      const users = response.data;
      // const users: Object[] = response.data;
      // const users: Array<Object> = response.data;
      this.setState({ users });
    });
  }
  render() {
    return (
      <ul>
         {" "}
        {this.state.users.map((user) => {
          user.name;
        })}
         {" "}
      </ul>
    );
  }
}
