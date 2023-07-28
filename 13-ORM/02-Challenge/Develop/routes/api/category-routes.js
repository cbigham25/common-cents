const router = require('express').Router();
const { Category, Product } = require('../../models');
const seedCategories = require('../../seeds/category-seeds');

// The `/api/categories` endpoint

// Seed categories if needed (optional, for testing/development purposes)
// Remove this route in a production environment or use it only once to populate the initial data.
router.get('/seed', async (req, res) => {
  try {
    await seedCategories();
    res.status(200).json({ message: 'Categories seeded successfully.' });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  try {
    // find all categories
    // be sure to include its associated Products
    const categoriesData = await Category.findAll({
      include: [Product], // Assuming there's an association between Category and Product models.
    });
    res.status(200).json(categoriesData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  try {
    // find one category by its `id` value
    // be sure to include its associated Products
    const categoryId = req.params.id;
    const categoryData = await Category.findByPk(categoryId, {
      include: [Product], // Assuming there's an association between Category and Product models.
    });
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  try {
    // create a new category
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put('/:id', async (req, res) => {
  try {
    // update a category by its `id` value
    const categoryId = req.params.id;
    const updatedCategory = await Category.update(req.body, {
      where: { id: categoryId },
    });
    res.status(200).json(updatedCategory);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    // delete a category by its `id` value
    const categoryId = req.params.id;
    await Category.destroy({ where: { id: categoryId } });
    res.status(200).json({ message: 'Category deleted successfully.' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
