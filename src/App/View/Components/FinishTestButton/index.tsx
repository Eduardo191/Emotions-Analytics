import React from "react";

//Libraries
import { Affectiva } from "../../../Logic/Library";

//Redux
import { connect } from "react-redux";
import { changeTestGoingOn } from "../../../Redux/Actions";

interface ReduxState {
  changeTestGoingOn: Function;
}

interface OwnProps {
  visible?: boolean;
}

type Props = ReduxState & OwnProps;

interface State {
}

class FinishTestButton extends React.Component<Props, State>{

  onFinish() {
    this.props.changeTestGoingOn(false);
    Affectiva.stop();
  }

  render() {
    return (
      <section className={`testButtons ${this.props.visible ? "" : "invisible"}`}>
        <div onClick={() => this.onFinish()} className="button">FINALIZAR</div>
      </section>
    )
  }
}

const mapDispatchToProps = {
  changeTestGoingOn
};

export default connect(null, mapDispatchToProps)(FinishTestButton);