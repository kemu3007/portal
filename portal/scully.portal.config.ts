import { ScullyConfig, setPluginConfig } from '@scullyio/scully';
import './scully/plugins/plugin'

/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer'

import { baseHrefRewrite } from '@scullyio/scully-plugin-base-href-rewrite';

const defaultPostRenderers = ['seoHrefOptimise', baseHrefRewrite];

setPluginConfig(baseHrefRewrite, { href: '/tech/' });

export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "portal",
  defaultPostRenderers,
  // add spsModulePath when using de Scully Platform Server,
  outDir: './dist/static',
  routes: {
    "/blog/:id": {
      type: "blogIds",
    }
  }
};
