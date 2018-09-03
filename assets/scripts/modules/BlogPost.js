export default class BlogPost {
  constructor(title, date, body) {
    this.title = title;
    this.date = date;
    this.body = body;
  }
  getFormattedDate() {
    let newDate = new Date(this.date);
    let formattedDate = "";
    formattedDate +=
      (newDate.getUTCMonth() + 1).toString().length === 2
        ? `${newDate.getMonth() + 1}.`
        : `0${newDate.getMonth() + 1}.`;
    formattedDate +=
      newDate.getDate().toString().length === 2
        ? `${newDate.getDate()}.`
        : `0${newDate.getDate()}.`;
    formattedDate += newDate.getFullYear();
    return formattedDate;
  }
}
