const btn = document.getElementById("btn");
// todo 不管用
// const _this = this

btn.addEventListener('click', function (e) {
    // 鼠标点击位置
    const clientX = e.clientX;
    const clientY = e.clientY;

    console.log(clientX, clientY);
    // todo offsetTop detail
    // 按钮所在位置
    const buttonLeft = e.target.offsetLeft
    const buttonTop = e.target.offsetTop

    console.log(buttonTop, buttonLeft);


    const xInside = clientX - buttonLeft
    const yInside = clientY - buttonTop

    // console.log(xInside, yInside);

    const circle = document.createElement('span')
    circle.classList.add('circle')
    circle.style.top = yInside + 'px';
    circle.style.left = xInside + 'px';

    // _this.appendChild(circle)
    this.appendChild(circle)

    setTimeout(() => {
        circle.remove()
    }, 1000 * .5)

})
