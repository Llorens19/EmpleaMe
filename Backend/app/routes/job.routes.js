module.exports = (app) => {

    const { createJob, findAllJobs, findOneJob, updateJob, deleteOneJob } = require('../controllers/job.controller.js');

    app.post('/job', createJob);

    app.get('/job', findAllJobs);

    app.get('/job/:slug', findOneJob);

    app.put('/job/:slug', updateJob);

    app.delete('/job/:slug', deleteOneJob);


}