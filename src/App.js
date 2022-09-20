import './App.css';
import Buttons from './components/Buttons';
import Cards from './components/Cards';
import Header from './components/Header';


function App() {
  return (
    <div className="App">
     <Header/>
     <Buttons/>
     <p className='text-sm text-[#919BAB] absolute right-32 top-72 font-semibold'>09.26~09.30</p>
     <Cards/>
     <p className='text-end mr-28 text-sm mt-6 text-[#919BAB] font-semibold'> * 위 식단은 식재료 수급상황에 따라 변동될 수 있음을 양해바랍니다.</p>
    </div>
  );
}

export default App;
