$(() => {
    const mwLockTime = 500;
    const mwAnimationTime = 1000;
    let mwLock = false
    let vh = $(window).height()

    $(window).resize((e) => {
        vh = $(window).height()
        $(document).scrollTop(0)
    })

    $(document).mousewheel((e) => {
        if (mwLock) {
            e.preventDefault()
            return false;
        }
        mwLock = true;
        setTimeout(() => { mwLock = false }, mwLockTime)
        let st = $(document).scrollTop()
        st += -Math.sign(e.deltaY) * vh
        $(document).scrollTop(st)
    })
})