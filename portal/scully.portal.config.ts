import { ScullyConfig } from '@scullyio/scully';
import './scully/plugins/plugin'

/** this loads the default render plugin, remove when switching to something else. */
import '@scullyio/scully-plugin-puppeteer'



export const config: ScullyConfig = {
  projectRoot: "./src",
  projectName: "portal",
  // add spsModulePath when using de Scully Platform Server,
  outDir: './dist/static',
  routes: {
    "/log/:id": {
      type: "logIds",
    },
    "/blog/:id": {
      type: "blogIds",
    },
    "/blog/en/:id": {
      type: "blogEnIds",
    },
    "/blog/ch/:id": {
      type: "blogChIds",
    }
  }
};
