import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import "./App.css";

function App() {
    return (
        <>
            <UserContextProvider>
                <h1>React context</h1>
                <Login />
                {/* <Dashboard /> */}
            </UserContextProvider>
        </>
    );
}

export default App;
