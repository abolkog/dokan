/**
 * Create slug from string
 * @param {*} text
 * @param {*} delimiter
 */
const slugify = (text, delimiter = '-') => {
  return text.trim().toLowerCase().replace(/\s+/g, delimiter);
};

module.exports = {
  slugify,
};
