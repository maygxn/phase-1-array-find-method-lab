function superbowlWin(broncos) {
    for(let win of broncos) {
        if(win.result === "W") {
            return win.year;
        }
    }
}