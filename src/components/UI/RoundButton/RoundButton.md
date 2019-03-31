# RoundButton

A special kind of button. It was designed originally to be used in the actions
bar inside the Board.

### Usage

```js
import { RoundButton } from 'components/UI';

<RoundButton iconBefore={<IconCheveronDown />} iconAfter={<IconUserCircle />}>
  Standup
</RoundButton>;
```

<!-- STORY -->

### Props

| Props        | propType | defaultValue | isRequired |
| ------------ | -------- | ------------ | ---------- |
| `loading`    | boolean  | `false`      |            |
| `disabled`   | boolean  | `false`      |            |
| `children`   | node     | `null`       |            |
| `iconBefore` | element  | `null`       |            |
| `iconAfter`  | element  | `null`       |            |

loading, disabled, iconBefore, iconAfter, children
