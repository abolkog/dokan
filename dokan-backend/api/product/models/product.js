const { slugify } = require('../../../util/stringUtil');

module.exports = {
  /**
   * Triggered before user creation.
   */
  lifecycles: {
    async beforeCreate(data) {
      if (!data.slug && data.name) {
        data.slug = slugify(data.name);
      }
    },
  },
};
