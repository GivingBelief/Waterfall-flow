$(function () {
  // 定义一个空数组存储数据
  let array = []
  // 设置一个变量
  let asd = 40
  // 进行遍历循环
  for (var i = 5; i <= asd; i++) {
    // 创建外面div标签(borderline)
    let outdiv = document.createElement('div')
    outdiv.className = 'borderline'
    // 创建里面的div标签(centerdiv)
    let indiv = document.createElement('div')
    indiv.className = 'centerdiv'
    outdiv.appendChild(indiv)
    //将创建出来的div标签添加到body内
    document.getElementById('center').appendChild(outdiv)
    // 创建img标签
    let img = document.createElement('img')
    // 将创建出来的img添加到div内
    indiv.appendChild(img)
    // 循环遍历创建图片路径
    let src = "images/" + i + ".jpg"
    // 通过遍历出来的地址,设置图片的访问地址
    img.src = src
    // 将图片数据存储起来
    array.push(src)
  }
  // // 将图片数据地址存储到本地
  // for (var i = 0; i < array.length; i++) {
  //   localStorage.setItem('key' + [i + 1], array[i])
  // }


  let num = 0
  for (var i = 6; i <= 11; i++) {
    let padtop = 10
    num++
    $('.borderline').eq(i).css({
      position: 'absolute',
      top: $('.borderline').eq(i - 6).height() + padtop + 'px',
      left: (num - 1) * 197 + 'px',
    })
  }

  let num2 = 0
  for (var i = 12; i <= 17; i++) {
    let padtop = 20
    num2++
    $('.borderline').eq(i).css({
      position: 'absolute',
      top: $('.borderline').eq(i - 6).height() +
          $('.borderline').eq(i - 12).height() + padtop + 'px',
      left: (num2 - 1) * 197 + 'px'
    })
  }

  let num3 = 0
  for (var i = 18; i <= 23; i++) {
    let padtop = 30
    num3++
    $('.borderline').eq(i).css({
      position: 'absolute',
      top: $('.borderline').eq(i - 6).height() +
          $('.borderline').eq(i - 12).height() +
          $('.borderline').eq(i - 18).height()
          + padtop + 'px',
      left: (num3 - 1) * 197 + 'px'
    })
  }

  let num4 = 0
  for (var i = 24; i <= 29; i++) {
    let padtop = 40
    num4++
    $('.borderline').eq(i).css({
      position: 'absolute',
      top: $('.borderline').eq(i - 6).height() +
          $('.borderline').eq(i - 12).height() +
          $('.borderline').eq(i - 18).height() +
          $('.borderline').eq(i - 24).height()
          + padtop + 'px',
      left: (num4 - 1) * 197 + 'px'
    })
  }

  let num5 = 0
  for (var i = 30; i <= 35; i++) {
    let padtop = 50
    num5++
    $('.borderline').eq(i).css({
      position: 'absolute',
      top: $('.borderline').eq(i - 6).height() +
          $('.borderline').eq(i - 12).height() +
          $('.borderline').eq(i - 18).height() +
          $('.borderline').eq(i - 24).height() +
          $('.borderline').eq(i - 30).height()
          + padtop + 'px',
      left: (num5 - 1) * 197 + 'px'
    })
  }

  let num6 = 0
  for (var i = 36; i <= 41; i++) {
    let padtop = 60
    num6++
    $('.borderline').eq(i).css({
      position: 'absolute',
      top: $('.borderline').eq(i - 6).height() +
          $('.borderline').eq(i - 12).height() +
          $('.borderline').eq(i - 18).height() +
          $('.borderline').eq(i - 24).height() +
          $('.borderline').eq(i - 30).height() +
          $('.borderline').eq(i - 36).height()
          + padtop + 'px',
      left: (num6 - 1) * 197 + 'px'
    })
  }

  let num7 = 0
  for (var i = 42; i <= 47; i++) {
    let padtop = 70
    num7++
    $('.borderline').eq(i).css({
      position: 'absolute',
      top: $('.borderline').eq(i - 6).height() +
          $('.borderline').eq(i - 12).height() +
          $('.borderline').eq(i - 18).height() +
          $('.borderline').eq(i - 24).height() +
          $('.borderline').eq(i - 30).height() +
          $('.borderline').eq(i - 36).height() +
          $('.borderline').eq(i - 42).height() +
          +padtop + 'px',
      left: (num7 - 1) * 197 + 'px'
    })
  }


  let timer = null // 使用定时器函数节流
  //设置浏览器的滚动事件
  // $(window).scroll(function () {
  //   // 获取被卷去的部分(依次兼容目标:火狐,谷歌等高级浏览器,safari浏览器,IE6/7/8)
  //   let scrollTop = document.documentElement.scrollTop ||
  //       window.pageYOffset ||
  //       document.body.scrollTop;
  //   // console.log(scrollTop);
  //
  //   clearTimeout(timer)
  //   timer = setTimeout(function () {
  //     // // 列数
  //     for (var i = 0; i < 6; i++) {
  //       let figure = 0
  //       let num = 6
  //       for (var j = 0; j <= 6; j++) {
  //         let shot = $('.borderline').eq(i + j * num).height() + 10
  //         figure += parseInt(shot)
  //         // console.log(shot);
  //         console.log(figure);
  //
  //       }
  //     }
  //     // makediv()
  //     return
  //   }, 1500)
  //
  //
  // })


  $(window).mousewheel(function (event) {
    let num = event.deltaY;
    if (num==-1){
      console.log('向下');
      clearTimeout(timer)
        timer = setTimeout(function () {
          // // 列数
          for (var i = 0; i < 6; i++) {
            let figure = 0
            let num = 6
            for (var j = 0; j <= 6; j++) {
              let shot = $('.borderline').eq(i + j * num).height() + 10
              figure += parseInt(shot)
              console.log(figure);
            }
          }
          makediv()
          return
        }, 1000)
    } else {
      console.log('向上');
    }
  })

  function makediv() {
    let num = 6
    for (var i = 0; i < num; i++) {
      let randomnum = parseInt(Math.random() * 39 + 1)
      // console.log(randomnum);

      // 创建外面div标签(borderline)
      let outdiv = document.createElement('div')
      outdiv.className = 'borderline'
      // 创建里面的div标签(centerdiv)
      let indiv = document.createElement('div')
      indiv.className = 'centerdiv'
      outdiv.appendChild(indiv)
      //将创建出来的div标签添加到body内
      document.getElementById('center').appendChild(outdiv)
      // 创建img标签
      let img = document.createElement('img')
      // 将创建出来的img添加到div内
      indiv.appendChild(img)
      // 循环遍历创建图片路径
      let src = "images/" + randomnum + ".jpg"
      // 通过遍历出来的地址,设置图片的访问地址
      img.src = src


    }
  }

})

