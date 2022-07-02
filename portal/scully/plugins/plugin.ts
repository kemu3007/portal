
import { registerPlugin, HandledRoute } from '@scullyio/scully';
import logs from '../../src/assets/logs/list.json';
import blogs from '../../src/assets/articles/list.json';
import enBlogs from '../../src/assets/articles/en/list.json'
import zhBlogs from '../../src/assets/articles/zh/list.json'


export const myPlugin = 'myPlugin';

const myFunctionPlugin = async (html: string): Promise<string> => {
  return html;
};

const validator = async () => [];

registerPlugin('postProcessByHtml', myPlugin, myFunctionPlugin, validator);

const logRoutes: HandledRoute[] = Object.keys(logs).map(logId => ({ route: `/log/${logId}` }))

function logRoutesPlugin(_route: string, _config = {}) {
  return Promise.resolve(logRoutes)
}

registerPlugin('router', "logIds", logRoutesPlugin, [])

const blogRoutes: HandledRoute[] = Object.keys(blogs).map(blogId => ({ route: `/blog/${blogId}` }))

function blogRoutesPlugin(_route: string, _config = {}) {
  return Promise.resolve(blogRoutes)
}

registerPlugin('router', "blogIds", blogRoutesPlugin, [])

const blogEnRoutes: HandledRoute[] = Object.keys(enBlogs).map(blogId => ({ route: `/blog/en/${blogId}` }))

function blogEnRoutesPlugin(_route: string, _config = {}) {
  return Promise.resolve(blogEnRoutes)
}

registerPlugin('router', "blogEnIds", blogEnRoutesPlugin, [])

const blogZhRoutes: HandledRoute[] = Object.keys(zhBlogs).map(blogId => ({ route: `/blog/zh/${blogId}` }))

function blogZhRoutesPlugin(_route: string, _config = {}) {
  return Promise.resolve(blogZhRoutes)
}

registerPlugin('router', "blogZhIds", blogZhRoutesPlugin, [])
