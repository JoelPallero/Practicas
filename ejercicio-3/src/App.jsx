import React from 'react'
import './App.css'
import Test1 from './components/test-index/hello-world.jsx'
import Test2 from './components/test-index-2/hello-world-2.jsx'


const App = () => {
    return (
        <main className="main">
            <section className="section">
                <Test1/>
            </section>
            <section className="section">
                <Test2/>
            </section>
        </main>
    );
}


export default App
