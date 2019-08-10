import React from "react";
import Form, { Props } from "./Form";

export function ExpandForm(props: Props) {
  return (
    <div className="expand_form">
      <Form {...props} />
    </div>
  )
}