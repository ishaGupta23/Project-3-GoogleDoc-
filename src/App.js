import './App.css';
import Header2nd from './Header2nd/Header2nd';
 import "bootstrap/dist/css/bootstrap.min.css";
import MainNavBar from './Top/MainNavBar/MainNavBar';
import Editable from './Textarea/textArea';

function App() {
  return (
    <div className="App">
      <MainNavBar/>
      <Header2nd/>
      <Editable/>
    </div>
  );
}

export default App;
