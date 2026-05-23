export class Project {
    public name: string;
    public description: string;
    public image: string;
    public video: string;
    public file: string;
    public detaildescription: string;

    constructor(name: string, description: string, detaildescription: string, image: string, video: string, file: string) {
        this.name = name;
        this.description = description;
        this.detaildescription = detaildescription;
        this.image = image;
        this.video = video;
        this.file = file;
    }
}