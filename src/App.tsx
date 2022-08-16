import * as React from "react";
import ReactDom from "react-dom";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
function Index(): JSX.Element {
  return <>App</>;
}
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Index />}></Route>
      </Routes>
    </Router>
  );
}
