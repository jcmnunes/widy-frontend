import uuidv4 from 'uuid/v4';

export default () => ({
  suggestions: [
    {
      key: uuidv4(),
      value: {
        h: 0,
        min: 15,
      },
    },
    {
      key: uuidv4(),
      value: {
        h: 0,
        min: 30,
      },
    },
    {
      key: uuidv4(),
      value: {
        h: 0,
        min: 45,
      },
    },
    {
      key: uuidv4(),
      value: {
        h: 1,
        min: 0,
      },
    },
    {
      key: uuidv4(),
      value: {
        h: 1,
        min: 30,
      },
    },
    {
      key: uuidv4(),
      value: {
        h: 2,
        min: 0,
      },
    },
    {
      key: uuidv4(),
      value: {
        h: 2,
        min: 30,
      },
    },
    {
      key: uuidv4(),
      value: {
        h: 3,
        min: 0,
      },
    },
    {
      key: uuidv4(),
      value: {
        h: 4,
        min: 0,
      },
    },
    {
      key: uuidv4(),
      value: {
        h: 5,
        min: 0,
      },
    },
  ],
});
