import { Fragment } from 'react'

const Car = ({color, name, year}) => {

    const colorInfo = color ? <td>{color}</td> : <td>"Néant"</td>;

    if (name) {
        return (
            <Fragment>
                <tr>
                    <td>{ name }</td>
                    <td>{ year }</td>
                    {colorInfo}
                </tr>
            </Fragment>
        )
    }

    // return null // ce return est Facultatif
}

export default Car
