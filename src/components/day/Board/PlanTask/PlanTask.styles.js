import styled from 'styled-components/macro';
import { IconRightThickArrow } from '../../../../icons/Icons';
import Icon from '../../../../icons/Icon';

const getTaskBackground = props => {
  if (props.isDragging) return props.theme.blue050;
  if (props.isSelected) return props.theme.neutral075;
  return 'white';
};

export const Actions = styled.div`
  height: 24px;

  & > * {
    cursor: pointer;
    margin-left: 8px;
  }
`;

export const StyledIconRightThickArrow = styled(IconRightThickArrow)`
  flex-shrink: 0;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
`;

export const Title = styled.span`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-right: 16px;
  flex: 1;
  width: 0;
`;

export const StyledPlanTask = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  border: none;
  background: ${props => getTaskBackground(props)};
  padding: 8px;
  font-size: 16px;
  margin: 0;
  color: ${props => props.theme.neutral700};
  cursor: pointer;

  ${Actions} {
    display: ${props => (props.isSelected ? 'flex' : 'none')};
  }

  &:hover {
    background: ${props => (props.isSelected ? props.neutral075 : props.theme.neutral050)};

    & ${Actions} {
      display: flex;
    }
  }
`;

// primaryColor={trash ? theme.neutral400 : theme.neutral300}
// secondaryColor={trash ? theme.neutral300 : theme.neutral200}

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

export const IconEdit = styled(Icon).attrs({
  icon: Icon.EDIT,
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

export const IconLaunch = styled(Icon).attrs({
  icon: Icon.LAUNCH,
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

export const IconTrash = styled(Icon).attrs({
  icon: Icon.TRASH,
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
