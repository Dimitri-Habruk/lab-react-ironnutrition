import { useState } from 'react';
import { Input, Button, Divider } from 'antd';
import {FoodBoxContext} from './FoodController'
import { useContext } from 'react';

import '../App.css';


const AddFoodForm = () => {
  const [foodsArray, setFoodsArray] = useContext(FoodBoxContext)
  const [name, setName] = useState()
  const [image, setImage] = useState('')
  const [calories, setCalories] = useState('')
  const [servings, setServings] = useState('')





  const handleSubmit = (e) => {
    e.preventDefault()
    setFoodsArray([...foodsArray, { name: name, calories: calories, image: image, servings: servings }])
    console.log(foodsArray)

  }

  return (
    <>
      <Divider>Add Food Entry {foodsArray.length}</Divider>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label> Name  </label>
        <Input type="text" name='name' onChange={(event) => setName(event.target.value)} className='input' />

        <label> Image     </label>
        <Input type="text" name='image' onChange={(event) => setImage(event.target.value)} className='input' />
        <label>  Calories    </label>

        <Input value={1} name='calories' type="number" onChange={(event) => setCalories(event.target.value)} className='input' />
        Servings
        <Input value={1} type="text" name='servings' onChange={(event) => setServings(event.target.value)} className='input' />

        <button type='submit'>Create</button>
      </form>

    </>

  )


}

export default AddFoodForm