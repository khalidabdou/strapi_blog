module.exports = {
    routes: [
        {
            method: 'GET',
            path: '/blog/:slug',
            handler: 'article.findOne',
            config: {
                auth: false,      
            }
        }
    ]
}