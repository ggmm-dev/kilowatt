// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("C:/Users/Tyler/Documents/Websites/kilowatt/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("C:\\Users\\Tyler\\Documents\\Websites\\kilowatt\\src\\templates\\blog-post.js")),
  "component---src-pages-404-js": preferDefault(require("C:\\Users\\Tyler\\Documents\\Websites\\kilowatt\\src\\pages\\404.js")),
  "component---src-pages-checklist-js": preferDefault(require("C:\\Users\\Tyler\\Documents\\Websites\\kilowatt\\src\\pages\\checklist.js")),
  "component---src-pages-deployment-js": preferDefault(require("C:\\Users\\Tyler\\Documents\\Websites\\kilowatt\\src\\pages\\deployment.js")),
  "component---src-pages-gatsby-docs-js": preferDefault(require("C:\\Users\\Tyler\\Documents\\Websites\\kilowatt\\src\\pages\\gatsby-docs.js")),
  "component---src-pages-header-js": preferDefault(require("C:\\Users\\Tyler\\Documents\\Websites\\kilowatt\\src\\pages\\header.js")),
  "component---src-pages-index-js": preferDefault(require("C:\\Users\\Tyler\\Documents\\Websites\\kilowatt\\src\\pages\\index.js")),
  "component---src-pages-process-js": preferDefault(require("C:\\Users\\Tyler\\Documents\\Websites\\kilowatt\\src\\pages\\process.js")),
  "component---src-pages-react-js": preferDefault(require("C:\\Users\\Tyler\\Documents\\Websites\\kilowatt\\src\\pages\\react.js"))
}

exports.json = {
  "layout-index.json": require("C:\\Users\\Tyler\\Documents\\Websites\\kilowatt\\.cache\\json\\layout-index.json"),
  "docs-2018-06-28-this-is-the-title.json": require("C:\\Users\\Tyler\\Documents\\Websites\\kilowatt\\.cache\\json\\docs-2018-06-28-this-is-the-title.json"),
  "404.json": require("C:\\Users\\Tyler\\Documents\\Websites\\kilowatt\\.cache\\json\\404.json"),
  "checklist.json": require("C:\\Users\\Tyler\\Documents\\Websites\\kilowatt\\.cache\\json\\checklist.json"),
  "deployment.json": require("C:\\Users\\Tyler\\Documents\\Websites\\kilowatt\\.cache\\json\\deployment.json"),
  "gatsby-docs.json": require("C:\\Users\\Tyler\\Documents\\Websites\\kilowatt\\.cache\\json\\gatsby-docs.json"),
  "header.json": require("C:\\Users\\Tyler\\Documents\\Websites\\kilowatt\\.cache\\json\\header.json"),
  "index.json": require("C:\\Users\\Tyler\\Documents\\Websites\\kilowatt\\.cache\\json\\index.json"),
  "process.json": require("C:\\Users\\Tyler\\Documents\\Websites\\kilowatt\\.cache\\json\\process.json"),
  "react.json": require("C:\\Users\\Tyler\\Documents\\Websites\\kilowatt\\.cache\\json\\react.json"),
  "404-html.json": require("C:\\Users\\Tyler\\Documents\\Websites\\kilowatt\\.cache\\json\\404-html.json")
}