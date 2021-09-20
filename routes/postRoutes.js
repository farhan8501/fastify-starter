import { GetAllPost, GetSinglePost, AddNewPost, UpdatePost, DeletePost } from '../controllers/blogController';

const GetSinglePostOpt = {
    schema: {
        params: {
          type: 'object',
          required: ['id'],
          additionalProperties: false,
          properties: {
            id: {
              type: 'string'
            }
          }
        }
      },
      handler: GetSinglePost
}

// fastify.route( {
//     method: "GET",
//     url: "/employees/:userId",
//     schema: {
//       querystring: {
//         userId: { type: "string" }
//       }
//     },
//     preHandler: async ( request, reply ) => {
//       return jwtVerifier( request, reply );
//     },
//     handler: async ( request, reply ) => {
//       const obj = JSON.parse( await readFile( "sample-data.json", "utf8" ) );
//       const employee = obj.Employees.find( r => r.userId === request.params.userId );
  
//       if ( !employee )
//         return reply.code( 404 ).send();
  
//       return employee;
//     }
//   } );
const PostRoutes = (fastify, options, done) => {
    fastify.get('/api/posts', GetAllPost);
    fastify.get('/api/post/:id', GetSinglePostOpt);
    fastify.post('/api/post', AddNewPost);
    fastify.put('/api/post/:id', UpdatePost);
    fastify.delete('/api/post/:id', DeletePost);
    done();
};

export default PostRoutes;