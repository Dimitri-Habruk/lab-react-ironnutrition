
import { useContext, useEffect, useState } from 'react';
import { FoodBoxContext } from './FoodController';
import foods from '../foods.json'

const Delete = () => {
    const [foodsArray, setFoodsArray] = useContext(FoodBoxContext)
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    };

    useEffect(() => {

        console.log(searchTerm)
        if (searchTerm !== '') {
            setFoodsArray(foodsArray.filter(elem => elem.name.toLowerCase().includes(searchTerm.toLowerCase())))

        }
        else {
            console.log('reset')
            setFoodsArray(foods)
        }

    }, [searchTerm]);


    return (
        <>
            <h1>delete comp</h1>
           
        </>
    )

}

export default Delete