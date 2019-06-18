import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
  let transformedIngredients = Object.keys(props.ingredients).map(igKey => {
        // extract ingredient keys from object, and turn them into an array
    return [...Array(props.ingredients[igKey])].map((_, i) => {
        // returns new array of undefined elements with length of how many of the same ingredients there are
          // console.log([...Array({'A':2}['A'])]); returns [undefined, undefined]
      return <BurgerIngredient key={igKey + i} type={igKey} />
        // unique key will be ingredient name + array number
    });
  }).reduce((arr, el) => {
      return arr.concat(el);
    }, []);
      // combine separate arrays into one, using [] as initial value 

   if (transformedIngredients.length === 0) {
     transformedIngredients = <p>Please start adding ingredients</p>;
   }

  return(
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
}

export default burger;