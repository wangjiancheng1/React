import { Component } from "react";

class Header extends Component {
  render() {
    return (
      <div>
        <p>子-头</p>
        Center传Header的值:{this.props.c_c}
      </div>
    )
  }
}

export default Header