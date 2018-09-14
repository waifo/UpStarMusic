const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const AlbumSchema = require('./album')

const ArtistSchema = new Schema({
    name:String,
    age:Number,
    yearsActive:Number,
    image:String,
    website:String,
    netWorth:Number,
    labelName:String,
    retired:Boolean,
    albums:[AlbumSchema]

});

const Artist = mongoose.model('artist',ArtistSchema)

module.exports = Artist;
