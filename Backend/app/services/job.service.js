// SERVICES: toda la lógica de negocio
const jobRepo = require('../repositories/job.repo.js');
const categoryRepo = require('../repositories/category.repo.js');

const createJob = async (data) => {
    const job_data = {
        name: data.name || null,
        description: data.description || null,
        salary: data.salary || null,
        images: data.images,
        img: data.img || null,
        id_cat: data.id_cat || null,
    };

    const id_cat = data.id_cat;
    const category = await categoryRepo.findOneCategory({id_cat});

    if (!category) {
        return { message: "Categoria no encontrada" };
    }

    const newJob = await jobRepo.createJob(job_data);

    if (!newJob) { //si no se crea el trabajo
        return { message: "No se ha creado el trabajo" };
    }

    await category.addJob(newJob._id); //añadir trabajo a la categoría
    return await newJob.toJobResponse();
};

const findOneJob = async (params) => {
    const job = await jobRepo.findOneJob(params);

    if (!job) {
        return { message: "Trabajo no encontrado" };
    }

    return await job.toJobResponse();
};

const findAllJobs = async () => {
    const jobs = await jobRepo.findAllJobs();

    if (!jobs) {
        return { message: "No se encontraron trabajos" };
    }

    return await Promise.all(jobs.map(async job => {
        return await job.toJobResponse();
    }));
};

const getJobsByCategory = async (params) => {
    const category = await categoryRepo.findOneCategory(params);

    if (!category) {
        return { message: "Categoria no encontrada" };
    }

    return await Promise.all(category.jobs.map(async jobId => {
        const jobObj = await jobRepo.getJobsByCategory(jobId);
        return await jobObj.toJobResponse();
    }))
};

const updateJob = async (params, data) => {
    const updatedJob = await jobRepo.updateJob(params, data);

    if (!updatedJob) {
        return { message: "Trabajo no encontrado" };
    }

    return await updatedJob.toJobResponse();
};

const deleteOneJob = async (params) => {
    const job = await jobRepo.findOneJob(params);

    if (!job) {
        return { message: "Trabajo no encontrado" };
    }

    const id_cat = job.id_cat;
    const category = await categoryRepo.findOneCategory({id_cat});

    if (category) {
        await category.removeJob(job._id) // metodo en category.model.js, elimina trabajo del array de categoria
    }

    await jobRepo.deleteOneJob(params);
    return { message: "Trabajo eliminado" };
};

module.exports = {
    createJob,
    findOneJob,
    findAllJobs,
    updateJob,
    getJobsByCategory,
    deleteOneJob
}