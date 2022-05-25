import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Sidebar';
import '../css/App.css';
import AnimatedRoutes from './AnimatedRoutes';

function App() {

  return (
    <div className="App">
      <Router>
        <AnimatedRoutes />
        {/* <Sidebar /> */}
      </Router>
    </div>
  );
}

export default App;
