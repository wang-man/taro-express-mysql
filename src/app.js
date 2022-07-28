import { Component } from "react";
import "./app.scss";

class App extends Component {
  componentDidMount() {}

  componentDidShow() {}

  componentDidHide() {}

  componentDidCatchError() {}

  // this.props.children 是将要会渲染的页面
  render() {
    const a = "1";
    const b = "1";
    return this.props.children;
  }
}

export default App;
