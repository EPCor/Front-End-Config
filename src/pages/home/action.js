export const SOME_ACTION = Symbol('SOME_ACTION');

export function updateData(data) {
  return {
    type: SOME_ACTION,
    data,
  };
}
