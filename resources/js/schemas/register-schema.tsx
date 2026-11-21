import * as z from 'zod';

export const registerSchema = z
    .object({
        school_name: z
            .string()
            .min(2, 'School name must be at least 2 characters')
            .max(200, 'School name must not exceed 200 characters')
            .trim(),

        udise_no: z
            .string()
            .length(11, 'UDISE number must be exactly 11 digits')
            .regex(/^\d{11}$/, 'UDISE number must contain only digits')
            .trim(),

        principal_name: z
            .string()
            .min(2, "Principal's name must be at least 2 characters")
            .max(100, "Principal's name must not exceed 100 characters")
            .trim(),

        principal_email: z
            .string()
            .email('Invalid email address')
            .toLowerCase()
            .trim(),

        school_email: z
            .string()
            .email('Invalid school email address')
            .toLowerCase()
            .trim(),

        school_phone: z
            .string()
            .min(10, 'Phone number must be at least 10 digits')
            .max(15, 'Phone number must not exceed 15 digits')
            .regex(/^\+?[\d\s-()]+$/, 'Invalid phone number format')
            .trim(),

        district: z
            .string()
            .min(2, 'District must be at least 2 characters')
            .max(100, 'District must not exceed 100 characters')
            .trim(),

        state: z.string().min(1, "State is required"),

        city: z
            .string()
            .min(2, 'City must be at least 2 characters')
            .max(100, 'City must not exceed 100 characters')
            .trim(),

        teacher_name: z
            .string()
            .min(2, "Coordinator's name must be at least 2 characters")
            .max(100, "Coordinator's name must not exceed 100 characters")
            .trim(),

        teacher_email: z
            .string()
            .email('Invalid email address')
            .toLowerCase()
            .trim(),

        teacher_phone: z
            .string()
            .min(10, 'Phone number must be at least 10 digits')
            .max(15, 'Phone number must not exceed 15 digits')
            .regex(/^\+?[\d\s-()]+$/, 'Invalid phone number format')
            .trim(),

        password: z
            .string()
            .min(8, 'Password must be at least 8 characters')
            .max(100, 'Password must not exceed 100 characters')
            .regex(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                'Password must contain at least one uppercase letter, one lowercase letter, and one number',
            ),

        password_confirmation: z
            .string()
            .min(8, 'Please confirm your password'),

        terms_accepted: z.boolean().refine((val) => val === true, {
            message: 'You must accept this term to continue',
        }),
    })
    .refine((data) => data.password === data.password_confirmation, {
        message: "Passwords don't match",
        path: ['password_confirmation'],
    });

export type RegisterFormValues = z.infer<typeof registerSchema>;