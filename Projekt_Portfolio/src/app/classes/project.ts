export class Project {
    public name: string;
    public description: string;
    public image: string;
    public file: string;
    public detaildescription: string;

    constructor(name: string, description: string, detaildescription: string, image: string, file: string) {
        this.name = name;
        this.description = description;
        this.detaildescription = detaildescription;
        this.image = image;
        this.file = file;
    }
}