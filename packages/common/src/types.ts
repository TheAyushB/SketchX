import { z } from "zod";

const minLength3 = z.string().min(3, "Must be at least 3 characters long");
const maxLength20 = z.string().max(20, "Must be at most 20 characters long");

export const UsernameSchema = minLength3.and(maxLength20);

export const CreateUserSchema = z.object({
    username: UsernameSchema,
    password: z.string(),
    name: UsernameSchema,
});

export const SigninSchema = z.object({
    username: UsernameSchema,
    password: z.string(),
});

export const CreateRoomSchema = z.object({
    name: UsernameSchema,
});