/// <reference types="react-scripts" />

// Fix react-icons JSX compatibility with React 18
declare namespace JSX {
  interface Element extends React.ReactElement<any, any> {}
}
