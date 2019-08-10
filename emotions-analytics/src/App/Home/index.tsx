import React from "react";
import {ExpandForm} from "../../Components/Form";
import { FieldInterface } from "../../Components/Form/Interfaces";

export default class Home extends React.Component {

  onSubmit(values: Object) {
    console.log("onSubmit values ", values);
  }


  render() {

    const fields: Array<FieldInterface> = [
      {
        label: "field1",
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
        fieldTags: {
          required: true,
          name: "select",
          value: "Argentina",
        },
        options: [
          "Brasil",
          "Argentina",
          "Russia",
        ],
      }
    ]

    return (
      <ExpandForm fields={fields} onSubmit={(event: any) => this.onSubmit(event)} />
    )
  }
}