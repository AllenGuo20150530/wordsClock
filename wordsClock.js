// wordsClock.js
// 定义自己的log
const log =function() {
    console.log.apply(console, arguments)
}

// 获取时间参数
var getOptions = function() {
    var options = {}
    // var miniTime = document.querySelector('#id-select-minitime').value
    options.miniTime = Number(document.querySelector('#id-select-minitime').value)
    options.miniRecite = Number(document.querySelector('#id-select-minirecite').value)
    options.times = Number(document.querySelector('#id-select-times').value)
    // options.recite = Number(document.querySelector('#id-select-recite').value)
    return options
}

// 转换为毫秒数
var transfer2micro = function(minutes) {
    var microSec = minutes * 60 * 1000
    return microSec
}
// 时间到了自动提醒
const itsTime = function() {
    var audio = document.querySelector('audio')
    audio.setAttribute('src', 'alarm-clock.wav')
}
var options = getOptions()
var delayTime = transfer2micro(options.miniTime) + transfer2micro(options.miniRecite)
var delayTimeClear = delayTime * (options.times)
var flag = 0
var inter = setInterval(function() {
    itsTime(0)
    log(flag)
    flag += 1
}, delayTime)
setTimeout(function(){
    clearInterval(inter)
}, delayTimeClear)


var getMemoryTime = function(options) {
    var arr = new Array(options.times)
    var len = arr.length
    arr[0] = options.miniTime
    for (var i = 0; i + 1 < len; i++) {
        arr[i + 1] = arr[i] + 6
    }
    return  arr
}
var getReciteTime = function(options) {
    var arr = new Array(options.times)
    var len = arr.length
    arr[0] = options.miniTime + 1
    for (var i = 0; i + 1 < len; i++) {
        arr[i + 1] = arr[i] + 6
    }
    return  arr
}
var setTime = function(array) {
    for (let i = 0; i < array.length; i++) {
        var delay = 1000 * testArray[i]
        setTimeout(function() {
            itsTime()
        }, delay)
    }
}
