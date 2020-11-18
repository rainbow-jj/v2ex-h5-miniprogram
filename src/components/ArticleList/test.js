// const { request } = require("@tarojs/taro");

//  function stringify(url, data) {
//   //  如果 url 返回指定 ？字符串首次出现的位置 -1 的话
//    var dataString = url.indexOf('?') == -1 ? '?' : '&';
//    for (var key in data) {
//      dataString += key + '=' + data[key] + '&';
//    };
//    return dataString;
//  }

//  if (request.formData) {
//    request.body = request.data;
//  } else if (/^get$/i.test(request.method)) {
//    request.url = `${request.url}${stringify(request.url, request.data)}`;
//  } else if (request.form) {
//    request.headers.set('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8');
//    request.body = stringify(request.data);
//  } else {
//    request.headers.set('Content-Type', 'application/son;charset=UTF-8');
//    request.body = JSON.stringify(request.data)
//  }

//  request.credentials = 'same-origin'
//  request.credentials = 'include'
