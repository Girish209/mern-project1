import './App.css';
import Header from './components/Header';
import Todoform from './components/Todoform';
import Todos from './components/Todos';
import './media.css'
function App() {
  return (
    <div>
      <Header/>
      <Todoform/>
      <Todos/>
    </div>
  );
}

export default App;
