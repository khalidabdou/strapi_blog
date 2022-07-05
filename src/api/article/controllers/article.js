'use strict';

/**
 *  article controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::article.article',
//  ({ strapi }) => ({

//     async findOne(ctx) {
//         const { slug } = ctx.params;
    
//         const entity = await strapi.db.query('api::article.article').findOne({
//             populate: true,
//             where: { slug:slug, }

//         });

//         const sanitizedEntity = await this.sanitizeOutput(entity, ctx)
//         return this.transformResponse(sanitizedEntity)
//     },
// })
);
