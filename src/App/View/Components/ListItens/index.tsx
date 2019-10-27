import React from "react";

//Libraries
import { Affectiva } from "../../../Logic/Library";

//Redux
import { connect } from "react-redux";

interface ReduxState {
}

interface OwnProps {
  invisible?: boolean;
}

type Props = ReduxState & OwnProps;

interface State {
}

class ListItens extends React.Component<Props, State>{

  render() {
    return (
      <section className={`list-itens ${this.props.invisible ? "invisible" : ""}`}>
      </section>
    )
  }
}

const mapDispatchToProps = {
};

export default connect(null, mapDispatchToProps)(ListItens);