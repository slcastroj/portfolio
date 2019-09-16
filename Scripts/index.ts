$(() => {
    const mwLockTime = 700;
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

    $(document).keydown((e) => {
        e.preventDefault()
        return false
    })

    $(document).keyup((e) => {
        if (mwLock) {
            e.preventDefault()
            return false
        }
        mwLock = true
        setTimeout(() => { mwLock = false }, mwLockTime)
        let delta = 0
        let key = e.which
        if (key == 38 || key == 37) {
            delta = -1
        } else if (key == 39 || key == 40) {
            delta = 1
        }
        else {
            e.preventDefault()
            return false
        }
        let st = $(document).scrollTop()
        st += delta * vh
        $(document).scrollTop(st)
    })
})