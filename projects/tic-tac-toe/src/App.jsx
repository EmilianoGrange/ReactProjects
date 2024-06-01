import { useState, useEffect } from 'react'

import { Square } from './components/Square.jsx'

import { WinnerSquare } from './components/WinnerModal.jsx'

import confetti from 'canvas-confetti'

import { TURNS } from './constants.js'

import { checkWinner, checkEndGame, saveGameToStorage } from './functions.js'

import './App.css'

const App = () => {
  const [board, setBoard] = useState(() =>  JSON.parse(localStorage.getItem('board')) || Array(9).fill(null))

  const [turn, setTurn] = useState(() => localStorage.getItem('turn') || TURNS.X)

  const [winner, setWinner] = useState(null)

  const updateBoard = (index) => {
    if (board[index] || winner) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X    

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      confetti()
      setWinner(newWinner)
    }
    else if (checkEndGame(newBoard)) setWinner(false)
    setTurn(newTurn)
  }

  useEffect(() => {
    saveGameToStorage(board, turn)
  })

  const restart = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWinner(null)
    localStorage.removeItem('board')
    localStorage.removeItem('turn')
  }

  return (
    <main className="board">
      <h1>Tic tac toe</h1>

      <section className="game">
        {
          board.map((_, index) => { //el 1er argumento seria el square
            return (
              <Square key={index} index={index} updateBoard={updateBoard}> {board[index]} </Square> //podria pasar _ (o sea square)
            )
          })
        }
      </section>

      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>

      {
        winner !== null && (<WinnerSquare winner={winner} restart={restart} />)
      }
    </main>)
}

export default App