const qs = require('querystring');

exports.handler = async (event) => {
  const { name, email, comment, page } = qs.parse(event.body);

  // validate this data

  return {
    statusCode: 200,
    body: JSON.stringify({ name, email, comment, page }),
  };
};
