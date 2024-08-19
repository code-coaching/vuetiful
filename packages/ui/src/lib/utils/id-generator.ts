let id = 0;
export const idGenerator = (prefix = 'vuetiful') => {
  return `${prefix}-${id++}`;
}