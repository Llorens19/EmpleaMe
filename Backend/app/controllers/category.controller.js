const Category = require("../models/category.model.js");
const asyncHandler = require('express-async-handler');

const createCategory = asyncHandler(async (req, res) => {

    const attributes = req.body;

    const category_data = {  //montamos el objeto con los datos que vienen en el body

        id_cat: attributes.id_cat || null,
        category_name: attributes.category_name || null,
        image: attributes.image || null,
        products: []
    };

    const category = await new Category(category_data); //creamos un nuevo objeto de tipo Category
    const new_category = await category.save(); //guardamos el objeto en la base de datos
    res.json(new_category); //devolvemos el objeto guardado
});

const findAllCategories = asyncHandler(async (req, res) => {
    const categories = await Category.find();

    if (!categories) {
        return res.status(401).json({
            message: "No se encontraron categorías"
        })
    }

    return res.status(200).json({
        categories: await Promise.all(categories.map(async categories => {
            return await categories.toCategoryResponse()
        }))
    });
});

const findOneCategory = asyncHandler(async (req, res) => {

    const categories = await Category.findOne(req.params)
    console.log(req.params.slug); //obtenemos el slug de la URL


    if (!categories) {
        return res.status(401).json({
            message: "Categoría no encontrada"
        })
    }
    return res.status(200).json({
        categories: await categories.toCategoryResponse() //devolvemos el objeto en formato JSON
    })
});

const updateCategory = asyncHandler(async (req, res) => {
    const category = await Category.findOne(req.params); //buscamos el objeto en la base de datos
    console.log(req.params.slug);

    if (!category) {
        return res.status(401).json({
            message: "Categoría no encontrada"
        })
    }

    const { id_cat, category_name, image, jobs } = req.body;

    category.id_cat = id_cat || category.id_cat;
    category.category_name = category_name || category.category_name;
    category.image = image || category.image;
    category.jobs = jobs || category.jobs;

    const updated_category = await category.save();
    res.json(updated_category);
});

const deleteOneCategory = asyncHandler(async (req, res) => {
    const category = await Category.findOne(req.params); //buscamos el objeto en la base de datos
    console.log(req.params.slug);
    console.log(category);

    if (!category) {
        return res.status(401).json({
            message: "Categoría no encontrada"
        })
    }

    await Category.findOneAndDelete(req.params); //borramos el objeto de la base de datos
    res.json({
        message: "Categoría eliminada"
    });
});

module.exports = {
    createCategory,
    findAllCategories,
    findOneCategory,
    updateCategory,
    deleteOneCategory
}