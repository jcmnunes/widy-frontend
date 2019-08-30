import styled from 'styled-components/macro';
import Icon from '../../../icons/Icon';

export const StyledSidebar = styled.div`
  background: ${props => props.theme.yellow050};
  padding: 32px;
  height: 100vh;
  overflow-y: auto;

  @media (min-width: ${props => props.theme.bp_xlarge}) {
    padding: 48px;
  }
`;

export const EmptyState = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 48px;
`;

export const Title = styled.h2`
  font-size: 16px;
  color: ${props => props.theme.neutral400};
  margin-top: 24px;
`;

export const IconLaunch = styled(Icon).attrs({
  icon: Icon.LAUNCH,
})`
  .primary {
    fill: ${({ theme }) => theme.neutral600};
  }

  .secondary {
    fill: ${({ theme }) => theme.neutral300};
  }
`;
