const {DateTime} = require("luxon");

module.exports = function(eleventyConfig){
    eleventyConfig.addPassthroughCopy('./src/assets');
    eleventyConfig.addPassthroughCopy('./src/style.css');

    eleventyConfig.addFilter("postDate",(dateObj)=>{
        return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
    })
    return{
        dir:{
            input: "src", // all the folder(name) where i working
            output:"public" //public folder which every body seen
        }
    }
}