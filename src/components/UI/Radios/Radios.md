# Radios

Renders a list of Radio buttons.

### Usage

```js
import { Radios } from 'components/UI';

const RadiosExample = () => {
  const [checkedId, setCheckedId] = useState('');

  const onChange = e => {
    const { value } = e.target;
    setCheckedId(value);
  };

  return (
    <Radios
      checkedId={checkedId}
      data={[{ id: '1', label: 'Radio #3' }, { id: '2', label: 'Radio #2' }]}
      onChange={onChange}
    />
  );
};
```

<!-- STORY -->

### Props

| Props       | propType | defaultValue | isRequired |
| ----------- | -------- | ------------ | ---------- |
| `checkedId` | string   | ''           | ✅         |
| `intent`    | string   |              |            |
