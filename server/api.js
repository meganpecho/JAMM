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

  // GET all tasks of an individual user given their userId (no authentication required)
    app.get('/api/tasks/:id', (req, res) => {
      Task.find((err, tasks) => {
          let tasksArray = [];
          if (err) {
            return res.status(500).send({message: err.message});
          }
          if (tasks) {
            tasks.forEach(task => {
              if (task.userId == req.params.id ) {
                tasksArray.push(task);
              }
            });
          }
          res.send(tasksArray);
        }
      );
    });

  // POST a new task
    app.post('/api/task/new', (req, res) => {
      Task.findOne({
        name: req.body.name,
        createdAtDate: req.body.createdAtDate}, (err, existingTask) => {
        if (err) {
          return res.status(500).send({message: err.message});
        }
        if (existingTask) {
          return res.status(409).send({message: 'You have already created a task with this title and start time'});
        }
        const task = new Task({
          userId: "userId_will_go_here",
          name: req.body.name,
          description: req.body.description,
          createdAtDate: new Date(),
          completedAtDate: undefined,
          actualTime: 0,
          estimatedTime: req.body.estimatedTime,
          inProgress: false,
          completed: req.body.completed
        });
        task.save((err) => {
          if (err) {
            return res.status(500).send({message: err.message});
          }
          res.send(task);
        });
      });
    });

    // PUT (update) task. Specifically, mark task as "in progress"
    app.put('/api/taskprogress/:id', (req, res) => {
      Task.findById(req.params.id, (err, task) => {
        if (err) {
          return res.status(500).send({message: err.message});
        }
        if (!task) {
          return res.status(400).send({message: 'Task not found'});
        }
        task.inProgress = true;
        task.createdAtDate = new Date();
        task.save(err => {
          if (err) {
            return res.status(500).send({message: err.message});
          }
          res.send(task);
        });
      });
    });

    // PUT (update) task. Specifically, mark task as completed
    app.put('/api/completetask/:id', (req, res) => {
      Task.findById(req.params.id, (err, task) => {
        if (err) {
          return res.status(500).send({message: err.message});
        }
        if (!task) {
          return res.status(400).send({message: 'Task not found'});
        }
        task.completed = true;
        task.completedAtDate = new Date();
        let timeDifference = ((task.completedAtDate - task.createdAtDate) / 60000).toFixed(4)
        task.actualTime = timeDifference;
        task.inProgress = false;
        task.save(err => {
          if (err) {
            return res.status(500).send({message: err.message});
          }
          res.send(task);
        });
      });
    });

};
