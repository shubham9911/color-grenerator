
import React, { useState, useEffect } from 'react';
import './SingleColor.css';
import rgbToHex from './rgbToHex';

function SingleColor({rgb, weight, index}) {
    const [alert, setAlert] = useState(false);
    const bcg = rgb.join(',');
    // console.log(bcg)
    console.log(rgb)
    const hex = rgbToHex(...rgb)
    useEffect(()=>{
        const timeout = setTimeout(()=>{
            setAlert(false)
        },1000)
        return () => clearTimeout(timeout)
    }, [alert])

    return (
        <div>
            <article className={`color ${index >10 && 'color-light'}`} style={{backgroundColor: `rgb(${bcg})`}} onClick={() => {setAlert(true);
                navigator.clipboard.writeText(hex)
            }}>
                    <p className='color-percent'>{weight}%</p>
                    <p className='color-value'>{hex}</p>
                    {alert && <p className='alert'>copied to clipboard</p>}
                </article>
        </div>
    )
}

export default SingleColor
