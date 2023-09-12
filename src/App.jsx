import './App.css'
import Navbar from "./components/Navbar/Navbar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";

function App() {
    return (
        <>
            <Navbar />
            <main className='container'>
                <ItemListContainer greeting='Bienvenido a Shoes Santiago' />
            </main>
        </>
    );
}

export default App