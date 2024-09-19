const Job = require('../models/job.model.js');
const Category = require('../models/category.model.js');
const mongoose = require('mongoose');
const asyncHandler = require('express-async-handler');

//create
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

    const category = await Category.findOne({ id_cat }).exec();
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
        job: await job.toProductResponse()
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
        job: await job.toProductResponse()
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
        job: await Promise.all(jobs.map(async jobs => {
            return await jobs.toJobResponse()
        }))
    });
});

const updateJob = asyncHandler(async (req, res) => {
    const job = await Job.findOne(req.params)

    if (!job) {
        return res.json({
            message: "No existe este trabajo"
        })
    }

    const { name, salary, description, id_cat, img, images } = req.body;

    job.name = name || job.name;
    job.salary = salary || job.salary;
    job.description = description || job.description;
    job.id_cat = id_cat || job.id_cat;
    job.img = img || job.img;
    job.images = images || job.images;


    const updated_job = await job.save();

    res.json({ updated_job })
})


const deleteOneJob = asyncHandler(async (req, res) => {
    const job = await Job.findOne(req.params);

    if (!job) {
        return res.status(401).json({
            message: "Este trabajo no existe"
        })
    }
    await Job.findOneAndDelete(req.params);
    res.json({
        message: "Tramajo eliminado"
    })

})


module.exports = {
    createJob,
    findOneJob,
    findAllJobs,
    updateJob,
    deleteOneJob
}