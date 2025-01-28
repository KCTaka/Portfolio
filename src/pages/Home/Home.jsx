import React from 'react';

import { useState } from 'react'
import reactLogo from '/src/assets/react.svg'
import viteLogo from '/src/assets/vite.svg'

import Introduction from './Introduction';
import Projects from './Projects';
import Experience from './Experience';

import './Home.css';

function Home() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Introduction />
            <Projects />
            <Experience />

        </>
    )
}

export default Home;