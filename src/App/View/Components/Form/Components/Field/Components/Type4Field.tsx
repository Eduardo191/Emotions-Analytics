import React from "react";
import { FieldInterface } from "../../../Interfaces";

/*====================================================================================================================*/
/*======================================================= Options ====================================================*/
/*====================================================================================================================*/

interface Props {
  keyName: string;
  onChange: Function;
  getOptions: Function;
  value?: any;
}

interface State {
  options: Array<{ label: string, id: number }>;
}

export default class Field4Type extends React.Component<Props & FieldInterface, State> {

  constructor(props: Props & FieldInterface) {

    super(props);

    this.state = {
      options: [],
    }
  }


  componentDidMount = async () => {

    const options = await this.props.getOptions ? this.props.getOptions() : [];
    
    if (options.length !== 0) {
      const key = this.props.keyName;
      this.props.onChange(options[0].id, key);
    }

    this.setState({ options });
  }

  renderOptions() {
    return (
      this.state.options.map(({ id, label }) => {
        return (
          <option key={`${id}`} value={id}>{label}</option>
        )
      })
    )
  }


  onChange(event: any) {
    const value = parseInt(event.target.value);
    const key = this.props.keyName;
    this.props.onChange(value, key);
  }


  render() {
    return (
      <select
        required={this.props.required}
        value={this.props.value}
        onChange={(event) => this.onChange(event)}
      >
        {this.renderOptions()}
      </select>
    )
  }
} 