import styled from 'styled-components/macro';
import Icon from '../../../../icons/Icon';

export const StyledActionsTop = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  & > * {
    margin-left: 12px;
  }
`;

export const IconCheveronDown = styled(Icon).attrs({
  icon: Icon.CHEVERON_DOWN,
})`
  .primary {
    fill: ${props => props.theme.neutral600};
  }
`;

export const IconSurvey = styled(Icon).attrs({
  icon: Icon.SURVEY,
})`
  .primary {
    fill: ${props => props.theme.neutral200};
  }

  .secondary {
    fill: ${props => props.theme.neutral600};
  }
`;

export const IconPresentation = styled(Icon).attrs({
  icon: Icon.PRESENTATION,
})`
  .primary {
    fill: ${props => props.theme.neutral600};
  }

  .secondary {
    fill: ${props => props.theme.neutral200};
  }
`;

export const IconUserCircle = styled(Icon).attrs({
  icon: Icon.USER_CIRCLE,
})`
  .primary {
    fill: ${props => props.theme.neutral200};
  }

  .secondary {
    fill: ${props => props.theme.neutral600};
  }
`;

export const IconUser = styled(Icon).attrs({
  icon: Icon.USER,
})`
  .primary {
    fill: ${props => props.theme.neutral200};
  }

  .secondary {
    fill: ${props => props.theme.neutral600};
  }
`;

export const IconCog = styled(Icon).attrs({
  icon: Icon.COG,
})`
  .primary {
    fill: ${props => props.theme.neutral200};
  }

  .secondary {
    fill: ${props => props.theme.neutral600};
  }
`;
