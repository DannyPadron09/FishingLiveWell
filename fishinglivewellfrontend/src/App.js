import React from 'react'
import { useSelector } from 'react-redux';
import { BrowserRouter  as Router, Link, Route} from 'react-router-dom'
import FishCaught from './pages/FishCaught';
import HomePage from './pages/HomePage';
import LurePage from './pages/LurePage';


function App() {
    const livewell = useSelector((state) => state.livewell)
    const { livewellFish } = livewell 

  return (
      <Router>
        <div className="grid-container">
            <header className="row">
                <div>
                    <Link className="brand" to="index.html">Fishing Live Well</Link>
                </div>
                <div>
                    <Link to="/livewell">My Livewell {livewellFish.length > 0 && (
                        <span className="badge">{livewellFish.length}</span>
                    )}  </Link>
                    <Link to="/signin">  Sign In</Link>
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
