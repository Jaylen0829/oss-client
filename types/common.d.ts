declare enum OssType {
  qiniu,
  ali,
  tencent,
}

declare interface Oss {
  type: OssType;
  name: string;
  ak: string;
  sk: string;
  buckets?: string[];
  domains?: string[];
}

declare type RequestMethod = "GET" | "get" | "POST" | "post";

declare type RequestHeaders = Record<string, string>;

declare interface RequestOptions {
  url: string;
  method?: RequestMethod;
  headers?: RequestHeaders;
  data?: any;
  params?: any;
}

declare interface RequestResponse<T> {
  statusCode: number;
  statusMessage: string;
  data: T;
  headers: Record<string, string | string[]>;
}
