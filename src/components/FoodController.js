
import { createContext} from "react"
import foods from '../foods.json';
import { useState } from "react";


export const FoodBoxContext = createContext()

export const FoodBoxController = (props) => {
    const [foodsArray, setFoodsArray] = useState(foods)









    return (
        <FoodBoxContext.Provider value={[foodsArray, setFoodsArray]}>
            {props.children}
        </FoodBoxContext.Provider>
    )
}