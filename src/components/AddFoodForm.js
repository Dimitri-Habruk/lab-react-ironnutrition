import foods from '../foods.json';
import { useState } from 'react';
import { Input, Button, Divider } from 'antd';
import '../App.css';


const AddFoodForm = ({ name, image, calories, servings }) => {

  function handleChange(event) {
    console.log(event.target.value);
  }
  return (
    <>
      <Divider>Add Food Entry</Divider>
      <form onSubmit={0}>
        <label> Name  </label>
        <Input type="text" onChange={0} className='input' />

        <label> Image     </label>
        <Input type="text" onChange={0} className='input' />
        

        <label>  Calories    </label>

        <Input value={1} type="number" onChange={handleChange} className='input' />
        Servings
        <Input value={1} type="text" onChange={0} className='input' />

        <Button>Create</Button>
      </form>

    </>

  )


}

export default AddFoodForm