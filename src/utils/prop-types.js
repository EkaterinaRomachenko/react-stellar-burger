import PropTypes from "prop-types";

export const IngredientPropType = PropTypes.shape({
  //укажите здесь prop-types для ингридиента
  _id: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  proteins: PropTypes.number,
  fat: PropTypes.number,
  carbohydrates:PropTypes.number,
  calories: PropTypes.number,
  price: PropTypes.number,
  image: PropTypes.string,
  __v: PropTypes.number
});
