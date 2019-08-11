import React from "react";
import { FieldInterface } from "./Interfaces";

interface Props {
  onChange: Function;
  currentValue: string;
}

export default class Field extends React.PureComponent<Props & FieldInterface> {


  renderOptions() {

    const options = this.props.options;

    return (options ?
      options.map((option: string) =>
        <option key={`${option}`} value={option}>{option}</option>
      )
      : null);
  }


  renderField() {

    const field = this.props;

    let Field: any;

    if (field.options !== undefined) {

      Field = <select
        {...this.props.fieldTags}
        {...this.props.additionalTag}
        value={this.props.currentValue}
        onChange={(event) => this.props.onChange(event)}
      >
        {this.renderOptions()}
      </select>

    } else if (
      field.additionalTag !== undefined &&
      //@ts-ignore 
      (field.additionalTag.rows !== undefined || field.additionalTag.cols !== undefined)
    ) {

      Field = <textarea
        {...this.props.fieldTags}
        {...this.props.additionalTag}
        value={this.props.currentValue}
        onChange={(event) => this.props.onChange(event)}
      />

    } else {

      Field = <input
        {...this.props.fieldTags}
        {...this.props.additionalTag}
        value={this.props.currentValue}
        onChange={(event) => this.props.onChange(event)}
      />
    }

    return Field;
  }


  render() {

    const label: string = this.props.label ? this.props.label : "";

    return (
      <label>
        {label}
        {this.renderField()}
      </label>
    )
  }
}