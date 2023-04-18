const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async(req, res) => {
  // find all categories w/Products
  try {
    const categoryData = await Category.findAll({
      include: [{model: Product}],
    });
    res.status(200).json(categoryData);
  }
  catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one category by its `id` value w/Products
  try{
    const catById = await Category.findPk(req.params.id, {
      include: [{model: Product}],
    });
    res.status(200).json(catById);
  } catch(err){
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try{
    const createCat = await Category.create(req.body)
    res.status(200).json(createCat);
  } catch(err){
    res.status(400).json(err);
  }
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
  try{} catch(err){}
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
  try{} catch(err){}
});

module.exports = router;
