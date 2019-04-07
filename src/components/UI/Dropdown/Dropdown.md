# Dropdown

Render a dropdown menu. Pass the Element that triggers the dropdown in the
`trigger` prop. Pass the dropdown as `children`. Bellow is a typical
implementation using Buttons `intent === dropdown`.

### Usage

```js
import { Dropdown, StyledDropdown } from 'components/UI';

<Dropdown trigger={Trigger} position={position} closeOnAction={closeOnAction}>
  <StyledDropdown>
    <Button intent="dropdown" iconBefore={<IconUser />} block>
      Edit profile
    </Button>
    <Button intent="dropdown" iconBefore={<IconDoorExit />} block>
      Log out
    </Button>
  </StyledDropdown>
</Dropdown>;
```

<!-- STORY -->

### Props

| Props           | propType | defaultValue | isRequired |
| --------------- | -------- | ------------ | ---------- |
| `trigger`       | element  |              | ✅         |
| `children`      | element  |              | ✅         |
| `closeOnAction` | boolean  | `false`      |            |
| `position`      | string   | "position"   |            |
