export class Event {
  public id: number;
  public title: string;
  public description: string;
  public imageUrl: string;
  public date: string;
  public place: string;

  constructor(id: number, title: string, description: string, imageUrl: string,
             date: string, place: string) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.imageUrl = imageUrl;
    this.date = date;
    this.place = place;
  }
}
