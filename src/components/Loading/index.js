import React from 'react';

import LoadingIcon from '../../assets/images/loading.svg';

import { Container, Spinner } from './styles';

const Loading = () => (
  <Container>
    <Spinner src={LoadingIcon} alt="Carregando" />
  </Container>
);

export default Loading;
