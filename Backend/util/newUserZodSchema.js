const z=require('zod');

const newUserSchema = z
  .object({
    fullName: z.string().min(1, {
      message: "Full name is required",
    }),
    email: z
      .string()
      .nonempty({
        message: "Email is required",
      })
      .email({ message: "Invalid email address" }),
    phoneNumber: z
      .number()
      .refine((val) => val >= 1000000000 && val <= 9999999999, {
        message: "Invalid phone number",
      }),
    password: z
      .string()
      .nonempty({
        message: "Password is required",
      })
      .min(6, {
        message: "Password must be at least 6 characters long",
      }),
    confirmPassword: z.string().nonempty({
      message: "Please confirm your password",
    }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

module.exports= newUserSchema;
