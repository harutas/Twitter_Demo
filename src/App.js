import './App.css';
import DetailPage from './components/DetailPage';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <div className='conttainer'>
        <div className='d-flex flex-column align-items-center'>


          <DetailPage />

        </div>

      </div>
    </div>
  );
}

export default App;
