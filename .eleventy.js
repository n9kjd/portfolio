export default function(eleventyConfig) {
  eleventyConfig.addShortcode("lightbox", function(filename, gallery, caption) {
    return `<a href="/images/${filename}" data-lightbox="${gallery}" data-caption="${caption}">
                <img src="/images/${filename}" alt="${caption}">
            </a>`;
  });

  {
  eleventyConfig.addFilter("formatDate", (dateObj) => {
    // Ensure we are working with a valid Date object
    const d = dateObj instanceof Date ? dateObj : new Date(dateObj);
    const pad = (num) => String(num).padStart(2, "0");

    const year = d.getFullYear();
    const month = pad(d.getMonth() + 1);
    const day = pad(d.getDate());
    const hours = pad(d.getHours());
    const minutes = pad(d.getMinutes());

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  });
};}