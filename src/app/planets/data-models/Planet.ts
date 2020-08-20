export interface IPlanet {
  name: string;
  description: string;
  image: string;
  region: string;
  species: string;
  system: string;
}

export class Planet {
  name: string;
  description: string;
  imageUrl: string;
  region: string;
  speciesCount: number;
  system: string;

  constructor(options: IPlanet) {
    if (options.name) { this.name = options.name; }
    if (options.description) { this.description = options.description; }
    if (options.image) { this.imageUrl = options.image; }
    if (options.region) { this.region = options.region; }
    if (options.species) { this.speciesCount = +options.species; }
    if (options.system) { this.system = options.system; }
  }


}

