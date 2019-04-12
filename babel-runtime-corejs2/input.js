
const obj = {
  a: 1,
  b: 2,
};

const { b, ...rest } = obj;
const newObj = {...rest, a: b };