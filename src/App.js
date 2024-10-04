import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Footer from './components/Footer';
import Content from './components/Content';

function App() {
  return (
    <Router>
      <NavigationBar />
      <Routes>
        <Route path="/home" element={<Content />} />
        {/* Exercise 6 updated to Footer */}
        <Route path="/read" element={<h1><Footer/></h1>} />
        {/* Exercise 6 updated to Header */}
        <Route path="/create" element={<h1><Header/></h1>} />
      </Routes>
    </Router>
  );
}

export default App;