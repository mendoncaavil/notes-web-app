import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
 import Header from './Component/Header';
 import Footer from './Component/Footer';
 import CreateNote from './Component/CreateNote';

function App() {
  return (
    <div className="App">
     <Header/>
     <CreateNote/>
     <Footer/>
    </div>
  );
}

export default App;
