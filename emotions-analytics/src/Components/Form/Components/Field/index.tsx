import React, { Component, ComponentElement, ComponentClass, ReactComponentElement, ComponentType } from "react";
import { FieldInterface } from "../../Interfaces";

/** Import Field Types */
  import Type1Field from "./Components/Type1Field";
  import Type2Field from "./Components/Type2Field";
  import Type3Field from "./Components/Type3Field";
  import Type4Field from "./Components/Type4Field";

interface SoPaVê {
  typeId: number;
  key: string;
  name: string;
  required: boolean;
  placeholder?: string;
  getOptions?: Function;
}

interface Props {
  value?: any;
  onChange: Function;
}

interface State {

}

export default class Field extends React.Component<Props & FieldInterface, State> {

  constructor(props: Props & FieldInterface) {
    super(props);
  }


  selectionTypeField(typeId: number) {
    
    let FieldInput: any;

    switch (typeId) {
      case 1:
      //Simple Text
        FieldInput = Type1Field;
        break;
      
      case 2:
      //Multiple Text
        FieldInput = Type2Field;
        break;

      case 3:
      //Attachment
        FieldInput = Type3Field;
        break;

      case 4:
      //Options
        FieldInput = Type4Field;
        break;
      
      default:
          FieldInput = Type1Field;
        break;
    }

    return FieldInput;
  }


  render() {
    const typeId = this.props.typeId;
    const FieldInput = this.selectionTypeField(typeId);

    return (
      <label>
        {this.props.name}
        <FieldInput {...this.props} />
      </label>
    )
  }
} 