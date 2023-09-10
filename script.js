const player = document.getElementById("player")
const canon = document.getElementById("canon")

touchPos = [0, 0]
initTouchPos = [0, 0]
onHold = false;
isInitTouch = false
dt = 1
prevTime = Date.now()

canonAng = 0
x = 0

const update = ()=>{
    // Delta Time
    dt = (Date.now()-prevTime)/4.6
    prevTime = Date.now()

    canonAng = Math.atan((touchPos[1]-window.innerHeight/4)/(touchPos[0]-window.innerWidth/2))*-180/Math.PI
    if(touchPos[0] < window.innerWidth/2)
    {
        canonAng += 90+60
    }
    canon.style.transform = `translate(-50%, 0%) rotate(${canonAng+90}deg) translate(0, -20px)`

    setTimeout(update, 0)
}
update()

window.addEventListener('mousedown', (event) => 
{
    // if(x>50 || y<window.innerHeight-60)
    // {
    //     onHold = true;
    // }
    onHold = true;
});
window.addEventListener('mousemove', (event) => 
{
    var e = event;
    if (e.type == 'mousedown' || e.type == 'mouseup' || e.type == 'mousemove' || e.type == 'mouseover'|| e.type=='mouseout' || e.type=='mouseenter' || e.type=='mouseleave')
    {
        x = e.clientX;
        y = e.clientY;
    }
    y = window.innerHeight - y
    //console.log(x,y)
    touchPos[0] = x;
    touchPos[1] = y;
    if(isInitTouch)
    {
        initTouchPos = touchPos;
        isInitTouch = false
    }
});
window.addEventListener('mouseup', (event) => 
{
    // if(x>50 || y<window.innerHeight-60)
    // {
    //     onHold = false;
    //     isInitTouch = true;
    // }
    onHold = false;
    isInitTouch = true;
});

window.addEventListener('touchstart', (event) => 
{
    // if(x>50 || y<window.innerHeight-60)
    // {
    //     onHold = true;
    // }
    onHold = true;
});
window.addEventListener('touchmove', (event) => 
{
    var e = event;
    if(e.type == 'touchstart' || e.type == 'touchmove' || e.type == 'touchend' || e.type == 'touchcancel')
    {
        var evt = (typeof e.originalEvent === 'undefined') ? e : e.originalEvent;
        var touch = evt.touches[0] || evt.changedTouches[0];
        x = touch.pageX;
        y = touch.pageY;
    }
    y = window.innerHeight - y
    //console.log(x,y)
    touchPos[0] = x;
    touchPos[1] = y;
    if(isInitTouch)
    {
        initTouchPos = touchPos;
        isInitTouch = false
    }
});
window.addEventListener('touchend', (event) => 
{
    // if(x>50 || y<window.innerHeight-60)
    // {
    //     onHold = false;
    //     isInitTouch = true;
    //     touchedPointNo = 0;
    // }
    onHold = false;
    isInitTouch = true;
    touchedPointNo = 0;
});