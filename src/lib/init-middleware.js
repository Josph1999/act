// lib/init-middleware.js
import Cors from 'cors';

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function initMiddleware(middleware) {
  return (req, res) =>
    new Promise((resolve, reject) => {
      middleware(req, res, (result) => {
        if (result instanceof Error) {
          return reject(result);
        }
        return resolve(result);
      });
    });
}

// Initialize the cors middleware
const cors = initMiddleware(
  Cors({
    // Only allow requests with these methods
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    origin: '*', // Replace '*' with the origin you want to allow
  })
);

export default cors;