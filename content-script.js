var timeint = 5000;

function ma(){

var el = document.createElement("style");
  el.innerHTML = '.xsj2Ff.Zf0RDc.PoIECb.AwnI1b.vLRPrf{background:brown;} ::-webkit-scrollbar{width: 1px;} ::-webkit-scrollbar-thumb {background: rgb(0,0,0,0.1);} @-webkit-keyframes rotate {100% {transform: rotate(1turn);}}@keyframes rotate {100% {transform: rotate(1turn);}}.tC2Wod.ACcyyc.kssMZb{}.tC2Wod.ACcyyc.kssMZb::before {content: "";position: absolute;z-index: -2;left: -50%;top: -50%;width: 200%;height: 200%;background-color: #399953;background-repeat: no-repeat;background-size: 50% 50%, 50% 50%;background-position: 0 0, 100% 0, 100% 100%, 0 100%;background-image: linear-gradient(#0fffc1, #0fffc1), linear-gradient(#fbb300, #fbb300), linear-gradient(#d53e33, #d53e33), linear-gradient(#377af5, #377af5);-webkit-animation: rotate 4s linear infinite;animation: rotate 4s linear infinite;}.tC2Wod.ACcyyc.kssMZb::after {content: "";position: absolute;z-index: -1;left: 6px;top: 6px;width: calc(100% - 12px);height: calc(100% - 12px);background: black;border-radius: 5px;}';
  el.id = "stty";
  var div = document.getElementsByClassName("pHsCke")[0];
  div.parentNode.insertBefore(el, div.nextSibling);
  timeint = 999999999;
}

setInterval(() => {
  if(!!!document.getElementById("stty")){
  ma();
  console.log("running...");}
}, timeint);
