import React from "react";
import iconSet from "../assets/selection.json";
//@ts-ignore
import IcomoonReact from "icomoon-react";

interface Props {
  color?: string;
  size?: number | string;
  name: string;
}

interface State {
  color: string;
  size: number | string;
  name: string;
}

export default class Icon extends React.PureComponent<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      color: "",
      size: 12,
      name: "",
    };
  }


  componentDidMount = () => {

    const { color, size, name } = this.props;

    this.setState({
      color: color ? color : "#4C006A",
      size: size ? size : 12,
      name,
    });
  }


  render() {
    return (
      <IcomoonReact
        iconSet={iconSet}
        color={this.state.color}
        size={this.state.size}
        icon={this.state.name}
      />
    )
  }
}