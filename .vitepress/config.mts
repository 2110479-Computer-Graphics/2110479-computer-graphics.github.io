import { withMermaid } from "vitepress-plugin-mermaid";

// @ts-ignore
import katex from "markdown-it-katex";

export default withMermaid({
  markdown: {
    config: (md) => {
      md.use(katex);
    },
  },
  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css",
      },
    ],
  ],
  mermaid: {},
  mermaidPlugin: {
    class: "mermaid my-class",
  },
  title: "2110479 Computer Graphics",
  description: "2110479 Computer Graphics",
  themeConfig: {
    nav: [
      { text: "Home", link: "/" },
      { text: "Resources", link: "/labs/01-hello-triangle" },
      { text: "Math Test", link: "/math-test" },
    ],

    sidebar: [
      {
        items: [{ text: "OpenGL Template", link: "/opengl-template" }],
      },
      {
        text: "Labs",
        items: [
          { text: "01 - Hello Triangle", link: "/labs/01-hello-triangle" },
          {
            text: "02 - Texture and Shader",
            link: "/labs/02-texture-and-shader",
          },
          {
            text: "05 - Ray Tracing",
            link: "/labs/05-ray-tracing",
          },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/2110479-Computer-Graphics" },
    ],
  },
});
