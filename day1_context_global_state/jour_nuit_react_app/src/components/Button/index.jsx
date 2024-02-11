import { React, useContext, useEffect } from 'react'
import JourNuitContext from '../../contexts/JourNuitContext';
import './index.scss'


const Button = () => {
    const jourNuit = useContext(JourNuitContext);

    useEffect(() => {
        console.log(jourNuit)
    }, [jourNuit])

    return (
        <div className="switch__container">
            <input id="switch-shadow" className="switch switch--shadow" type="checkbox" onClick={jourNuit.switch} />
            <label htmlFor="switch-shadow"></label>
            <p>{jourNuit.jour ? 'Jour' : 'Nuit'} </p>
        </div>
    )
}

export default Button