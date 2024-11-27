import { createBrowserRouter, RouterProvider } from 'react-router';
import {
  HomeLayout,
  LandingPage,
  AboutUs,
  NewsLetter,
  ErrorPage,
  CocktailPage,
} from './pages';

import { loader as landingPageLoader } from './pages/LandingPage';
import { loader as cocktailPageLoader } from './pages/CocktailPage';
import PageError from './components/PageError';

import { action as newsletterAction } from './pages/NewsLetter';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LandingPage />,
        loader: landingPageLoader(queryClient),
        errorElement: <PageError />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/cocktail/:id',
        element: <CocktailPage />,
        errorElement: <PageError />,
        loader: cocktailPageLoader(queryClient),
      },
      {
        path: '/news-letter',
        element: <NewsLetter />,
        action: newsletterAction,
      },
    ],
  },
]);

createBrowserRouter;

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />;
    </QueryClientProvider>
  );
}
export default App;
