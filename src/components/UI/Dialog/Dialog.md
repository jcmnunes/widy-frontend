# Dialog

Renders a dialog window.

### Usage

```js
import { DialogReadme } from 'components/UI';

const actions = [
  {
    name: 'Cancel',
    intent: 'secondary',
    action: () => console.log('Cancel action'),
  },
  {
    name: 'Delete',
    intent: 'error',
    action: () => console.log('Delete action'),
  },
];

<DialogReadme actions={actions} handleClose={handleClose}>
  Lorem ipsum dolor?
</DialogReadme>;
```

<!-- STORY -->

### Props

| Props         | propType | defaultValue | isRequired |
| ------------- | -------- | ------------ | ---------- |
| `actions`     | array    |              | ✅         |
| `children`    | string   |              | ✅         |
| `handleClose` | function |              | ✅         |
