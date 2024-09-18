'use strict';

/**
 * reply-chat service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::reply-chat.reply-chat');
