'use strict';

const Model = require('../mongo');
const categoriesSchema = require('./schema');

/** Class representing a generic category model. */
class Categories extends Model {

  /**
   * Model Constructor
   * @param schema {object} - mongo schema
   */
  constructor() {
    super(categoriesSchema);
  }
}

module.exports = Categories;