function log(a) {
    console.log(a)
}

const score1 = document.querySelector(".player1_score")
const score2 = document.querySelector(".player2_score")
const XorO = document.querySelector(".XorO > span")
const xoItem = document.querySelectorAll(".xo_item")
const XOtable = document.querySelector(".xo")
const playerCount = document.querySelector(".player_count")
let Al;
let tryCount = 0
let iswin = false

function includes(a, b, c) {
    if (a.innerHTML.includes("X") && b.innerHTML.includes("X") && c.innerHTML.includes("X")) {
        a.style.backgroundColor = "green"
        b.style.backgroundColor = "green"
        c.style.backgroundColor = "green"
        winner("X")
        iswin = true
    } else if (a.innerHTML.includes("O") && b.innerHTML.includes("O") && c.innerHTML.includes("O")) {
        a.style.backgroundColor = "green"
        b.style.backgroundColor = "green"
        c.style.backgroundColor = "green"
        winner("O")
        iswin = true
    } else if (tryCount == 9 && iswin == false) {
        winner(null)
    }
}
function winner(win) {
    iswin = true
    if (win == "X") {
        score1.lastChild.innerHTML = Number(score1.lastChild.innerHTML) + 1
        score1.style.backgroundColor = "#2196F3"
        score2.style.backgroundColor = ""
    }
    else if (win == "O") {
        score2.firstChild.innerHTML = Number(score2.firstChild.innerHTML) + 1
        score1.style.backgroundColor = "#2196F3"
        score2.style.backgroundColor = ""
    } else {
        Array.from(xoItem).forEach(element => {
            element.style.backgroundColor = "#ae1717"
        });
    }
    XOtable.addEventListener("click", () => {
        Array.from(xoItem).forEach(element => {
            element.className = "xo_item"
            element.innerHTML = ""
            element.style.backgroundColor = ""
            XorO.innerHTML = "X"
            tryCount = 0
            iswin = false
        })
    }, { once: true })
}

XOtable.addEventListener("click", e => {
    if (e.target.innerHTML != "O" && e.target.innerHTML != "X" && e.target.className != "xo" && iswin == false) {
        tryCount++
        if (XorO.innerHTML == "X") {
            e.target.innerHTML = "X"
            e.target.className += " disabled"
            XorO.innerHTML = "O"
            score1.style.backgroundColor = ""
            score2.style.backgroundColor = "#2196F3"
        } else if (XorO.innerHTML == "O") {
            e.target.innerHTML = "O"
            e.target.className += " disabled"
            XorO.innerHTML = "X"
            score1.style.backgroundColor = "#2196F3"
            score2.style.backgroundColor = ""
        }
    } else {
        return
    }
    includes(xoItem[0], xoItem[1], xoItem[2])
    includes(xoItem[3], xoItem[4], xoItem[5])
    includes(xoItem[6], xoItem[7], xoItem[8])
    includes(xoItem[0], xoItem[3], xoItem[6])
    includes(xoItem[1], xoItem[4], xoItem[7])
    includes(xoItem[2], xoItem[5], xoItem[8])
    includes(xoItem[0], xoItem[4], xoItem[8])
    includes(xoItem[2], xoItem[4], xoItem[6])
})



score1.style.backgroundColor = "#2196F3"