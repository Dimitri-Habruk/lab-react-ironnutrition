import './App.css';
import AddFoodForm from './components/AddFoodForm';
import FoodBox from './components/FoodBox'

import { FoodBoxController } from './components/FoodController';
function App() {


  return (
    <div>
      <FoodBoxController>
        <AddFoodForm />
        <FoodBox />
      </FoodBoxController>
    </div>
  );
}

export default App;
