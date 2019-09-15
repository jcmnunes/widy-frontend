import styled from 'styled-components/macro';
import Icon from '../../../icons/Icon';

export const StyledPopup = styled.div`
  position: fixed;
  width: 450px;
  padding: 18px;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.12), 0 1px 2px hsla(0, 0%, 0%, 0.24);
  right: 32px;
  bottom: 32px;
  border-radius: 4px;
  border: 1px solid ${props => props.theme.neutral300};
  z-index: 7000;
  background: white;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Time = styled.div`
  font-size: 16px;
`;

export const Units = styled.span`
  font-size: 12px;
`;

export const StopButton = styled.button`
  display: block;
  cursor: pointer;
  height: 24px;
`;

export const StyledIconStop = styled(Icon)`
  .primary {
    fill: ${props => (props.isInBreak ? props.theme.blue100 : props.theme.yellow400)};
    transition: fill 0.2s ease;
  }

  .secondary {
    fill: ${props => (props.isInBreak ? props.theme.blue700 : props.theme.yellow900)};
    transition: fill 0.2s ease;
  }

  &:hover {
    .primary {
      fill: ${props => (props.isInBreak ? props.theme.blue200 : props.theme.yellow500)};
    }

    .secondary {
      fill: ${props => (props.isInBreak ? props.theme.blue800 : props.theme.yellow900)};
    }
  }
`;
