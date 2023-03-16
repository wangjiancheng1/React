import { Component } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header.jsx";
import Center from "./components/Center.jsx";
import About from "./components/About.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      c_f: "0",
    };
  }

  getNum(info) {
    this.setState({ c_f: info });
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Link to={"/"}>Home</Link>
          <Link to={"/about"}>About</Link>
          <Routes>
            <Route
              path="/"
              element={[
                <Header c_c={this.state.c_f} />,
                <Center tarr={[1, 2, 3, 4]} handle={this.getNum.bind(this)} />,
              ]}
            />
            <Route path="/about" element={[<About />]} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
