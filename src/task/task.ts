export class Task {

    private title: string;
    private description: string;
    private date: Date;

    constructor(title: string, description: string, date: Date){
        this.title = title;
        this.description = description;
        this.date = date;
    }

}
