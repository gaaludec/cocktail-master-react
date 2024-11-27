/* eslint-disable react/no-unescaped-entities */
import ErrorWrapper from '../assets/wrappers/ErrorPage';
import img from '../assets/not-found.svg';
import { Link } from 'react-router';

const NotFound = () => {
  return (
    <ErrorWrapper>
      <div>
        <img src={img} alt="not-found" />
        <h3>Ohh!</h3>
        <p>we can't seem to find the page you are looking for.</p>
        <Link to="/">back home</Link>
      </div>
    </ErrorWrapper>
  );
};

export default NotFound;
