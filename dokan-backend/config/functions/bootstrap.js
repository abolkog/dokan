'use strict';
const categorySeed = require('../../seed/category');
const productSeed = require('../../seed/product');

const seed = async (collection, data) => {
  try {
    const count = await strapi.services[collection].count();
    if (count === 0) {
      data.forEach(item => strapi.services[collection].create(item));
    }
  } catch (e) {
    console.error('Failed to seed the data', e);
  }
};

module.exports = async () => {
  seed('category', categorySeed);
  seed('product', productSeed);
};
