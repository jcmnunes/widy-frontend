import styled from 'styled-components/macro';

export const PageTitle = styled.h2`
  font-size: 24px;
  font-weight: 700;
`;

export const PageDescription = styled.p`
  font-size: 16px;
  font-weight: 400;
  color: ${props => props.theme.neutral300};
`;
