import React from 'react';

import Dashside from '../components/dashside';
export default function Dashboard() {
    return (
        <>
            <div className="columns">
                <div className="column is-1">
                    <Dashside />
                </div>
                <div className="column is-11 is-size-3">
                    Hello, this is sample friends page.
                </div>
            </div>
        </>
    );
}