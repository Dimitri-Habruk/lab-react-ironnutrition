
import { Card, Col, Button } from 'antd';
import '../App.css';
import { useContext, useState } from 'react';
import { FoodBoxContext } from './FoodController';
import foods from '../foods.json'

const FoodBox = (props) => {
    const [foodsArray, setFoodsArray] = useContext(FoodBoxContext)

    
    const deleteFood =(e) =>{
        setFoodsArray((foodsArray) =>
        foodsArray.filter((elem) => elem.name !== e))
    }
    


    return (
        <div className='allCards'>
            {foodsArray.map(
                (elem, index) =>
                    <Col>
                        <Card
                            key={index}
                            title={elem.name}
                            style={{ width: 230, height: 300, margin: 10 }}
                        >

                            <img src={elem.image} height={60} alt="food" />
                            <p>Calories {elem.calories}</p>
                            <p>Servings: {elem.servings}</p>
                            <p>
                                <b>Total Calories: {elem.calories * elem.servings} </b> kcal
                            </p>
                            <Button type="primary" onClick={(e) => deleteFood(elem.name)}> Delete </Button>
                        </Card>
                    </Col>
            )}

        </div>
    )
      


}


export default FoodBox