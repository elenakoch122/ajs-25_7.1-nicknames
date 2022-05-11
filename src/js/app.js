export default class Validator {
  static validateUsername(name) {
    if (/\d{4,}/.test(name)) {
      return false;
    }
    return /^[a-z]+[-_\da-z]*[a-z]+$/i.test(name);
  }
}
