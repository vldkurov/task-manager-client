import './App.css';
import Login from "./components/Login/Login";
import LogoutButton from "./components/Logout/Logout";
import Signup from "./components/Signup/Signup";

function App() {
    return (
        <>
            <Signup/>
            <Login/>
            <LogoutButton/>
        </>
    );
}

export default App;
