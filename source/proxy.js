// ES3
{
  var Person = function() {
    let data = {
      name: 'es3',
      sex: 'male',
      age: 15
    };
    this.get = function(key) {
      return data[key];
    }
    this.set = function(key, value) {
      if (key !== 'sex') {
        data[key] = value
      }
    }
  }

  // 声明一个实例
  var person = new Person();
  // 读取姓名，性别，年龄
  console.table({name: person.get('name'), sex: person.get('sex'), age: person.get('age')});
  // 修改姓名
  person.set('name', 'es3-cname');
  console.table({name: person.get('name'), sex: person.get('sex'), age: person.get('age')});
  // 修改性别
  person.set('sex', 'female');
  console.table({name: person.get('name'), sex: person.get('sex'), age: person.get('age')})
}

// ES5
{
  var Person = {
    name: 'es5',
    age: 15
  };
  Object.defineProperty(Person, 'sex', {
    writable: false,
    value: 'male'
  });
  // 读取姓名，性别，年龄
  console.table({name: Person.name, sex: Person.sex, age: Person.age});
  // 修改姓名
  Person.name = 'es5-cname';
  // 修改性别
  try {
    Person.sex = 'female';
  } catch (e) {
    console.log(e);
  }
  console.table({name: Person.name, sex: Person.sex, age: Person.age});
}

// ES6

{
  let Person = {
    name: 'es6',
    sex: 'male',
    age: 15
  }

  let proxy = new Proxy(Person, {
    get(target, key) {
      return target[key]
    },
    set(target, key, value) {
      if (key !== 'sex') {
        target[key] = value;
      }
    }
  });
  // 读取姓名，性别，年龄
  console.table({name: proxy.name, sex: proxy.sex, age: proxy.age});
  // 修改性别
  try {
    proxy.sex='female';
  } catch (e) {
    console.log(e);
  }
  console.table({name: proxy.name, sex: proxy.sex, age: proxy.age});
}
