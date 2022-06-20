'use strict'

const urlsController = require('../../controller/urlsController');

module.exports = async function (fastify, opts) {
    fastify.get('/api/urls', urlsController.getAllUrls)
    fastify.post('/api/urls', urlsController.addNewUrl)
    fastify.get('/api/urls/:id', urlsController.getSingleUrl)
    fastify.put('/api/urls/:id', urlsController.updateUrl)
    fastify.delete('/api/urls/:id', urlsController.deleteUrl)
}
