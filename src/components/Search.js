
import { useContext, useEffect, useState } from 'react';
import { FoodBoxContext } from './FoodController';
import foods from '../foods.json'

const Search = () => {
    const [foodsArray, setFoodsArray] = useContext(FoodBoxContext)
    const [searchTerm, setSearchTerm] = useState("");

    const handleChange = (event) => {
        setSearchTerm(event.target.value)
    };

    useEffect(() => {

        if (searchTerm !== '') {
            setFoodsArray(foodsArray.filter(elem => elem.name.toLowerCase().includes(searchTerm.toLowerCase())))

        }
        else {
            setFoodsArray(foods)
        }

    }, [searchTerm]);


    return (
        <>
            <h1>search comp</h1>
            <input
                type={'text'}
                placeholder="Search"
                value={searchTerm}
                onChange={handleChange}
            />
        </>
    )

}

export default Search