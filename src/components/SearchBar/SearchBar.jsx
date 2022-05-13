import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { IoImages } from 'react-icons/io5';

import {
  Header,
  SearchForm,
  SearchFormButton,
  SearchFormInput,
} from './SearchBar.styled';

function SearchBar({ onSubmit }) {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = event => {
    setSearchQuery(event.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (searchQuery.trim() === '') {
      toast.error(
        'Sorry, there are no images matching your search query. Please try again.',
        {
          theme: 'dark',
          autoClose: 3000,
        },
      );
      return;
    }

    onSubmit(searchQuery);
    setSearchQuery('');
  };

  return (
    <Header>
      <SearchForm onSubmit={handleSubmit}>
        <SearchFormButton type="submit">
          <IoImages style={{ color: '#740526', width: 35, height: 35 }} />
        </SearchFormButton>

        <SearchFormInput
          type="text"
          autoComplete="off"
          autoFocus
          name="searchQuery"
          value={searchQuery}
          onChange={handleChange}
          placeholder="Search images and photos"
        />
      </SearchForm>
    </Header>
  );
}

export default SearchBar;

SearchBar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

//-------class---------

/* class SearchBar extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    searchQuery: '',
  };

  handleChange = event => {
    this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { searchQuery } = this.state;

    if (searchQuery.trim() === '') {
      toast.error(
        'Sorry, there are no images matching your search query. Please try again.',
        {
          theme: 'dark',
          autoClose: 3000,
        },
      );
      return;
    }

    this.props.onSubmit(searchQuery);
    this.reset();
  };

  reset = () => {
    this.setState({ searchQuery: '' });
  };

  render() {
    const { searchQuery } = this.state;

    return (
      <Header>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <IoImages style={{ color: '#740526', width: 35, height: 35 }} />
          </SearchFormButton>

          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            name="searchQuery"
            value={searchQuery}
            onChange={this.handleChange}
            placeholder="Search images and photos"
          />
        </SearchForm>
      </Header>
    );
  }
}

export default SearchBar;

 */
