const Welcome = () => {
    const hello = () => console.log("Bonjour")

    const goodEvening = (word) => {
        console.log(word);
    }

    return (
        <div>
            <button onClick={hello}>Invoquer une fonction</button>
            <button onClick={() => goodEvening("Bonsoir")}>Invoquer une fonction avec arg "Bonsoir"</button>
            <button onClick={() => console.log("Bonne nuit")}>Console log sur le bouton</button>
        </div>
    )
}

export default Welcome;