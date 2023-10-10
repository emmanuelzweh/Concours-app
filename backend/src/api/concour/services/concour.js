'use strict';

/**
 * concour service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::concour.concour');
