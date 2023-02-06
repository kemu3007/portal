
import { registerPlugin, HandledRoute } from '@scullyio/scully';
import blogs from '../../src/assets/articles/list.json';


export const myPlugin = 'myPlugin';

const myFunctionPlugin = async (html: string): Promise<string> => {
  return html;
};

const validator = async () => [];

registerPlugin('postProcessByHtml', myPlugin, myFunctionPlugin, validator);

const blogRoutes: HandledRoute[] = Object.keys(blogs).map(blogId => ({ route: `/blog/${blogId}` }))

function blogRoutesPlugin(_route: string, _config = {}) {
  return Promise.resolve(blogRoutes)
}

registerPlugin('router', "blogIds", blogRoutesPlugin, [])
