module.exports = {
    content: ["./public/**/*.html"],
    css: ["./public/css/site.css"],
    // Tailwind CSS config
    defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
};