import { Outlet } from 'react-router';
import Navbar from './Components/Navbar/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-background-primary">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
