import {z} from "zod";


export const registerSchema = z.object({
    name: z.string().nonempty("Campo Obrigatorio"),
    email: z.string().email().nonempty("Campo Obrigatorio"),
    bio: z.string().nonempty("Campo Obrigatorio"),
    contact: z.string().nonempty("Campo Obrigatorio"),
    course_module: z.string().nonempty("Campo Obrigatorio"),
    password: z
        .string()
        .nonempty("Senha é obrigatória")
        .min(8, "É necessário pelo menos oito caracteres.")
        .regex(/(?=.*?[A-Z])/, "É necessário pelo menos uma letra maiúscula")
        .regex(/(?=.*?[a-z])/, "É necessário pelo menos uma letra minúscula")
        .regex(/(?=.*?[0-9])/, "É necessário pelo menos um número."),
    confirmPassword: z.string(),
}).refine(({password, confirmPassword}) => 
    password === confirmPassword, 
    { message: "As senhas não se coincidem !",
    path: ["confirmPassword"]
    }
);