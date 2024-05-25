import logo from './logo.svg';
import './App.css';
import Caja from './componente/caja';
import Caja2 from './componente/caja2';
import Caja3 from './componente/caja3';
import CarouselComponent from './componente/CarouselComponent';
function App() {
  return (
    <div className="App">
      <CarouselComponent/>
      <Caja />
      <Caja2/>
      <Caja3/>
      
    </div>

    


  );
}

export default App;
