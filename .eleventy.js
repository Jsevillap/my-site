module.exports = function (eleventyConfig) {
  // Copy the `css` directory to the output
  eleventyConfig.addPassthroughCopy("css");

  eleventyConfig.addPassthroughCopy("js");

  eleventyConfig.addPassthroughCopy("assets");
  // Watch the `css` directory for changes
  eleventyConfig.addWatchTarget("css");

  eleventyConfig.addWatchTarget("js");
};
