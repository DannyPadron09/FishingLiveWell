import React from 'react'
import { BrowserRouter  as Router, Route} from 'react-router-dom'
import FishCaught from './pages/FishCaught';
import HomePage from './pages/HomePage';
import LurePage from './pages/LurePage';


function App() {
  return (
      <Router>
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

                <Route path="/" component={HomePage} exact></Route>
                <Route path="/lure/:id" component={LurePage}></Route>
                <Route path="/livewell/:id?" component={FishCaught}></Route>

            </main>
            <footer className="row center">
                by: Danny Padron
            </footer>
        </div>
      </Router>
  );
}

export default App;
