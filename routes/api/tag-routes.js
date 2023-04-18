const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  // find all tags w/associated Product data
  try {
    const tagData = await Category.findAll({
      include: [{model: Product}],
    });
    res.status(200).json(tagData);
  }
  catch (err) {
    res.status(400).json(err);
  }

});

router.get('/:id', async (req, res) => {
  // find a single tag by its `id` w/associated Product data
  try{
    const tagById = await Category.findPk(req.params.id, {
      include: [{model: Product}],
    });
    res.status(200).json(tagById);
  } catch(err){
    res.status(400).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new tag
  try{
    const createTag = await Tag.create(req.body)
    res.status(200).json(createTag);
  } catch(err){
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a tag's name by its `id` value
  try{
    const updateTag = await Tag.update(req.body, {
      where: {
        id: req.params.id,
      } 
    });
    res.status(200).json(updateTag)
  } catch(err){
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete on tag by its `id` value
  try{
    const deleteTag = await Tag.destroy(req.body, {
      where: {
        id: req.params.id,
      }
    });
    res.status(200).json(deleteTag)
  } catch(err){
    res.status(400).json(err);
  }
});

module.exports = router;
