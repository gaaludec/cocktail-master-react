/* eslint-disable react/prop-types */
import CocktailListWrapper from '../assets/wrappers/CocktailList';
import CocktailCard from './CocktailCard';

const CocktailList = ({ drinks }) => {
  if (!drinks) return <h4>No cocktails found. Enter a search term...</h4>;

  const formattedDrinks = drinks.map((drink) => {
    const {
      idDrink: id,
      strDrink: name,
      strDrinkThumb: image,
      strAlcoholic: info,
      strGlass: glass,
    } = drink;

    return { id, name, image, info, glass };
  });

  return (
    <CocktailListWrapper>
      {formattedDrinks.map((item) => (
        <CocktailCard key={item.id} {...item} />
      ))}
    </CocktailListWrapper>
  );
};

export default CocktailList;
