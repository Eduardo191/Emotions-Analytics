import React from "react";
import { FieldInterface } from "../../../Interfaces";

interface Props {
  value?: any;
  onChange: Function;
}

export default function Type1Field(props: Props & FieldInterface){
  return(
    <input type="text"/>
  )
}