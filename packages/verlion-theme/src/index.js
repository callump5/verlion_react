import Root from "./components/Root";
import image from "@frontity/html2react/processors/image";
import iframe from "@frontity/html2react/processors/iframe";
import link from "@frontity/html2react/processors/link";

export default {
  name: "verlion-theme",
  roots: {
    verlionTheme: Root
  },
  state: {
    verlionTheme: {
      autoPrefetch: "in-view",
      featured: {
        showOnList: false,
        showOnPost: false,
      },
    }
  },
  actions: {
    verlionTheme: {
      beforeSSR: async ({ actions }) => {
        await actions.source.fetch("/portfolio/salem-album-cover/");
      },
    }
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * and internal link inside the content HTML.
       * You can add your own processors too.
       */
      processors: [image, iframe, link],
    },
  },
};
