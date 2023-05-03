const pluginSEO = require("eleventy-plugin-seo");

module.exports = function(eleventyConfig) {
    // Watch CSS files for changes
    eleventyConfig.addWatchTarget("./src/styles/");

    eleventyConfig.addPlugin(pluginSEO, require("./src/_data/site.json"))

    return {
        dir: {
            input: "src",
            output: "_site"
        }
    }
}