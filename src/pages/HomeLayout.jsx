import { Outlet, useNavigation } from 'react-router';
import Navbar from '../components/Navbar';

const HomeLayout = () => {
  const navigation = useNavigation();
  // console.log(navigation);
  const isPageLoading = navigation.state === 'loading';

  return (
    <div>
      <Navbar />
      <main className="page">
        {isPageLoading ? <div className="loading" /> : <Outlet />}
      </main>
    </div>
  );
};

export default HomeLayout;
