import React from "react";
import { FieldInterface } from "../../../Interfaces";

/*====================================================================================================================*/
/*======================================================= Boolean ====================================================*/
/*====================================================================================================================*/

interface Props {
  keyName: string;
  onChange: Function;
  getOptions: Function;
  value?: any;
  defaultValue: boolean;
}

interface State {
  options: Array<{ label: string, valueOption: number }>;
}

export default class Field6Type extends React.Component<Props & FieldInterface, State> {

  constructor(props: Props & FieldInterface) {

    super(props);

    this.state = {
      options: [
        { label: "Sim", valueOption: 1 },
        { label: "Não", valueOption: 0 },
      ],
    }
  }


  componentDidMount = async () => {
    const key = this.props.keyName;
    const value = this.props.defaultValue;
    this.props.onChange(value, key);
  }

  renderOptions() {
    return (
      this.state.options.map(({ valueOption, label }) => {
        return (
          <option key={`${valueOption}`} value={valueOption}>{label}</option>
        )
      })
    )
  }


  onChange(event: any) {
    const retryValue = parseInt(event.target.value);
    const value = retryValue ? true : false;
    const key = this.props.keyName;
    this.props.onChange(value, key);
  }


  render() {
    return (
      <select
        required={this.props.required}
        value={this.props.defaultValue ? 1 : 0}
        onChange={(event) => this.onChange(event)}
      >
        {this.renderOptions()}
      </select>
    )
  }
} 