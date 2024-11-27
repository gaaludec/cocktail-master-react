import { useRouteError } from 'react-router';
import ErrorWrapper from '../assets/wrappers/ErrorPage';
import NotFound from '../components/NotFound';

const ErrorPage = () => {
  const error = useRouteError();

  if (error.status === 404) return <NotFound />;

  return (
    <ErrorWrapper>
      <div>
        <h3>something went wrong</h3>
      </div>
    </ErrorWrapper>
  );
};

export default ErrorPage;
