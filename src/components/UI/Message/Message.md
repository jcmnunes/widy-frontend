# Message

Use it to display messages to the user. Useful in forms, errors, deprecation
warnings, etc...

### Usage

```js
import { Message } from 'components/misc';

<Message intent="error">
  Integer posuere erat a ante venenatis dapibus posuere velit aliquet.
</Message>;
```

<!-- STORY -->

### Props

| Props      | propType | defaultValue | isRequired |
| ---------- | -------- | ------------ | ---------- |
| `intent`   | string   | "secondary"  |            |
| `children` | node     |              | ✅         |
