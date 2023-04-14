import Member from "./Members";

export default class Project {
    id!: number;
    name!: string;
    description!: string;
    members!: Member;
    qtdActivies!: number;
    qtdActiviesCompleted!: number

    constructor(id: number, name: string, description: string, members: Member, qtdActivies: number,
        qtdActiviesCompleted: number) {
        this.id = id,
            this.name = name,
            this.description = description,
            this.members = members,
            this.qtdActivies = qtdActivies,
            this.qtdActiviesCompleted = qtdActiviesCompleted
    }

}