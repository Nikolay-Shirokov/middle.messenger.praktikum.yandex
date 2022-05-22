const enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE'
};

type TOptions = {
  headers?: Record<string, string>,
  data?: Record<string, string> | XMLHttpRequestBodyInit,
  method?: METHODS,
  timeout?: number
}

type TUrl = string;

export default class HTTPTransport {
  public get = (url: TUrl, options: TOptions = {}): Promise<XMLHttpRequest> => {
    return this.request(url, { ...options, method: METHODS.GET }, options.timeout);
  };
  public put = (url: TUrl, options: TOptions = {}): Promise<XMLHttpRequest> => {
    return this.request(url, { ...options, method: METHODS.PUT }, options.timeout);
  };
  public post = (url: TUrl, options: TOptions = {}): Promise<XMLHttpRequest> => {
    return this.request(url, { ...options, method: METHODS.POST }, options.timeout);
  };
  public delete = (url: TUrl, options: TOptions = {}): Promise<XMLHttpRequest> => {
    return this.request(url, { ...options, method: METHODS.DELETE }, options.timeout);
  };

  private request = (url: TUrl, options: TOptions, timeout: number = 5000): Promise<XMLHttpRequest> => {
    const { method, data, headers } = options;

    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      if (method === METHODS.GET && data) {
        url = url + '?' + Object.keys(data).map(key => `${key}=${(data as Record<string, string> )[key]}`).join('&')
      }
      xhr.open(method!, url);
      if (headers) {
        Object.keys(headers).forEach(key => {
          xhr.setRequestHeader(`${key}`, headers[key]);
        })
      }

      xhr.timeout = timeout;

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;

      if (method === METHODS.GET || !data) {
        xhr.send();
      } else {
        xhr.send(data as XMLHttpRequestBodyInit);
      }
    });
  };

}
