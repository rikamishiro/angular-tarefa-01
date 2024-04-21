import { Naipe } from "./naipe";
import { Valor } from "./valor";

export class Carta {
  constructor(
    public valor: Valor,
    public naipe: Naipe
  ) {}
}
