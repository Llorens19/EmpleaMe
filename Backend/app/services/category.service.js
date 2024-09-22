// SERVICES: toda la lógica de negocio
const categoryRepo = require("../repositories/category.repo.js");

const createCategory = async (data) => {
    //montamos el objeto con los datos que vienen en el body
    const category_data = {
        id_cat: data.id_cat || null,
        category_name: data.category_name || null,
        image: data.image || null,
        jobs: []
    };

    return await categoryRepo.createCategory(category_data);
};

const findAllCategories = async () => {
    const categories = await categoryRepo.findAllCategories();

    if (!categories) {
        return { message: "No se encontraron categorías" };
    }

    return await Promise.all(categories.map(async category => {
            return await category.toCategoryResponse();
        }));
};

const findOneCategory = async (params) => {
    const category = await categoryRepo.findOneCategory(params);

    if (!category) {
        return { message: "Categoría no encontrada" };
    }

    return await category.toCategoryResponse();
};

const updateCategory = async (params, data) => {
    const updatedCategory = await categoryRepo.updateCategory(params, data);

    if (!updatedCategory) {
        return { message: "Categoría no encontrada" };
    }

    return await updatedCategory.toCategoryResponse();
};

const deleteOneCategory = async (params) => {
    const category = await categoryRepo.deleteOneCategory(params);

    if (!category) {
        return { message: "Categoría no encontrada" };
    }

    return { message: "Categoria eliminada" };
};

module.exports = {
    createCategory,
    findAllCategories,
    findOneCategory,
    updateCategory,
    deleteOneCategory
}