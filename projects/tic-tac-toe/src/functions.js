import { WINNER_COMBOS } from './constants.js'

export const checkWinner = (boardToCheck) => {
    for (const comb of WINNER_COMBOS) {
        const [a, b, c] = comb
        if (boardToCheck[a] && boardToCheck[a] === boardToCheck[b] && boardToCheck[b] === boardToCheck[c]) return boardToCheck[a]
    }
    return null
}

export const checkEndGame = (newBoard) => newBoard.every((square) => square !== null)

export const saveGameToStorage = (board, turn) => {
    localStorage.setItem('board', JSON.stringify(board))
    localStorage.setItem('turn', turn)
}