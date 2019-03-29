# Testing Button readme

### Usage

```js
import { Button } from 'components/misc';
```

<!-- STORY -->

### Props

Accepts all the typical `<button>` props, like:

- `onClick` - click callback (function)
- `disabled` - disabled state of the button (boolean)
- `type` - button's type, for instance, `type="submit"` (string)

Besides, it accepts the following custom props:

| Props        | propType | defaultValue | isRequired |
| ------------ | -------- | ------------ | ---------- |
| `intent`     | string   | "secondary"  |            |
| `size`       | string   | "medium"     |            |
| `loading`    | boolean  | false        |            |
| `iconBefore` | element  | false        |            |
| `iconAfter`  | element  | false        |            |

**Note**:

- The prop `disabled` will be set to false when passing prop `loading` as true
  (every button in a loading state must be also disabled).
