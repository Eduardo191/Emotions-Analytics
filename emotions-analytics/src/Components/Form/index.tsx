import React from "react";
import Form, { Props } from "./Form";
import loading from "../../Assets/loading.svg";

interface PropsModalForm {
  mode?: "open" | "close" | "loading";
}

interface StateModalProps {
  mode: "open" | "close" | "loading";
}

export class ModalForm extends React.Component<PropsModalForm & Props, StateModalProps> {

  constructor(props: PropsModalForm & Props) {
    super(props);
    this.state = {
      mode: "close",
    };
  }


  componentDidMount = () => {
    this.setModeByProps();
  }


  componentDidUpdate = (prevProps: PropsModalForm & Props) => {
    if (prevProps.mode !== this.props.mode) {
      this.setModeByProps();
    }
  }


  setModeByProps() {
    const mode = this.props.mode ? this.props.mode : "close";
    this.setState({ mode });
  }


  onCancel() {
    if (this.props.onCancel !== undefined) {
      this.props.onCancel();
    }
    this.setState({ mode: "close" });
  }


  render() {
    return (
      <div className={`modal_form ${this.state.mode}`}>
        <div className="wrapper">
          <Form {...this.props} onCancel={() => this.onCancel()} />
          <img className="loading" src={loading} alt="loding"/>
        </div>
      </div>
    )
  }
}