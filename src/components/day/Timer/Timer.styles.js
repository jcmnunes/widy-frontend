import styled from 'styled-components/macro';
import Icon from '../../../icons/Icon';

export const IconStop = styled(Icon).attrs({
  icon: Icon.STOP,
})`
  .primary {
    fill: ${({ inBreak, theme }) => (inBreak ? theme.blue100 : theme.yellow400)};
    transition: ${props => props.theme.transitionAll};
  }

  .secondary {
    fill: ${({ inBreak, theme }) => (inBreak ? theme.blue700 : theme.yellow900)};
    transition: ${props => props.theme.transitionAll};
  }

  &:hover {
    .primary {
      fill: ${({ inBreak, theme }) => (inBreak ? theme.blue200 : theme.yellow500)};
    }

    .secondary {
      fill: ${({ inBreak, theme }) => (inBreak ? theme.blue800 : theme.yellow900)};
    }
  }
`;

export const IconPlay = styled(Icon).attrs({
  icon: Icon.PLAY,
})`
  .primary {
    fill: ${({ theme }) => theme.neutral200};
    transition: ${props => props.theme.transitionAll};
  }

  .secondary {
    fill: ${({ theme }) => theme.neutral500};
    transition: ${props => props.theme.transitionAll};
  }

  &:hover {
    .primary {
      fill: ${({ theme }) => theme.neutral300};
    }

    .secondary {
      fill: ${({ theme }) => theme.neutral600};
    }
  }
`;
