export default function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy({"static/css": "css"});

    eleventyConfig.setInputDirectory("content");
    eleventyConfig.setIncludesDirectory("_includes");

}
