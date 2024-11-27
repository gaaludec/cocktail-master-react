/* eslint-disable react/prop-types */
import { Link } from 'react-router';
import CocktailCardWrapper from '../assets/wrappers/CocktailCard';

const CocktailCard = ({ id, name, image, info, glass }) => {
  return (
    <CocktailCardWrapper>
      <div className="img-container">
        <img src={image} alt={name} className="img" />
      </div>
      <div className="footer">
        <h4>{name}</h4>
        <h5>{glass}</h5>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn">
          details
        </Link>
      </div>
    </CocktailCardWrapper>
  );
};

export default CocktailCard;
