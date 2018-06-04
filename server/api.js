// server/api.js
/*
 |--------------------------------------
 | Dependencies
 |--------------------------------------
 */

const jwt = require('express-jwt');
const jwks = require('jwks-rsa');
const Task = require('./models/Task');
/*
 |--------------------------------------
 | Authentication Middleware
 |--------------------------------------
 */

module.exports = function(app, config) {
  // Authentication middleware
  const jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: `https://${config.AUTH0_DOMAIN}/.well-known/jwks.json`
    }),
    audience: config.AUTH0_API_AUDIENCE,
    issuer: `https://${config.AUTH0_DOMAIN}/`,
    algorithm: 'RS256'
  });

/*
 |--------------------------------------
 | API Routes
 |--------------------------------------
 */

  // GET API root
  app.get('/api/', (req, res) => {
    res.send('API workssss');
  });

  // GET list of all tasks in the DB (no authentication required)
    app.get('/api/tasks', (req, res) => {
      Task.find((err, tasks) => {
          let tasksArray = [];
          if (err) {
            return res.status(500).send({message: err.message});
          }
          if (tasks) {
            tasks.forEach(task => {
              tasksArray.push(task);
            });
          }
          res.send(tasksArray);
        }
      );
    });

  // GET single task by task ID (no auth required)
  app.get('/api/task/:id', (req, res) => {
    Task.findById(req.params.id, (err, task) => {
      if (err) {
        return res.status(500).send({message: err.message});
      }
      if (!task) {
        return res.status(400).send({message: 'Task not found.'});
      }
      res.send(task);
    });
  });

  // NOT WORKING // GET list of all tasks in the DB (no authentication required)
  //   app.get('/api/tasks', jwtCheck, (req, res) => {
  //     Task.find((err, tasks) => {
  //         let tasksArray = [];
  //         if (err) {
  //           return res.status(500).send({message: err.message});
  //         }
  //         if (tasks) {
  //           tasks.forEach(task => {
  //             tasksArray.push(task);
  //           });
  //         }
  //         res.send(tasksArray);
  //       }
  //     );
  //   });



};
