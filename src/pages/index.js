import React from 'react';

const IndexPage = () => {
  return (
    <div>
      <header class="flex-container flex-split margin-bottom-lg">
        <div>
          <div class="flex-content">
            <a href="#"><h1>Myles Enriquez</h1></a>
            <p class="font-color-violet">Frontend Engineer</p>
            <div>
              <a class="link-btn" href="#">resume</a>
              <a class="link-btn" href="#">github</a>
            </div>
          </div>
        </div>
        <div>
          <div class="flex-content">
            <p class="font-override">v1.1</p>
          </div>
        </div>
      </header>
      <main class="flex-container">
      <section class="flex-column">
        <div class="flex-content">
            <h2 class="margin-bottom-xs all-caps">Projects</h2>
            <p class="margin-bottom-sm font-color-light-gray-super">Some projects worth talking about. Check out my walkthrough, the source code, or the live/demo site.</p>
          <ul class="margin-bottom-md">
            <li class="margin-bottom-xs"><a class="margin-right-xs" href="#">habit rabbit</a><a class="link-btn margin-right-xs" href="#">source</a><a class="link-btn margin-right-xs" href="#">demo</a></li>
            <li class="margin-bottom-xs"><a class="margin-right-xs" href="#">auralworth.com</a><a class="link-btn margin-right-xs" href="#">live site</a></li>
            <li class="margin-bottom-xs"><a class="margin-right-xs" href="#">kellyintegrations.com</a><a class="link-btn margin-right-xs">live site</a></li>
          </ul>
            <h2 class="margin-bottom-xs all-caps">Concepts</h2>
            <p class="margin-bottom-sm font-color-light-gray-super">Aren't quite full on projects, but shouldn't be thrown away...yet.</p>
            <ul class="margin-bottom-md">
            <li class="margin-bottom-xs"><a href="#">habit rabbit</a></li>
            <li class="margin-bottom-xs"><a href="#">meos</a></li>
            <li class="margin-bottom-xs"><a href="#">git balloons</a></li>
          </ul>
          <h2 class="margin-bottom-xs all-caps">Socialize</h2>
          <ul class="margin-bottom-md">
            <li class="margin-bottom-xs"><a href="#">github</a></li>
            <li class="margin-bottom-xs"><a href="#">enri.myles@gmail.com</a></li>
          </ul>
        </div>
      </section>

    </main>
      <footer>
        <p class="font-override font-color-light-gray-super">Slapped together by <a href="#">Myles Enriquez</a>.</p>
      </footer>
    </div>
  );
}

export default IndexPage;
