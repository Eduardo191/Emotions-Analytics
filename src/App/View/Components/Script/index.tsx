import React from "react";

export default class Script extends React.Component {
    componentDidMount = () => {
        const script = document.createElement("script");
    
        script.src = "https://download.affectiva.com/js/3.2.1/affdex.js";
        script.async = true;
    
        document.body.appendChild(script);
    }

    render() {
        return (
            <div></div>
        )
    }
}