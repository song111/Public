let tool = {
  addPrefix: function(num) {
    num = String(num);
    if (num.length == 1) {
      num = "0" + num;
    }
    return num;
  },
  handleTime: function(str) {
    // 格式化时间
    if (str.indexOf("/Date") >= 0) {
      var reg = /\/Date\((-?\d+|-?\d+\+\d+)\)\//g,
        match = reg.exec(str),
        stamp = parseInt(match[1]);
      var date = new Date(stamp),
        year = date.getFullYear(),
        month = this.addPrefix(date.getMonth() + 1),
        day = this.addPrefix(date.getDate()),
        hour = this.addPrefix(date.getHours()),
        minute = this.addPrefix(date.getMinutes()),
        second = this.addPrefix(date.getSeconds());
      return {
        year: year,
        month: month,
        day: day,
        hour: hour,
        minute: minute,
        second: second,
        total:
          year +
          "-" +
          month +
          "-" +
          day +
          " " +
          hour +
          ":" +
          minute +
          ":" +
          second,
        toMin: year + "-" + month + "-" + day + " " + hour + ":" + minute
      };
    }

    return {
      total: str
    };
  },
  // 深拷贝 ，深层复制
  deepCopy: function(obj) {
    var objArray = Array.isArray(objArray) ? [] : {}; // 定义一个对象用来判断当前参数的类型
    if (obj && typeof obj === "object") {
      // 数组或者对象
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          //判断obj的子元素是对象还其他
          // 递归赋值
          if (obj[key] && typeof obj[key] === "object") {
            objArray[key] = this.deepCopy(obj[key]);
          } else {
            // 不是则直接赋值
            objArray[key] = obj[key];
          }
        }
      }
      return objArray;
    } else {
      //基本类型
      return obj;
    }
  },
  //浅拷贝， 实现一层的拷贝
  shallowCopy: function(obj) {
    var objArray = Array.isArray(objArray) ? [] : {}; // 定义一个对象用来判断当前参数的类型
    if (obj && typeof obj === "object") {
      for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
          objArray[key] = obj[key];
        }
      }
      return objArray;
    } else {
      return obj;
    }
  },
  // url解析
  urlController: function(url) {
    var _url = url.split("?")[1];
    if (!_url) {
      return {};
    }
    var windowHref = _url.split("&");
    var obj = {};
    for (var i = 0; i < windowHref.length; i++) {
      var arr = windowHref[i].split("=");
      obj[arr[0]] = arr[1];
    }
    return obj;
  }
};

export default tool;
