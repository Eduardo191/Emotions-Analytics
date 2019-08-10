import React from "react";
import _ from "lodash";
import Field from "./Field";
import { FieldInterface } from "./Interfaces";

export interface Props {
  onSubmit: Function;
  fields: Array<FieldInterface>;
}

interface State {
  values: Object;
}

export default class Form extends React.PureComponent<Props, State> {

  constructor(props: Props) {
    super(props);
    this.state = {
      values: {},
    };
  }


  componentDidMount = () => {
    this.setValues();
  }


  componentDidUpdate = (prevProps: Props) => {
    if (prevProps.fields !== this.props.fields) {
      this.setValues();
    }
  }


  setValues() {

    const fields = this.props.fields;
    let values: any = {};

    _.map(fields, (field) => {
      values[field.fieldTags.name] = field.fieldTags.value ? field.fieldTags.value : "";
    });

    this.setState({ values });
  }


  onChange(event: any) {

    const key = event.target.name;
    const value = event.target.value;
    let values: any = this.state.values;

    values[key] = value;
    this.setState({ values });
  }


  onSubmit(event: any) {

    event.preventDefault();

    const values = this.state.values;
    this.props.onSubmit(values);
  }


  renderFields() {

    const fields = this.props.fields;

    return (
      fields.map((field: FieldInterface) => {
        return (
          <Field
            {...field}
            onChange={(event: any) => this.onChange(event)}
            key={`${field.fieldTags.name}`}
          />
        )
      })
    )
  }


  render() {
    return (
      <form className="form" onSubmit={(event) => this.onSubmit(event)}>
        {this.renderFields()}
        <input type="submit" value="Enviar" />
      </form>
    )
  }
}