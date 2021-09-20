import fastify from 'fastify';
import FastifySwagger from 'fastify-swagger';
import FCors from 'fastify-cors';
import Swagger from "../config/swagger";
import PostRoutes from "../routes/postRoutes";
import db from "../config/db";

const PORT = process.env.PORT || 3001;
const app = fastify({
  logger: true
})
app.register(db);
app.register(FCors);
app.register(FastifySwagger, Swagger.options)
app.register(PostRoutes);
//app.register(FastifySwagger, swagger.options)

const start = async () => {
  try {
    await app.listen(PORT)
    app.swagger();
    app.log.info(`listening on ${app.server.address().port}`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start();