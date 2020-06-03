module.exports = {
    plugins: [
        require("postcss-import"),
        require("tailwindcss")("./src/_includes/tailwind.config.js"),
        require("autoprefixer")
    ]
}