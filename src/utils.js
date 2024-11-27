import axios from 'axios';

const singleCocktailUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

const cocktailDBUrl =
  'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const singleCocktailQuery = (id) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: async () => {
      try {
        const { data } = await axios.get(`${singleCocktailUrl}${id}`);
        if (!data.drinks || data.drinks.length === 0) {
          throw new Error('Cocktail not found.');
        }
        return data;
      } catch (error) {
        console.error(error);
        throw new Response('Cocktail not found.', { status: 404 });
      }
    },
  };
};

export const searchCocktailQuery = (searchTerm) => {
  return {
    queryKey: ['search', searchTerm || 'a'],
    queryFn: async () => {
      try {
        const { data } = await axios.get(`${cocktailDBUrl}${searchTerm}`);
        if (!data.drinks) throw new Error('No drinks found.');
        return data.drinks;
      } catch (error) {
        console.error('Error fetching data:', error);
        throw new Response('Failed to load cocktails.', { status: 500 });
      }
    },
  };
};
