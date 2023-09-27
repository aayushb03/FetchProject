export class Model {
    constructor(data? : any) {
        this.breeds = Object.keys(data.message);
        this.subBreeds = {};
        for (const breed of this.breeds) {
            this.subBreeds[breed] = data.message[breed];
        }
    }

    breeds: string[];
    subBreeds: { [key: string]: string[] };
}