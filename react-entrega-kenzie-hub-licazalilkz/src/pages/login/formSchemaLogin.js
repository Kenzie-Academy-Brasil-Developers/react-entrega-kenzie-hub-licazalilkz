import {z} from "zod";


export const loginSchema = z.object({
    email: z.string().email().nonempty({message: "Campo Obrigatorio"}),
    password: z.string().nonempty({message: "Senha é obrigatória"}),
});