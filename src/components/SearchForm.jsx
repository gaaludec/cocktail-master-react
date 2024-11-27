/* eslint-disable react/prop-types */
import { useNavigation, Form } from 'react-router';
import SearchFormWrapper from '../assets/wrappers/SearchForm';

const SearchForm = ({ searchTerm }) => {
  const navigation = useNavigation();
  const isSearching = navigation.status === 'submitting';

  return (
    <SearchFormWrapper>
      <Form className="form">
        <input
          type="search"
          name="search"
          id="search"
          className="form-input"
          defaultValue={searchTerm}
        />
        <button type="submit" className="btn" disabled={isSearching}>
          {isSearching ? 'searching...' : 'search'}
        </button>
      </Form>
    </SearchFormWrapper>
  );
};

export default SearchForm;
