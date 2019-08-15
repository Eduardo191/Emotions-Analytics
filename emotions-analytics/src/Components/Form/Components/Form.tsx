import React from "react";
import _ from "lodash";
import Field from "./Field";
import { FieldInterface } from "../Interfaces";

export interface Props {
  onSubmit: Function;
  form: Array<FieldInterface>;
  onCancel?: Function;
  submitLabel?: string;
  values?: Array<{
    key: string;
    value: any;
  }>;
}

interface State {
  values: Object;
}

export default class Form extends React.Component<Props, State> {

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
    if (prevProps.form !== this.props.form) {
      this.setValues();
    }
  }


  setValues() {

    const receivedValues = this.props.values ? this.props.values : [];
    let values: any = {};

    _.map(receivedValues, (value) => {
      values[value.key] = value.value ? value.value : "";
    });


    this.setState({ values });
  }


  onChange(value: any, key: string) {

    let values: any = this.state.values;
    values[key] = value;
    console.log("onChange values: ", values);

    this.setState({ values });
  }


  onSubmit(event: any) {

    event.preventDefault();

    const values = this.state.values;
    this.props.onSubmit(values);
  }


  renderform() {
    return (
      this.props.form.map((field: FieldInterface) => {

        const values: any = this.state.values;
        const value = values[field.key];

        return (
          <Field
            {...field}
            keyName={field.key}
            value={value}
            onChange={(value: any, key: string) => this.onChange(value, key)}
          />
        )
      })
    )
  }


  render() {

    const submitLabel = this.props.submitLabel ? this.props.submitLabel : "Cadastrar";
    
    return (
      <form className="form" onSubmit={(event) => this.onSubmit(event)}>

        {this.renderform()}

        <div className="wrapper_buttons">
          <div className="magic_wrapper">

            {this.props.onCancel ?
              <div
                className="button"
                //@ts-ignore 
                onClick={() => { this.props.onCancel() }}
              >
                Cancelar
              </div>
            : null}

            <input className="button" type="submit" value={submitLabel} />

          </div>
        </div>
      </form>
    )
  }
}