/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

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