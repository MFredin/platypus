const { emblem, sunburstDivider, ringBadge } = require("./src/_11ty/motifs.js");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/css");
  eleventyConfig.addPassthroughCopy("src/assets");

  eleventyConfig.addShortcode("emblem", emblem);
  eleventyConfig.addShortcode("sunburstDivider", sunburstDivider);
  eleventyConfig.addShortcode("ringBadge", ringBadge);

  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  });

  eleventyConfig.addCollection("news", (collectionApi) => {
    return collectionApi.getFilteredByGlob("src/news/posts/*.md").sort((a, b) => b.date - a.date);
  });

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "_includes",
      data: "_data",
    },
    pathPrefix: process.env.ELEVENTY_PATH_PREFIX || "/",
  };
};
