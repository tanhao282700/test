const Lines = { right: false, left: false, top: false, bottom: false }
const findOne = selector => document.querySelector(selector)
const finds = selector => document.querySelectorAll(selector)
const hide = el => (el.style.display = 'none')
const show = el => (el.style.display = 'block')
const addClass = (el, clazz) => el.classList.add(clazz)
const removeClass = (el, clazz) => el.classList.remove(clazz)
const on = (el, event, cb) => {
  return el.addEventListener(event, cb)
}
const once = (el, event, cb) => {
  const handle = () => {
    cb()
    el.removeEventListener(event, handle)
  }
  return el.addEventListener(event, handle)
}
const addOnceTransitionEnd = (el, cb) => once(el, 'webkitTransitionEnd', cb)
const addHideAfterTransitionEnd = (el, cb) =>
  addOnceTransitionEnd(el, () => {
    hide(el)
    if (cb) {
      cb()
    }
  })
const fadeIn = el => {
  if (el.classList.contains('fadeOut')) {
    removeClass(el, 'fadeOut')
  }
  addClass(el, 'fadeIn')
}
const fadeOut = el => {
  if (el.classList.contains('fadeIn')) {
    removeClass(el, 'fadeIn')
  }
  addClass(el, 'fadeOut')
}

let videoNode = findOne('.j_video_box')
let chooseTypeBox = findOne('.type-box')
let userSelectedType = null

window.onload = function () {
  // debugger
  playVideo()
debugger;
initTypeItems()
// const typeItem = findOne('.type-item')
  // on(typeItem, 'click', function() {
  //   debugger;
  //   addClass(typeItem, 'type-item-active');
  // });


// [step3] 点击方块，播放视频
function playVideo () {
    document.getElementById('videoBox').addEventListener('canplaythrough',function(){
      document.getElementById('videoBox').play();
  })
  //必须在微信Weixin JSAPI的WeixinJSBridgeReady才能生效
  document.addEventListener("WeixinJSBridgeReady", function () {
      document.getElementById('videoBox').play();
  }, false);


  videoNode.addEventListener(
    'ended',
    function () {
      videoNode.style.display = 'none'
      chooseTypeBox.style.display = 'block'
    },
    false
  )
}
}

function initTypeItems() {
  let typeNodes = finds('.type-item')
  typeNodes.forEach((item) => {
    on(item, 'click', function () {
      let dataType = item.getAttribute('data-type')
      singleSelectionType(typeNodes, dataType);
    })
  })
}


// 单选类型
function singleSelectionType(nodes, currentData){
  nodes.forEach((item) => {
    let dataColor = item.getAttribute('data-type')
    if(dataColor === currentData ) {
      addClass(item, 'type-item-active')
      // enableSureBtn();
      userSelectedType = currentData
    } else {
      removeClass(item, 'type-item-active')
    }
  })
}