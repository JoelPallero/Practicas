import React from 'react'
import './App.css'
import JelouWorld from './components/test-index/hello-world.jsx'


const App = () => {
    return (
        <main className="main">
            <section className="section">
                <JelouWorld
                    title='Card number 1'
                    description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, libero eget aliquam aliquam, nunc nisl aliqu'
                    urlImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROOZ20MxjQ8Dd0A2GSaSRJRk_rd_BJ4D8EgMx7J-uZlQ0n7rXYiM3epsSf8k6vRHJDS6U&usqp=CAU"
                />
            </section>
        </main>
    );
}


export default App


