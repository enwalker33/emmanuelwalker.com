import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './app/components/Landing';
import SignIn from './app/components/Signin';
import Portfolio from './app/components/Portfolio';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/portfolio" element={<Portfolio />} />
      </Routes>
    </Router>
  );
}

export default App;