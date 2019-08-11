import React from "react";
import _ from "lodash";
import Field from "./Field";
import { FieldInterface } from "./Interfaces";

export interface Props {
  onSubmit: Function;
  form: Array<FieldInterface>;
  onCancel?: Function;
  submitName?: string;
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

    const form = this.props.form;
    let values: any = {};

    _.map(form, (field) => {
      values[field.fieldTags.name] = field.value ? field.value : "";
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


  renderform() {
    return (
      this.props.form.map((field: FieldInterface) => {

        const values: any = this.state.values;
        const value = values[field.fieldTags.name];
        
        return (
          <Field
            {...field}
            currentValue={value}
            onChange={(event: any) => this.onChange(event)}
            key={`${field.fieldTags.name}`}
          />
        )
      })
    )
  }


  render() {

    const submitName = this.props.submitName ? this.props.submitName : "Cadastrar";

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

            <input className="button" type="submit" value={submitName} />
          </div>
        </div>
      </form>
    )
  }
}