/* eslint-disable react-refresh/only-export-components */

import CocktailPageWrapper from '../assets/wrappers/CocktailPage';
import { Link, Navigate, useLoaderData } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import { singleCocktailQuery } from '../utils';

export const loader =
  (queryClient) =>
  async ({ params: { id } }) => {
    await queryClient.ensureQueryData(singleCocktailQuery(id));
    return { id };
  };

const CocktailPage = () => {
  const { id } = useLoaderData();
  const { data } = useQuery(singleCocktailQuery(id));

  if (!data) return <Navigate to="/" />;

  const drink = data.drinks[0];
  const {
    strDrink: name,
    strDrinkThumb: image,
    strAlcoholic: info,
    strCategory: category,
    strGlass: glass,
    strInstructions: instructions,
  } = drink;

  const ingredients = Object.keys(drink)
    .filter((key) => key.startsWith('strIngredient') && drink[key])
    .map((key) => ({
      ingredient: drink[key],
      measure: drink[`strMeasure${key.match(/\d+/)[0]}`] || '',
    }));

  return (
    <CocktailPageWrapper>
      <header>
        <Link to="/" className="btn">
          Back Home
        </Link>
        <h3>{name}</h3>
      </header>
      <div className="drink">
        <img src={image} alt={`Image of ${name}`} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">name :</span> {name}
          </p>
          <p>
            <span className="drink-data">category :</span> {category}
          </p>
          <p>
            <span className="drink-data">info :</span> {info}
          </p>
          <p>
            <span className="drink-data">glass :</span> {glass}
          </p>
          <p>
            <span className="drink-data">ingredients :</span>{' '}
            {ingredients.map(({ ingredient, measure }, index) => (
              <span className="ing" key={ingredient}>
                {ingredient} {measure && `(${measure})`}
                {index < ingredients.length - 1 ? ', ' : ''}
              </span>
            ))}
          </p>
          <p>
            <span className="drink-data">instructions :</span> {instructions}
          </p>
        </div>
      </div>
    </CocktailPageWrapper>
  );
};

export default CocktailPage;
