export class Project {
    public name: string;
    public description: string;
    public image: string;
    public file: string;

    constructor(name: string, description: string, image: string, file: string) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.file = file;
    }
}