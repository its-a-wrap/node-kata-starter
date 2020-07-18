export class CommentSanitiser {
  constructor() {
    this.badWords = ['crap', 'idiot'];
  }

  sanitise(inputString) {
    let returnString = inputString;

    this.badWords.forEach((word) => {
      const badWordRegEx = new RegExp(word, 'ig');
      returnString = returnString.replace(badWordRegEx, '*'.repeat(word.length));
    });

    const emailRegEx = new RegExp(/\S+@\S+\.\S+\w/, 'g');
    returnString = returnString.replace(emailRegEx, '<email address>');

    const phoneNumberRegex = new RegExp(/0+7\d{9}/, 'g');
    returnString = returnString.replace(phoneNumberRegex, '<phone number>');

    return returnString;
  }
}
