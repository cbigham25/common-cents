const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// GET all tags
router.get('/', async (req, res) => {
  try {
    const tags = await Tag.findAll({
      include: { model: Product, through: ProductTag, attributes: ['id', 'product_name', 'price', 'stock'] },
    });
    res.json(tags);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// GET a single tag by ID
router.get('/:id', async (req, res) => {
  const tagId = req.params.id;
  try {
    const tag = await Tag.findByPk(tagId, {
      include: { model: Product, through: ProductTag, attributes: ['id', 'product_name', 'price', 'stock'] },
    });

    if (!tag) {
      return res.status(404).json({ message: 'Tag not found' });
    }

    res.json(tag);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// POST a new tag
router.post('/', async (req, res) => {
  try {
    const newTag = await Tag.create(req.body);
    res.status(201).json(newTag);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// PUT (Update) a tag by ID
router.put('/:id', async (req, res) => {
  const tagId = req.params.id;
  try {
    const tag = await Tag.findByPk(tagId);

    if (!tag) {
      return res.status(404).json({ message: 'Tag not found' });
    }

    await tag.update(req.body);
    res.json(tag);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

// DELETE a tag by ID
router.delete('/:id', async (req, res) => {
  const tagId = req.params.id;
  try {
    const tag = await Tag.findByPk(tagId);

    if (!tag) {
      return res.status(404).json({ message: 'Tag not found' });
    }

    await tag.destroy();
    res.status(204).end();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
