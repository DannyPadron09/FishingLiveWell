import React from 'react'
import data from './data'

function App() {
  return (
    <div className="grid-container">
            <header className="row">
                <div>
                    <a className="brand" href="index.html">Fishing Live Well</a>
                </div>
                <div>
                    <a href="myLures.html">My Lures</a>
                    <a href="signin.html">Sign In</a>
                </div>
            </header>
            <main>
                <div className="row center">
                    {
                        data.lures.map(lure => (
                            <div key={lure._id} className="card">
                        <a href="lure.html">
                            <img className="medium" src={lure.lureImage} alt="lure" />
                        </a>
                        <div className="card-body">
                            <a href="lure.html">
                                <h2>{lure.lureBrand}</h2>
                                <h3>{lure.product}</h3>
                                <h3>{lure.lureColor}</h3>
                            </a>
                            <div className="do-i-own">
                                Do I own? <br />
                                <span>Yes<i className="fas fa-check-square"></i></span>
                                <span>No<i className="fas fa-check-square"></i></span>
                            </div>
                            <div className="price">
                                {lure.price}
                            </div>
                        </div>
                    </div>
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
