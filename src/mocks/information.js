import Mock from 'mockjs';

const information = (url) => ({
  'hitNumber': 55,
  'dataContent|10': [{
    'id': '@guid',
    'webpageUrl': '@url',
    'content': '@cparagraph(5)',
    'title': '@cword(10)',
    'publishedDay': '@date(yyyy-MM-dd hh-mm-ss)',
    'captureTime': '@date(yyyy-MM-dd hh-mm-ss)',
    'fromType': `${Mock.Random.integer(1, 7)}`,
    'cflag': `${Mock.Random.integer(1, 2)}`,
    'resource': '@cword(3)',
  }],
});

export default information;
