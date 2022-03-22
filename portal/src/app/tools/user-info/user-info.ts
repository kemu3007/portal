export interface UserInfo {
  version: string;
  routeKey: string;
  rawPath: string;
  rawQueryString: string;
  headers: Headers;
  requestContext: RequestContext;
  isBase64Encoded: boolean;
}

interface Headers {
  accept: string;
  'accept-encoding': string;
  'accept-language': string;
  'cache-control': string;
  'content-length': string;
  host: string;
  origin: string;
  pragma: string;
  referer: string;
  'sec-ch-ua': string;
  'sec-ch-ua-mobile': string;
  'sec-ch-ua-platform': string;
  'sec-fetch-dest': string;
  'sec-fetch-mode': string;
  'sec-fetch-site': string;
  'user-agent': string;
  'x-amzn-trace-id': string;
  'x-forwarded-for': string;
  'x-forwarded-port': string;
  'x-forwarded-proto': string;
}

interface RequestContext {
  accountId: string;
  apiId: string;
  domainName: string;
  domainPrefix: string;
  http: Http;
  requestId: string;
  routeKey: string;
  stage: string;
  time: string;
  timeEpoch: number;
}

interface Http {
  method: string;
  path: string;
  protocol: string;
  sourceIp: string;
  userAgent: string;
}
