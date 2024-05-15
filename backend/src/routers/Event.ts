import { Hono } from "hono";

export const eventRouter = new Hono();

eventRouter.post('/create-event', async(c)=>{
    return c.text('create-event')
})

eventRouter.put('/:id', async(c)=>{
    return c.text('update-event')
})

eventRouter.get('/get-events', async(c)=>{
    return c.text('gets-event')
})

eventRouter.delete('/:id', async(c)=>{
    return c.text('delete-event')
})

eventRouter.get('/:id', async(c)=>{
    return c.text('specific-event')
})