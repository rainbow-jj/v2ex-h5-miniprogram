function getFoo () {
  // 函数getFoo 返回一个 新的promise对象
  return new Promise(function (resolve, reject) {
    resolve('foo');
  });
}

const g = function* () {
  // g generator
  try {

    const foo = yield getFoo();
    console.log(foo);
  } catch (e) {
    console.log (e);
  }
};

function run (generator) {
  const it = generator();

  function go(result) {
    if (result.done) return result.value;
    return result.value.then(function (value) {
      return go(it.next(value));
    }), function (error) {
      return go(it.throw(error));
    }
  }
  go(it.next());
}

run(go)
