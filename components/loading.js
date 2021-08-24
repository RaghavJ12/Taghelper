import React from 'react';
import { BounceLoader } from 'react-spinners';

export default function Loading() {
    return (
        <>
            <center className="cen">
                <BounceLoader color="#004e96" size={120} />
            </center>
            <center className="centext is-size-4" style={{color: '#004e96'}}>
                Please wait while we load Tag-Helper for you...
            </center>
        </>
    )
}