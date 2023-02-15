/**
 * 空オブジェクトか否かを確認
 *
 * @param object
 * @returns {boolean}
 * @see https://stackoverflow.com/a/59787784/19817169
 */
export const isEmptyObject = (object: object) => {
  for (const property in object) {
    if (object.hasOwnProperty(property)) {
      return false;
    }
  }
  return true;
};
