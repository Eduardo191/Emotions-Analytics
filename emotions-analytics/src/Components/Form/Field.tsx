import React from "react";
import { FieldInterface } from "./Interfaces";

interface Props {
  onChange: Function;
}

interface State {
}

export default class Field extends React.PureComponent<Props & FieldInterface, State> {

  renderOptions() {

    const options = this.props.options;

    return (options ?
      options.map((option: string) =>
        <option key={`${option}`} value={option}>{option}</option>
      )
    : null);
  }


  render() {

    const label: string = this.props.label ? this.props.label : "";

    return (
      <label>

        {label}

        {this.props.options ?

          <select
            {...this.props.fieldTags}
            {...this.props.additionalTag}
            onChange={(event) => this.props.onChange(event)}
          >
            {this.renderOptions()}
          </select>

          :

          <input
            {...this.props.fieldTags}
            {...this.props.additionalTag}
            onChange={(event) => this.props.onChange(event)}
          />
        }
      </label>
    )
  }
}