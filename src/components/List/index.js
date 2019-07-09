import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as FilterActions } from '../../store/ducks/filter';

import Loading from '../Loading';

import {
  Container,
  ListImages,
  ItemPhoto,
  Thumb,
  Title,
  Author,
  Tags,
  ItemTag,
  ContainerViewMore,
  ButtonLoadingMore,
} from './styles';

class List extends Component {
  static propTypes = {
    loading: PropTypes.bool.isRequired,
    successLoading: PropTypes.bool.isRequired,
    filterLoadingMore: PropTypes.func.isRequired,
    filterLoad: PropTypes.func.isRequired,
  };

  handleLoadingMore = () => {
    const {
      filterLoadingMore, page, term, tag,
    } = this.props;
    filterLoadingMore({ page, term, tag });
  };

  handleClickTag = (tagValue) => {
    const { filterLoad, loading } = this.props;

    if (!loading) filterLoad({ term: '', tag: tagValue });
  };

  render() {
    const {
      data, loading, successLoading, page, pages, loadingMore,
    } = this.props;

    return (
      <Container>
        {loading && <Loading />}
        {successLoading && (
          <>
            <ListImages>
              {data.map(item => (
                <ItemPhoto key={item.id}>
                  <Thumb src={item.url_o} />
                  <Title>{item.title}</Title>
                  <Author>{item.ownername}</Author>
                  <Tags>
                    {item.tags.length > 0
                      && item.tags.split(' ').map(tagValue => (
                        <ItemTag key={Math.random()} onClick={() => this.handleClickTag(tagValue)}>
                          {tagValue}
                        </ItemTag>
                      ))}
                  </Tags>
                </ItemPhoto>
              ))}
            </ListImages>
            {data.length > 0 && page < pages && !loadingMore && (
              <ContainerViewMore>
                <ButtonLoadingMore type="button" onClick={this.handleLoadingMore}>
                  Carregar mais
                </ButtonLoadingMore>
              </ContainerViewMore>
            )}
            {loadingMore && <Loading />}
          </>
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  data: state.filter.data,
  loading: state.filter.loading,
  successLoading: state.filter.successLoading,
  term: state.filter.term,
  tag: state.filter.tag,
  page: state.filter.page,
  pages: state.filter.pages,
  loadingMore: state.filter.loadingMore,
  successLoadingMore: state.filter.successLoading,
});

const mapDispatchToProps = dispatch => bindActionCreators(FilterActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
