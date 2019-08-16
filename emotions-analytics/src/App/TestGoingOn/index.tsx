import React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";

class TestGoingOn extends React.Component<RouteComponentProps<{}>> {

  componentDidMount = () => {
    // this.props.history.push("/");
  }

  render() {
    return (
      <div>Teste</div>
    )
  }
}

export default withRouter(TestGoingOn);