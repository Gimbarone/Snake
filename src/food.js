import React from 'react';
import {getRandom} from './utility.js'
import * as constant from './constants.js'
import {Position} from './position.js'

export class Food extends React.Component{
  constructor(props){
    super(props)
    this.state ={xpos:getRandom(constant.boardSizeInSquares), ypos:getRandom(constant.boardSizeInSquares)}
  }

  newFood()
  {
    var xpos,ypos
    do{
      xpos= getRandom(constant.boardSizeInSquares)
      ypos= getRandom(constant.boardSizeInSquares)
    }while(!this.props.snakePos.every(nodePos=>!(nodePos.xpos===xpos && nodePos.ypos===ypos)))
    this.setState({xpos:xpos, ypos:ypos})
  }

  Eat(){
    if(this.state.xpos === this.props.snakePos[0].xpos && this.state.ypos === this.props.snakePos[0].ypos){
      this.props.snakePos.push(new Position(this.state.xpos,this.state.ypos))
      this.newFood()
      this.props.increaseScore()
    }
  }
  render(){
    this.Eat()
    return<div style={{position:"absolute", backgroundColor:"red",
    height:constant.snakeSize, width:constant.snakeSize,
    top:this.state.ypos*constant.snakeSize,left:this.state.xpos*constant.snakeSize}}></div>
  }
}