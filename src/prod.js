import fastify from 'fastify';
import Routes from "../routes/postRoutes";
import db from "../config/db";

const PORT = process.env.PORT || 3001;
const app = fastify({
  logger: true
})

app.register(db);
app.get("/", async () => {
  return {
    Message: "its running on prod"
  }
});

app.get("/test", async () => {
  return {
    Message: "is On Fireffdfffd"
  }
});

const start = async () => {
  try {
    await app.listen(PORT)
    app.log.info(`server listening on ${app.server.address().port}`)
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}
start();