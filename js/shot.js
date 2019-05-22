$(function () {
  // 设置定时器接收变量
  let timer = null;

  // 取最小值 模块
  function minnum() {
    let numarray = []
    let lists = $('#oneoul .lists ul')
    // console.log(lists);
    for (var i = 0; i < lists.length; i++) {
      numarray.push(lists[i].offsetHeight);
    }
    //第一步先拿出数组中第一项，
    //通过for循环拿剩下的项目依次和第一比较
    //如果说当前第一项值小于 每一项，那么将其替换
    var max = numarray[0]
    for (var i = 1; i < numarray.length; i++) {
      if (max > numarray[i]) {
        max = numarray[i]
      }
    }
    console.log(max);
    return max
  }


  // 引用mousewheel代码,实时查看鼠标是向上滚动还是向下滚动
  $(window).mousewheel(function (event) {
    let num = event.deltaY;
    if (num == -1) {
      console.log('向下');
      // 调用最小值函数
      minnum()

      clearTimeout(timer)
      timer = setTimeout(function () {
        makediv()
      }, 90)
    } else {
      console.log('向上');
    }
  })


  // 创建标签并插入标签内
  function makediv() {
    let array = []
    let num = 6
    for (var i = 0; i < num; i++) {
      let randomnum = parseInt(Math.random() * 39 + 1)
      // 创建img标签
      let img = document.createElement('img')
      // 循环遍历创建图片路径
      let src = "images/" + randomnum + ".jpg"
      // 通过遍历出来的地址,设置图片的访问地址
      img.src = src
      //将创建出来的img放入数组中保存(数组不写全局是因为不想叠加数据)
      array.push(img)
    }


    for (var i = 0; i < array.length; i++) {
      let img = array[i]
      if (i == 0) {
        let li = document.createElement('li')
        // 将创建出来的img添加到div内
        li.appendChild(img)
        li.className = 'lineli'
        $('#onerank ul').append(li)
      }
      else if (i == 1) {
        let li = document.createElement('li')
        // 将创建出来的img添加到div内
        li.appendChild(img)
        li.className = 'lineli'
        $('#tworank ul').append(li)
      }
      else if (i == 2) {
        let li = document.createElement('li')
        // 将创建出来的img添加到div内
        li.appendChild(img)
        li.className = 'lineli'
        $('#threerank ul').append(li)
      }
      else if (i == 3) {
        let li = document.createElement('li')
        // 将创建出来的img添加到div内
        li.appendChild(img)
        li.className = 'lineli'
        $('#fourrank ul').append(li)
      }
      else if (i == 4) {
        let li = document.createElement('li')
        // 将创建出来的img添加到div内
        li.appendChild(img)
        li.className = 'lineli'
        $('#fiverank ul').append(li)
      }
      else if (i == 5) {
        let li = document.createElement('li')
        // 将创建出来的img添加到div内
        li.appendChild(img)
        li.className = 'lineli'
        $('#sixrank ul').append(li)
      }

    }
  }
})