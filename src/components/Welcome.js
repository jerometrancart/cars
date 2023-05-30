import { Fragment } from 'react'

const Welcome = () => {
    const hello = () => console.log("Bonjour")

    const goodEvening = (word) => {
        console.log(word);
    }

    return (
        <Fragment>
            <button onClick={hello}>Invoquer une fonction</button>
            <button onClick={() => goodEvening("Bonsoir")}>Invoquer une fonction avec arg "Bonsoir"</button>
            <button onClick={() => console.log("Bonne nuit")}>Console log sur le bouton</button>
        </Fragment>
    )
}

export default Welcome;