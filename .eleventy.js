export default function(eleventyConfig) {
  eleventyConfig.addShortcode("lightbox", function(filename, caption) {
    return `<a href="/images/portfolio/${filename}" data-lightbox="portfolio" data-caption="${caption}">
                <img src="/images/portfolio/${filename}" alt="${caption}">
            </a>`;
  });
};