const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
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
    const catById = await Category.findByPk(req.params.id, {
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

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try{
    const updateCat = await Category.update(req.body, {
      where: {
        id: req.params.id,
      } 
    });
    res.status(200).json(updateCat)
  } catch(err){
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try{
    const deleteCat = await Category.destroy(req.body, {
      where: {
        id: req.params.id,
      }
    });
    res.status(200).json(deleteCat)
  } catch(err){
    res.status(400).json(err);
  }
});

module.exports = router;
