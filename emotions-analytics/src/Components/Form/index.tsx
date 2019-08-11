import React from "react";
import Form, { Props } from "./Form";

export function ModalForm(props: Props) {

  const cancel = () => {
    console.log("cancel");
  }

  return (
    <div className="modal_form">
      <div className="wrapper">
        <Form {...props} onCancel={() => cancel()} />
      </div>
    </div>
  )
}