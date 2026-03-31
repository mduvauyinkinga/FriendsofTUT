import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import About from './About';
// Import other components...

export default function App() {
  return (
    <Router basename="/FriendsofTUT/">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Add other routes */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

