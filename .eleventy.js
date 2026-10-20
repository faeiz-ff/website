export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({"static/css": "css"});
    eleventyConfig.addPassthroughCopy({"static/favicon.ico": "favicon.ico"});

    eleventyConfig.setInputDirectory("content");
    eleventyConfig.setIncludesDirectory("_includes");

}
