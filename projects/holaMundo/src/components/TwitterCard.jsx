import { useState } from 'react'

import './TwitterCard.css'

export function TwitterCard ({ userName = 'unknown', name = 'unknow', isFollowing, initialFollowing}) { //children* y props por defecto

    const [following, setFollowing] = useState(initialFollowing)
    // const following = state[0]
    // const setFollowing = state[1]

    const handleClick = () => setFollowing(!following)

    const handleHoverIn = (e) => e.target.innerText = `Dejar de seguir`

    const handleHoverOut = (e) => e.target.innerText = `Siguiendo`

    return (
        <>
            <article className="tw-followCard">
                <header className="tw-followCard-header">
                    <img className="tw-followCard-avatar" alt={`El avatar de ${userName}`} src={`https://unavatar.io/twitter/${userName}`} />
                    <div className="tw-followCard-header-info">
                        <strong>{name}</strong>
                        <span className="tw-followCard-header-span">@{userName} {isFollowing ? <span style={{background: "#444"}}>Te sigue</span> : <></>}</span>
                    </div>
                </header>

                <aside>
                    {
                    following ?
                        <button className="tw-followCard-button following" onClick={handleClick} onMouseEnter={handleHoverIn} onMouseLeave={handleHoverOut}>Siguiendo</button>
                    :
                        <button className="tw-followCard-button" onClick={handleClick}>Seguir</button>
                    }
                </aside>
            </article>
        </>
    )
}

//*children es una prop mas de los elementos, que recibe lo que este envolviendo el componente, podria ser un texto (ej de un boton),
// otros componentes, etc...