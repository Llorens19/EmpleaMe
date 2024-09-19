module.exports = (app) => {
    const { createCaregory, findOneCaregory, findAllCaregory, updateCaregory, deleteCategory } = require('../controllers/category.controller.js');

    app.post('/categories', createCaregory);

    app.get('/categories/:slug', findOneCaregory);

    app.get('/categories', findAllCaregory);

    app.put('/categories/:slug', updateCaregory);

    app.delete('/categories/:slug', deleteCategory);

}