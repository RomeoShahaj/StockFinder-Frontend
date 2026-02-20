import { Outlet } from 'react-router';
import Navbar from './Components/Navbar/Navbar';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { UserProvider } from './context/userAuth';

function App() {
  return (
    <div className="min-h-screen bg-background-primary">
      <UserProvider>
      <Navbar />
      <Outlet />
      <ToastContainer />
      </UserProvider>
    </div>
  );
}

export default App;
