# Link

Use it for tertiary actions and for links (both internal and external). In fact,
Link can render 3 different components:

- ➜ `<button>`
- ➜ `<Link>` (react-router)
- ➜ `<a>`

The type of component that gets rendered is controlled by the `to` prop:

| prop `to` value          | component that gets rendered |
| ------------------------ | ---------------------------- |
| _falsy_                  | `<button>`                   |
| URLs that start with `/` | `<Link>` (react-router)      |
| All other URLs           | `<a>`                        |

### Usage

```js
import { Link } from 'components/misc';

<Link to="/forgot">Forgot Password?</Link>;
```

<!-- STORY -->

### Props

| Props      | propType | defaultValue | isRequired |
| ---------- | -------- | ------------ | ---------- |
| `children` | node     |              | ✅         |
| `to`       | string   | "secondary"  |            |
| `intent`   | string   | null         |            |
| `onClick`  | function | null         |            |
| `disabled` | boolean  | false        |            |

**Note**:

- ➜ Link will render a tertiary button if the prop `to` is falsy.
- ➜ Link will render a react-router `<Link />`component for internal links and a
  standard anchor tag for external links.
- ➜ Internal links should always start with a forward slash `/`
- ➜ All external links will open in a new tab
