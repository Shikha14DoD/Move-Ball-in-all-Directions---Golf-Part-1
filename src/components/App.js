import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition: { left: "0px" }
        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
	this.keyHandling=this.keyHandling.bind(this)
    };

    buttonClickHandler() {
   
	     this.setState({renderBall:true})
             this.renderBallOrButton()
   }
    renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball" style={this.state.ballPosition}></div>
		} else {
		    return <button onClick={this.buttonClickHandler} >Click For One Ball</button>
		}
    }
	keyHandling(e){
         if(e.keyCode===39)
           {
               let val=parseInt(this.state.ballPosition.left)+5
               val=val.toString()+"px"
               this.setState({ballPosition:{left:val}})
           }
    }

    // bind ArrowRight keydown event
    componentDidMount() {
      window.addEventListener("keyup", this.keyHandling);
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}


export default App;
