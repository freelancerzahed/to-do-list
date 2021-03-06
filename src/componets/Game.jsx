import React, { Component } from 'react'
import Board from './Board'
function  culculterWinner(squares) {
        const lines = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]
        for(let i= 0; i<lines.length; i++){
            const [a,b,c] = lines[i];
            if(squares[a] && squares[a]== squares[b] && squares[a]==squares[c]){
               return squares[a]
            }
           return 0
            
        }
}
export default class Game extends Component {

    state = {history:[{squares:Array(9).fill(null)}],
                        stepNumber:0 ,
                        xIsNext:true
            }; 
              
              hundleClick = i => {
                const history = this.state.history.slice(0,this.state.stepNumber+1)
                const current = history[history.length-1]
                const squares = current.squares.slice()
                if(culculterWinner(squares) || squares[i]){
                    return
                }
                    squares[i] = this.state.xIsNext ? 'X':'O'
                    this.setState({
                        history:history.concat([{squares}]),
                        stepNumber:history.length,
                        xIsNext: !this.state.xIsNext
                    })
                    }
    render() {
        const history = this.state.history;
        const current = history[this.state.stepNumber]
        const winner = culculterWinner(current.squares)
        console.log(winner)
        return (
          
            <div>
                <Board onClick={this.hundleClick} squares = {current.squares}/>
                   
            </div>
        )
    }
}
