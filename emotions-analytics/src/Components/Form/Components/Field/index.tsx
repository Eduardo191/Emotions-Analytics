import { FieldInterface } from "../../Interfaces";
import React from "react";

/*Refazer este componente, mocando renderizando um switch para os tipos de fields*/

interface Props {
  value?: any;
  onChange: Function;
}

export default function(props: FieldInterface & Props) {
  return (
    <label>
      {props.name}
      <input type="text"/>
    </label>
  )
} 