import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "2110479 Computer Graphics",
  description: "2110479 Computer Graphics",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
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
