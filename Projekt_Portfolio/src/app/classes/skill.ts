export class Skill {
    public name: string;
    public description: string;
    public image: string;
    public level: string;

    constructor(name: string, description: string, image: string, level: string) {
        this.name = name;
        this.description = description;
        this.image = image;
        this.level = level;
    }
}