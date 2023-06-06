let container = document.querySelector('.container'),
    wrapper = container.querySelector('.wrapper'),
    sliderList = wrapper.querySelectorAll('.slider'),
    pagination = container.querySelector('.pagination'),
    paginationList = pagination.querySelectorAll('li'),
    changeLeft = container.querySelector('.changeLeft'),
    changeRight = container.querySelector('.changeRight');
let autoTimer = null,
    interval = 2000,
    prev = 0,
    step = 0;
let change = function change() {
    sliderList[prev].style.zIndex = '0';
    sliderList[prev].style.opacity = '0';
    sliderList[step].style.zIndex = '1';
    sliderList[step].style.opacity = '1';
    sliderList[step].style.transition = 'opacity .5s';
    focus();
}
let autoMove = function autoMove() {
    prev = step;
    step++;
    step >= sliderList.length ? step = 0 : null;
    change()
};
let focus = function focus() {
    [].forEach.call(paginationList, (item, index) => {
        step === index ? item.className = 'active' : item.className = '';
    })
};
container.onmouseenter = function () {
    clearInterval(autoTimer);
    autoTimer = null;
}
container.onmouseleave = function () {
    autoTimer = setInterval(autoMove, interval);
}
changeRight.onclick = autoMove;

//changeLeft.onclick = function () {
    prev = step;
    step--;
    step < 0 ? (step = sliderList.length - 1) : null;
    change();
//}
forEach.call(paginationList, (item, index) => {
    item.onclick = function () {
        if (step === index) return;
        prev = step;
        step = index;
        change();
    }
})