var paradiv = document.createElement('div');
paradiv.style.display = "flex";
paradiv.style.flexDirection = "row";
paradiv.style.justifyContent = "center";
paradiv.style.flexWrap = "wrap";
paradiv.setAttribute('id', 'main');
document.body.appendChild(paradiv);
var i;
for (i = 1; i <= 9; i++) {
    var mydiv1 = document.createElement('div');
    mydiv1.style.height = '200px';
    mydiv1.style.flex = "0 0 25%";
    mydiv1.style.width = '200px';
    mydiv1.style.backgroundColor = "wheat";
    mydiv1.style.margin = '5px';
    mydiv1.style.textAlign = "center";
    mydiv1.style.fontSize = "140px";
    mydiv1.setAttribute('id', 'btn');
    mydiv1.setAttribute('onClick', 'StartGame()');
    paradiv.appendChild(mydiv1);
}
var Board = /** @class */ (function () {
    function Board(config) {
        this.name = config.playerName;
    }
    return Board;
}());
var playerx = new Board({
    playerName: 'x'
});
var player0 = new Board({
    playerName: '0'
});
var flag = 1;
function StartGame() {
    if (flag == 1) {
        return flag = 0;
    }
    else {
        return flag = 1;
    }
}
