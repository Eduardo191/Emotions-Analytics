import React from "react";
import { ModalForm } from "../../Components/Form";
import { FieldInterface } from "../../Components/Form/Interfaces";

export default class Home extends React.Component {

  onSubmit(values: Object) {
    console.log("onSubmit values ", values);
  }


  render() {

    const fields: Array<FieldInterface> = [
      {
        label: "field1",
        value: "Valor legal",
        fieldTags: {
          required: false,
          name: "field1",
          type: "text",
        },
      },
      {
        label: "field2",
        fieldTags: {
          required: false,
          name: "field2",
          type: "text",
        },
      },
      {
        label: "field3",
        fieldTags: {
          required: true,
          name: "field3",
          type: "text",
        },
      },
      {
        label: "select",
        value: "Argentina",
        fieldTags: {
          required: true,
          name: "select",
        },
        options: [
          "Brasil",
          "Argentina",
          "Russia",
        ],
      }
    ]

    return (
      <ModalForm fields={fields} onSubmit={(event: any) => this.onSubmit(event)} />
    )
  }
}