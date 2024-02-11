import { React, useContext, useEffect } from 'react'
import JourNuitContext from '../../contexts/JourNuitContext';
import './index.css'

const Light = () => {
    const jourNuit = useContext(JourNuitContext);

    useEffect(() => {

    }, [jourNuit])

    console.log('jourNuit :', jourNuit)
    return (
        <>
            <div className='light' style={{ display: jourNuit.jour ? 'none' : 'block' }}></div>
        </>
    )
}

export default Light