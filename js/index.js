const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('8566b11f65a14d54b8be47b1c01db39e');

exports.handler = async (event) => {

  const params = {
    language: `${event["queryStringParameters"]['language']}`
  };

  if(`${event["queryStringParameters"]['category']}` !== 'undefined') {
    params.category = `${event["queryStringParameters"]['category']}`;
  }

  return newsapi.v2.sources(params).then((resp) => {
    const response = {"isBase64Encoded": false,
                    "statusCode": 200,
                    "headers": { "headerName": "headerValue" }
                    };
    response.body = JSON.stringify(resp);
    return response;
  });
};
