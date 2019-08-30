import styled from 'styled-components/macro';
import Icon from '../../../../icons/Icon';

export const StyledTaskMenu = styled.div`
  height: 24px;
  cursor: pointer;
`;

export const StyledTrigger = styled.button`
  height: 24px;
`;

export const IconDotsHorizontal = styled(Icon).attrs({
  icon: Icon.DOTS_HORIZONTAL,
})`
  .primary {
    fill: ${props => props.theme.neutral500};
  }
`;

export const IconTime = styled(Icon).attrs({
  icon: Icon.TIME,
})`
  .primary {
    fill: ${props => props.theme.neutral200};
  }

  .secondary {
    fill: ${props => props.theme.neutral300};
  }
`;

export const IconEdit = styled(Icon).attrs({
  icon: Icon.EDIT,
})`
  .primary {
    fill: ${props => props.theme.neutral300};
  }

  .secondary {
    fill: ${props => props.theme.neutral200};
  }
`;

export const IconTrash = styled(Icon).attrs({
  icon: Icon.TRASH,
})`
  .primary {
    fill: ${props => props.theme.neutral300};
  }

  .secondary {
    fill: ${props => props.theme.neutral200};
  }
`;
