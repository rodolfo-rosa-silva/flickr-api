export const Types = {
  FILTER_REQUEST: 'filter/FILTER_REQUEST',
  FILTER_SUCCESS: 'filter/FILTER_SUCCESS',
  FILTER_LOADING_MORE: 'filter/FILTER_LOADING_MORE',
  FILTER_LOADING_MORE_SUCCESS: 'filter/FILTER_LOADING_MORE_SUCCESS',
};

const INITIAL_STATE = {
  data: [],
  term: '',
  tag: '',
  loading: false,
  successLoading: false,
  page: 1,
  pages: 0,
  total: '',
  loadingMore: false,
  successLoadingMore: false,
};

export default function filter(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.FILTER_REQUEST:
      return {
        term: action.payload.params.term,
        tag: action.payload.params.tag,
        loading: true,
        successLoading: false,
        data: [],
        page: 1,
        pages: 0,
        total: '',
      };
    case Types.FILTER_SUCCESS:
      return {
        ...state,
        loading: false,
        successLoading: true,
        data: action.payload.data.photo,
        page: action.payload.data.page,
        pages: action.payload.data.pages,
        total: action.payload.data.total,
      };
    case Types.FILTER_LOADING_MORE:
      return {
        ...state,
        loadingMore: true,
      };
    case Types.FILTER_LOADING_MORE_SUCCESS:
      return {
        ...state,
        loadingMore: false,
        successLoadingMore: true,
        data: state.data.concat(action.payload.data.photo),
        page: action.payload.data.page + 1,
      };
    default:
      return state;
  }
}

export const Creators = {
  filterLoad: params => ({
    type: Types.FILTER_REQUEST,
    payload: { params },
  }),
  filterSuccess: data => ({
    type: Types.FILTER_SUCCESS,
    payload: { data },
  }),
  filterLoadingMore: params => ({
    type: Types.FILTER_LOADING_MORE,
    payload: { params },
  }),
  filterLoadingMoreSuccess: data => ({
    type: Types.FILTER_LOADING_MORE_SUCCESS,
    payload: { data },
  }),
};
