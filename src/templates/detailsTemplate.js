const path = require("path")
const data = require("./data/data.json")

exports.createPages = ({ actions }) => {
    const { createPage } = actions;

    const template = path.resolve("./src/templates/detailsTemplate.js")

    data.forEach(obj => {
        var path = obj.title
        createPage({
            path,
            component: template,
            context: obj,
        })
    })
}