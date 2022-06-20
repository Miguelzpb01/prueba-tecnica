'use strict';

const boom = require('boom');
const Urls = require('../models/Myurls');

// GET ALL URLS
exports.getAllUrls = async (_req, _res) =>{
    try{
        let allUrls = await Urls.find();
        return allUrls;
    } catch (e){
        throw boom.boomify(e);
    }
};


// GET BY ID
exports.getSingleUrl = async (req, _res) =>{
    try{
        const id = req.params.id;
        let singleUrl = await Urls.findById(id);
        return singleUrl;
    } catch (e){
        throw boom.boomify(e);
    }
};


// ADD URL
exports.addNewUrl = async (req, _res) =>{
    try{
        let url = new Urls(req.body);
        let addedUrl = await url.save();
        return addedUrl;
    } catch (e){
        throw boom.boomify(e);
    }
};


// UPDATE URL
exports.updateUrl = async (req, _res) =>{
    try{
        const id = req.params.id;
        let updatedUrl = await url.findByIdAndUpdate(id, req.body, { new: true });
        return updatedUrl;
    } catch (e){
        throw boom.boomify(e);
    }
};


// DELETE URL
exports.deleteUrl = async (req, _res) =>{
    try{
        const id = req.params.id;
        let deletedUrl = await Urls.findByIdAndDelete(id);
        return { deletedUrl };
    } catch (e){
        throw boom.boomify(e);
    }
};