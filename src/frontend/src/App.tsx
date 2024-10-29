import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import Counter from "./pages/Counter";
import Profile from './pages/Profile';
import Rate from './pages/Rate';
import BondToken from './pages/BondToken';
import GoldToken from './pages/GoldToken';
import Header from "./components/header/Header";
import { DashBoardLayout } from "./Layout";
// import { HomeLayout } from "./Layout";
/* import AllProfiles from "./components/profile/AllProfiles";
import EditProfile from "./components/profile/EditProfile";

import { NoProfileMessage } from "./components/profile/NoProfileMessage"; */

//import GitHubIcon from "./components/GitHubIcon";

function App() {
  return (
    <Router>
    <div className="flex flex-col items-center w-full">
      <Header />
        <div className="flex flex-col items-center w-full gap-5 p-2 justify-between">
          <Routes>
            <Route element={<DashBoardLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/counter" element={<Counter />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/rate" element={<Rate />} />
              <Route path="/bondtoken" element={<BondToken />} />
              <Route path="/goldtoken" element={<GoldToken />} />
            </Route>
          </Routes> 
{/*         <div className="h-5 md:h-28" />
        <NoProfileMessage />
        <EditProfile className="w-full max-w-2xl border-zinc-700/50 border-[1px] bg-zinc-900 drop-shadow-xl rounded-3xl flex flex-col items-center px-5 md:px-24 py-8" />
        <AllProfiles />
         <GitHubIcon /> 

      </div> */}
        </div>
    </div>

    </Router>
  );
}

export default App;
