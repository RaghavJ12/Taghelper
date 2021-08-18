import React, { useState, useEffect } from 'react';
import Dashside from '../components/dashside';

export default function Layout({ children }) {
    return (
        <>
            <Dashside />
            {children}
        </>
    );
}