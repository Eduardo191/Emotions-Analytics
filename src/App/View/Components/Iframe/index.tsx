import React from "react";

export default class Iframe extends React.Component {

  onChangeURL(){
    //@ts-ignore
    const URL = document.getElementsByTagName('iframe')[0];
    console.log(URL);
  }  
  //@ts-ignore
  onChangeTitle(event){
    const title = document.getElementsByTagName('iframe')[0].title;
    console.log(typeof event.value);
  }

  render() {
    return (
      <div> 
        <iframe is="x-frame-bypass" id="teste" onLoad={this.onChangeURL} src="https://www.npmjs.com/" width="100%"></iframe>
      </div>
    )
  }
}