import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Creators as FilterActions } from '../../store/ducks/filter';

import {
  BoxFilter,
  Container,
  Form,
  Input,
  Icon,
  DescriptionSearch,
  Term,
  Results,
} from './styles';

class Filter extends Component {
  state = {
    term: '',
  };

  static propTypes = {
    term: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired,
    loading: PropTypes.bool.isRequired,
    successLoading: PropTypes.bool.isRequired,
    filterLoad: PropTypes.func.isRequired,
  };

  componentDidMount() {
    const { location, filterLoad } = this.props;
    const values = queryString.parse(location.search);
    const { s, t } = values;

    const termParam = s || '';
    const TagParam = t || '';

    if (termParam.length > 0 || TagParam.length > 0) {
      filterLoad({ term: termParam, tag: TagParam });
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const { filterLoad, loading } = this.props;
    const { term } = this.state;

    if (!loading) filterLoad({ term, tag: '' });
  };

  handleFilterChange = (event) => {
    this.setState({ term: event.target.value });
  };

  render() {
    const {
      data, successLoading, total, term, tag,
    } = this.props;

    return (
      <BoxFilter>
        <Container>
          <Form method="GET" action="/search" onSubmit={this.handleSubmit}>
            <Icon icon={faSearch} />
            <Input type="text" placeholder="Buscar..." onChange={this.handleFilterChange} />
          </Form>
        </Container>
        {successLoading && (
          <DescriptionSearch>
            {term && term.length > 0 && <Term>{`Você buscou por "${term}"`}</Term>}
            {tag && tag.length > 0 && <Term>{`Você está visualizando a tag "${tag}"`}</Term>}
            <Results>{`Exibindo ${data.length} resultados de ${total}`}</Results>
          </DescriptionSearch>
        )}
      </BoxFilter>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.filter.loading,
  successLoading: state.filter.successLoading,
  data: state.filter.data,
  total: state.filter.total,
  term: state.filter.term,
  tag: state.filter.tag,
});

const mapDispatchToProps = dispatch => bindActionCreators(FilterActions, dispatch);

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(Filter),
);
