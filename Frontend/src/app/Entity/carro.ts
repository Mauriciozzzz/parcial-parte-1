import { Categoria } from "./categoria";
import { Usuario } from "./usuario";

export class Carro {
    id!: number;
    marca!: string;
    modelo!: string;
    placa!: string;
    color!: string;
    categoriaId!: Categoria | null;
    usuarioId!: Usuario | null;
}
