import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox'

import { FoodBoxController } from './components/FoodController';
import Search from './components/Search';
function App() {


  return (
    <div>
      <FoodBoxController>
        <AddFoodForm />
        <Search/>
        <FoodBox />
      </FoodBoxController>
    </div>
  );
}

export default App;
