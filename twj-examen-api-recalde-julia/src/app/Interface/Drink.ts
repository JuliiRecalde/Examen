export interface DrinkInterface {
  id: number;
  name: string;
  tagline: string;
  description: string;
  first_brewed: Date;
  imagenURL?:string

  ingredients: string[];
}
