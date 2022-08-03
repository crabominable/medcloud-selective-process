const { Product } = require('../database/models');
const { AppError } = require('../utils');

const create = async (product) => Product.create(product);

const read = async () => Product.findAll();

const update = async (id, product) => {
  await Product.update(product, { where: { id } });
};

const remove = async (id) => {
  await Product.destroy({ where: { id } });
};

module.exports = {
  create,
  read,
  update,
  remove,
};
