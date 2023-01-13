
import { Card, Col, Button } from 'antd';
import '../App.css';
import { useContext } from 'react';
import { FoodBoxContext } from './FoodController';

const FoodBox = (props) => {
    const [foodsArray, setFoodsArray] = useContext(FoodBoxContext)

 
    
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
                            <Button type="primary"> Delete </Button>
                        </Card>
                    </Col>
            )}

        </div>
    )
      


}


export default FoodBox