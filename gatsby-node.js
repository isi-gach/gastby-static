exports.onCreatePage = ({ page, actions }) => {
  const { createPage, deletePage } = actions
  const oldPage = Object.assign({}, page)

  page.path = page.path === '/' ? 'index.html' : `${page.path}.html`

  // create pages with .html extension instead of pretty urls
  if (page.path !== oldPage.path) {
    deletePage(oldPage)
    createPage(page)
  }
}