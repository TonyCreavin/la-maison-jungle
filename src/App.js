import './App.css';
import logo from './assets/logo.png';
import Banner from './components/Banner';
import Footer from './components/Footer';
//import Cart from './components/Cart';
import ShoppingList from './components/ShoppingList';
import './styles/Footer.css';

function App() {
  return (
    <div>
      <Banner>
        <img src={logo} alt="La maison jungle" className="lmj-logo" />
        <h1 className="lmj-title">La maison jungle</h1>
      </Banner>
      {/* <Cart /> */}
      <ShoppingList />
      <Footer />
    </div>
  );
}

export default App;
