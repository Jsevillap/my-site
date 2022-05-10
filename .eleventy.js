const { DateTime } = require("luxon");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

module.exports = function (eleventyConfig) {
  // Copy the `css` directory to the output
  eleventyConfig.addPassthroughCopy("css");

  eleventyConfig.addPassthroughCopy("js");

  eleventyConfig.addPassthroughCopy("assets");
  // Watch the `css` directory for changes
  eleventyConfig.addWatchTarget("css");

  eleventyConfig.addWatchTarget("js");

  //Filter to parse dates
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat(
      "dd LLL yyyy"
    );
  });

  //Syntax Highlighter
  eleventyConfig.addPlugin(syntaxHighlight);
};
