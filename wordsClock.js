// wordsClock.js
"use strict"
// 定义自己的log
const log =function() {
    console.log.apply(console, arguments)
}

// 获取时间参数
const getOptions = function() {
    var options = {}
    options.miniTime = Number(document.querySelector('#id-select-minitime').value)
    options.miniRecite = Number(document.querySelector('#id-select-minirecite').value)
    options.times = Number(document.querySelector('#id-select-times').value)
    return options
}

// 将时间参数转换为毫秒数
const transfer2micro = function(minutes) {
    var microSec = minutes * 60 * 1000
    return microSec
}
// 时间到了自动提醒
const itsTime = function() {
    var audio = document.querySelector('audio')
    audio.setAttribute('src', 'alarm-clock.wav')
    log(9)
    setTimeout(function(){
        audio.removeAttribute('src')
    }, 3000)
}

// 获得数组arr，内有需要提示开始背诵的时间
const getMemoryTime = function(options) {
    var arr = new Array(options.times)
    var len = arr.length
    arr[0] = options.miniTime
    for (let i = 0; i + 1 < len; i++) {
        arr[i + 1] = arr[i] + 6
    }
    log('memory time array--->', arr)
    return  arr
}
// 获得数组，内有提示复习的时间
const getReciteTime = function(options) {
    var arr = new Array(options.times)
    var len = arr.length
    arr[0] = options.miniTime + 1
    for (let i = 0; i + 1 < len; i++) {
        arr[i + 1] = arr[i] + 6
    }
    log('recite time array--->', arr)
    return  arr
}
// 依据所传入的数组参数，分别设置提醒时间
const setTime = function(array) {
    log('set time ---->', array)
    for (let i = 0; i < array.length; i++) {
        var delay = transfer2micro(array[i])
        log('delay ---->', delay)
        setTimeout(function(){
            itsTime()
        }, delay)
    }
}

// 在开始按钮上绑定事件
const bindEventStart = function() {
    var startBtn = document.querySelector('#id-button-start')
    startBtn.addEventListener('click', function(){
        log('你点击了开始按钮，开始背单词吧！')
        var options = getOptions()
        var reciteTime = getReciteTime(options)
        var memoryTime = getMemoryTime(options)
        setTime(memoryTime)
        setTime(reciteTime)
    })
}

// 主函数入口
const __main = function() {
    bindEventStart()
}

window.onload = function(){
    __main()
}
