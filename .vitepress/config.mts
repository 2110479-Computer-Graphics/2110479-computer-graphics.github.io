import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid({
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
    ],

    sidebar: [
      {
        items: [{ text: "OpenGL Template", link: "/opengl-template" }],
      },
      {
        text: "Labs",
        items: [
          { text: "01 - Hello Triangle", link: "/labs/01-hello-triangle" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/2110479-Computer-Graphics" },
    ],
  },
});
