import React from 'react';
import classes from './Burger.module.css';
import BurgerIngredient  from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    let trasformedIngredients = Object.keys(props.ingredients)
           .map(igKey=> {
               return [...Array(props.ingredients[igKey])].map((_, i) => {
                  return   <BurgerIngredient key={igKey + 1} type={igKey} />    
               })
           })
           .reduce((arr, el) => {
               return arr.concat(el)
           }, []);

    if(trasformedIngredients.length === 0){
        trasformedIngredients = <p>Please start adding ingredients!</p>;
    }
    
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"/>
            {trasformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default burger; 