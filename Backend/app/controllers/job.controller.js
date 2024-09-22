// CONTROLLERS: manejan las solicitudes HTTP, reciben las request y emiten la respuesta
const jobService = require("../services/job.service.js");
 // EXPRESS-ASYNC-HANDLER captura los errores generados en operaciones asíncronas y los pasa al midleware de express
 // no es necesario utilizar los try ... catch
const asyncHandler = require('express-async-handler');

const createJob = asyncHandler(async (req, res) => {
    const newJob = await jobService.createJob(req.body);

    return res.status(201).json(newJob)
});

const findOneJob = asyncHandler(async (req, res) => {
    const job = await jobService.findOneJob(req.params);

    return res.status(200).json({job: job});
});

const findAllJobs = asyncHandler(async (req, res) => {
    const jobs = await jobService.findAllJobs();

    return res.status(200).json({jobs: jobs});
});

const getJobsByCategory = asyncHandler(async (req, res) => {
    const jobs = await jobService.getJobsByCategory(req.params);

    return res.status(200).json({jobs: jobs});
});

const updateJob = asyncHandler(async (req, res) => {
    const updatedJob = await jobService.updateJob(req.params, req.body);

    res.status(200).json(updatedJob);
})

const deleteOneJob = asyncHandler(async (req, res) => {
    const result = await jobService.deleteOneJob(req.params);

    return res.status(200).json(result);
})

module.exports = {
    createJob,
    findOneJob,
    findAllJobs,
    updateJob,
    getJobsByCategory,
    deleteOneJob
}