import fastifyPlugin from 'fastify-plugin';
import mongoose from 'mongoose';

const dbConnector = async (fastify, options) => {
    try {
        const url = "mongodb://localhost:27017/msrt"
        const db = await mongoose
            .connect(url, {
                useNewUrlParser: true
            })
        console.log("Database is connected")
        fastify.decorate('mongo', db)
    } catch (err) {
        console.log(err)
    }
}
export default fastifyPlugin(dbConnector)