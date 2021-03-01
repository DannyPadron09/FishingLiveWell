import React from 'react'
import data from './data'
import Lure from './components/Lure'

function App() {
  return (
    <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="index.html">Fishing Live Well</a>
                </div>
                <div>
                    <a href="/myLures">My Lures  </a>
                    <a href="/signin">  Sign In</a>
                </div>
            </header>
            <main>
                <div className="row center">
                    {
                        data.lures.map(lure => (
                            <Lure key={lure._id} lure={lure} />
                        ))
                    }
                </div>
            </main>
            <footer className="row center">
                by: Danny Padron
            </footer>
        </div>
  );
}

export default App;
