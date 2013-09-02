/**
 * Post
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

var slug = require('slug');

module.exports = {
  attributes: {
    title: {
      type: 'string',

      notEmpty: true,
      required: true
    },

    slug: 'string',
    content: 'text',

    published: {
      type: 'boolean',
      defaultsTo: false
    }
  },

  beforeCreate: function(values, next) {
    values.slug = slug(values.title).toLowerCase();

    next();
  }
};
