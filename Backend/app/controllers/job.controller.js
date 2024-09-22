const Job = require('../models/job.model.js');
const Category = require('../models/category.model.js');
// const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');

const createJob = asyncHandler(async (req, res) => {
    const { name, description, salary, images, img, id_cat } = req.body;

    const jobData = {
        name: name || null,
        description: description || null,
        salary: salary || null,
        images: images,
        img: img || null,
        id_cat: id_cat || null,
    };

    const category = await Category.findOne({ id_cat });
    if (!category) {
        res.status(400).json({ message: "No se ha encontrado la categoría" });
    }

    const job = await new Job(jobData);
    await job.save();

    if (!job) { //si no se crea el trabajo
        res.status(400).json({ message: "No se ha creado el trabajo" });
    }
    await category.addJob(job._id); //añadir trabajo a la categoría

    return res.status(200).json({
        job: await job.toJobResponse()
    })
});

const findOneJob = asyncHandler(async (req, res) => {
    const job = await Job.findOne(req.params);

    if (!job) {
        return res.status(401).json({
            message: "No se ha encontrado este trabajo"
        })
    }

    return res.status(200).json({
        job: await job.toJobResponse()
    })

});

const findAllJobs = asyncHandler(async (req, res) => {
    const jobs = await Job.find();

    if (!jobs) {
        return res.status(401).json({
            message: "No se ha encontrado ningún trabajo"
        })
    }

    return res.status(200).json({
        jobs: await Promise.all(jobs.map(async jobs => {
            return await jobs.toJobResponse()
        }))
    });
});

const getJobsByCategory = asyncHandler(async (req, res) => {

    const category = await Category.findOne(req.params);

    if (!category) {
        res.status(400).json({
            message: "Categoría no encontrada"
        });
    } else {
        return await res.status(200).json({
            jobs: await Promise.all(category.jobs.map(async jobId => {
                const jobObj = await Job.findById(jobId);
                return await jobObj.toJobResponse();
            }))
        })
    }
});

const updateJob = asyncHandler(async (req, res) => {
    const job = await Job.findOne(req.params)

    if (!job) {
        return res.json({
            message: "No existe este trabajo"
        })
    }

    const { name, salary, description, img, images } = req.body;

    job.name = name || job.name;
    job.salary = salary || job.salary;
    job.description = description || job.description;
    job.img = img || job.img;
    job.images = images || job.images;

    const updated_job = await job.save();
    return res.status(200).json({
        message: "Trabajo actualizado"
    });
})

const deleteOneJob = asyncHandler(async (req, res) => {
    const job = await Job.findOne(req.params);

    if (!job) {
        return res.status(401).json({
            message: "Este trabajo no existe"
        })
    }

    const id_cat = job.id_cat
    const category = await Category.findOne({id_cat});

    if (category) {
        await category.removeJob(job._id) // especificado en category.model.js
    }

    await Job.deleteOne(req.params);
    return res.status(200).json({
        message: "Trabajo eliminado"
    });
})

module.exports = {
    createJob,
    findOneJob,
    findAllJobs,
    updateJob,
    getJobsByCategory,
    deleteOneJob
}