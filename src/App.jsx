import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';

import {GlobalProvider} from './context/GlobalContext';
import Individual from './components/IndMovie.jsx';
import Main from './components/Main';

function App() {
  return (
    <>
      <GlobalProvider>
        <Router>
          <div className="justify-between  m-auto mt-0 w-9/12 2xl:w-7/12 ">
            {/* <div className=" justify-between  m-auto mt-0 w-full h-screen relative top-0">
            <img
              src={require('./images/joker3.jpg')}
              className=" object-cover absolute  w-full h-2/3 z-0"
            />
            <Header />
            <Intro />
          </div> */}
            {/* <Popular /> */}
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/ind_movie" element={<Individual />} />
            </Routes>
          </div>
        </Router>
      </GlobalProvider>
    </>
  );
}

export default App;
