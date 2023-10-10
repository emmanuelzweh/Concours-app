'use strict';

/**
 * cycle service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::cycle.cycle');
