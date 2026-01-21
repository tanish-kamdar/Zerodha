const z=require('zod');

const existingUserSchema = z
  .object({
    contact : z.string()
    .nonempty({
        message : 'EmailID / Phone Number is required'
    })
    .refine((val)=>(
         /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(val) || /^[0-9]{10}$/.test(val)
    ),{
        message : 'Enter a valid email or 10 digit phone number'
    })
    ,
    password: z
      .string()
      .nonempty({
        message: "Password is required",
      })
      .min(6, {
        message: "Password must be at least 6 characters long",
      })
  })


module.exports= existingUserSchema;
