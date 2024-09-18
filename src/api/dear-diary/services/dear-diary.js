'use strict';

/**
 * dear-diary service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::dear-diary.dear-diary');
