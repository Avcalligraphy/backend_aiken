'use strict';

/**
 * reading-corner service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reading-corner.reading-corner');
