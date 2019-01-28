/* eslint-disable */
import React from 'react';
import { graphql, Link } from 'gatsby';

const IndexPage = () => {
  return (
    <div>
      <header className="flex-container flex-split margin-bottom-lg">
        <div>
          <div className="flex-content">
            <a href="#"><h1>Myles Enriquez</h1></a>
            <p className="font-color-violet">Frontend Engineer</p>
            <div>
              <a className="link-btn" href="#">resume</a>
              <a className="link-btn" href="#">github</a>
            </div>
          </div>
        </div>
        <div>
          <div className="flex-content">
            <p className="font-override">v1.1</p>
          </div>
        </div>
      </header>
      <main className="flex-container">
      <section className="flex-column">
        <div className="flex-content">
            <h2 className="margin-bottom-xs all-caps">Projects</h2>
            <p className="margin-bottom-sm font-color-light-gray-super">Some projects worth talking about. Check out my walkthrough, the source code, or the live/demo site.</p>
          <ul className="margin-bottom-md">
            <li className="margin-bottom-xs"><a className="margin-right-xs" href="#">habit rabbit</a><a className="link-btn margin-right-xs" href="#">source</a><a className="link-btn margin-right-xs" href="#">demo</a></li>
            <li className="margin-bottom-xs"><a className="margin-right-xs" href="#">auralworth.com</a><a className="link-btn margin-right-xs" href="#">live site</a></li>
            <li className="margin-bottom-xs"><a className="margin-right-xs" href="#">kellyintegrations.com</a><a className="link-btn margin-right-xs">live site</a></li>
          </ul>
            <h2 className="margin-bottom-xs all-caps">Concepts</h2>
            <p className="margin-bottom-sm font-color-light-gray-super">Aren't quite full on projects, but shouldn't be thrown away...yet.</p>
            <ul className="margin-bottom-md">
            <li className="margin-bottom-xs"><a href="#">habit rabbit</a></li>
            <li className="margin-bottom-xs"><a href="#">meos</a></li>
            <li className="margin-bottom-xs"><a href="#">git balloons</a></li>
          </ul>
          <h2 className="margin-bottom-xs all-caps">Socialize</h2>
          <ul className="margin-bottom-md">
            <li className="margin-bottom-xs"><a href="#">github</a></li>
            <li className="margin-bottom-xs"><a href="#">enri.myles@gmail.com</a></li>
          </ul>
        </div>
      </section>

    </main>
      <footer>
        <p className="font-override font-color-light-gray-super">Slapped together by <a href="#">Myles Enriquez</a>.</p>
      </footer>
    </div>
  );
}

export default IndexPage;

export const query = graphql`
  query {
    allMarkdownRemark (
      sort: {order: DESC, fields: [frontmatter___date]}
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date
          }
        }
      }
    }
  }
`
