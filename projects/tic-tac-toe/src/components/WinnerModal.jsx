import { Square } from './Square'

export const WinnerSquare = ({ winner, restart }) => {
    return (
        <section className="winner">
            <div className="text">
                <h2>
                    {!winner ? 'Empate!' : `Gano ${winner}!!`}
                </h2>

                <header className="win">
                    {winner && <Square>{winner}</Square>}
                </header>

                <footer>
                    <button onClick={restart}>Empezar de nuevo</button>
                </footer>
            </div>
        </section>
    )
}