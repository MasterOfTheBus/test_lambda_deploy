exports.handler = async (event) => {
  const method = event.httpMethod;
  if (method === 'GET') {
    if (event.path === '/') {
      const response = {
          statusCode: 200,
          body: JSON.stringify('Hello from Lambda root!'),
      };
      return response;
    } else if (event.path === '/hello') {
      const response = {
          statusCode: 200,
          body: JSON.stringify(`Hello from Lambda! Path is ${event.path}`),
      };
      return response;
    } else {
      const response = {
          statusCode: 500,
          body: JSON.stringify(`Sorry, path ${event.path} not known.``),
      };
      return response;
    }
  }
};
