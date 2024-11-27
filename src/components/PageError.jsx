import { useRouteError } from 'react-router';
import ErrorWrapper from '../assets/wrappers/ErrorPage';

const PageError = () => {
  const { message } = useRouteError();
  return (
    <ErrorWrapper>
      <div>
        <h3>{message}</h3>
      </div>
    </ErrorWrapper>
  );
};

export default PageError;
