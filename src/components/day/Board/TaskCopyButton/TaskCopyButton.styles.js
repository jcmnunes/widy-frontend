import styled from 'styled-components/macro';
import Icon from '../../../../icons/Icon';

export const StyledButton = styled.button`
  height: 24px;
  cursor: pointer;
`;

export const IconDuplicate = styled(Icon).attrs({
  icon: Icon.DUPLICATE,
})`
  .primary {
    fill: ${props => props.theme.neutral300};
    transition: ${props => props.theme.transitionAll};
  }

  .secondary {
    fill: ${props => props.theme.neutral200};
    transition: ${props => props.theme.transitionAll};
  }

  &:hover {
    .primary {
      fill: ${props => props.theme.neutral400};
    }

    .secondary {
      fill: ${props => props.theme.neutral300};
    }
  }
`;
