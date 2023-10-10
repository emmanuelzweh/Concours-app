'use strict';

/**
 * cycle router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::cycle.cycle');
