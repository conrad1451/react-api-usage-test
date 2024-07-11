// Source:
// [1] https://stackoverflow.com/questions/62162501/typescript-export-default-react-functioncomponent

import React from "react";

interface IProps {
  name: string;
  tag: string;
}

// Type '() => void' is not assignable to type 'FunctionComponent<{}>'.
//   Type 'void' is not assignable to type 'ReactNode'.ts(2322)

// const MyComponent: React.FunctionComponent = ({ name, tag }: IProps) => {
const MyComponent: React.FunctionComponent = () => {
  <ul>
    <li>"bro"</li>
    <li>"yo"</li>
    <li>"mo"</li>
  </ul>;
};

export default MyComponent;
