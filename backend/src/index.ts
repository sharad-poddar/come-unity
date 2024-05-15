import { Hono } from 'hono';
import { eventRouter } from './routers/Event';
import { userRouter } from './routers/User';

const app = new Hono()

app.get('/', (c) => {
  return c.text('] Hono!')
})

app.route('/community/v1/user',userRouter);
app.route('/community/v1/event', eventRouter);

export default app
