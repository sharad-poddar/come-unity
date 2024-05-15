import { Hono } from "hono";

export const userRouter = new Hono();

userRouter.post('/sing-up', async(c)=>{
    return c.text('sing-up')
})

userRouter.post('/sing-in', async(c)=>{
    return c.text('sign-in')
})
