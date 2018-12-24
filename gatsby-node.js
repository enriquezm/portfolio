const path = require('path');

const createTagPages = (createPage, posts) => {
  const allTagIndexTemplate = path.resolve('src/templates/allTagIndex.js');
  const singleTagIndex = path.resolve('src/templates/singleTagIndex.js');

  const postsByTag = {};

  posts.forEach(({node}) => {
    // If current node contains 'tags' in frontmatter
    if (node.frontmatter.tags) {
      // For each tag, add it as a key to an object, assign nodes that also contain that tag
      node.frontmatter.tags.forEach(tag => {
        if (!postsByTag[tag]) {
          postsByTag[tag] = [];
        }
        postsByTag[tag].push(node);
      })
    }
  })

  const tags = Object.keys(postsByTag);
  createPage({
    path: '/tags',
    component: allTagIndexTemplate,
    context: {
      tags: tags.sort()
    }
  });
};

exports.createPages = (({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const blogPostTemplate = path.resolve('src/templates/blogPost.js');

    resolve(
      graphql(
        `
          query {
            allMarkdownRemark (
              sort: {order: ASC, fields: [frontmatter___date]}
            ) {
              edges {
                node {
                  frontmatter {
                    path
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        const posts = result.data.allMarkdownRemark.edges;

        posts.forEach(({node}, index) => {
          const path = node.frontmatter.path;

          createTagPages(createPage, posts);

          createPage({
            path,
            component: blogPostTemplate,
            context: {
              pathSlug: path,
              prev: index === 0 ? null: posts[index - 1].node,
              next: index === (posts.length - 1) ? null : posts[index + 1].node
            }
          })

          resolve();
        })
      })
    )
  })
})
