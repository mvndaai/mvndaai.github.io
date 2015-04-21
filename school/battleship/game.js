window.onload = function() {
    c.setup();
    credentialInfo();

};

//Globals
var X = 0, Y = 1;


/* Model
    This is where infomation about the game is stored
*/
function Game(){
    this.boardSize = null;
    this.players = {};
    this.winner = null;
}
Game.prototype.setBoardSize = function(size){
    this.boardSize = size;
};

var m = {}; //Model stuff
m.createPlayer = function (name,visibility){
    return {
        "name":name,
        "visibility":visibility,
        "ships":[],
        "attacks":[],
        "hits":[]
    };
};
m.addRandomShips = function(shipArray){
    var count = (m.game.boardSize - 5), size = (m.game.boardSize - 2);
    for (var i = 0; i < count; i++){
        m.addRandomShip(size,shipArray);
        size--;
    }
};
m.addRandomShip = function(size,shipArray){
    var noConflicts = false;
    var count = 0, ship;
    while(!noConflicts){
        ship = m.createShip(m.randomLocation(),randomBool(),size);
        for(var i = 0; i < ship.length; i++){
            noConflicts = (m.locationOnBoard(ship[i]) &&
                !m.checkForShip(ship[i],shipArray));
            if(!noConflicts) { break; }
        }
    }
    shipArray.push(ship);
};
m.locationOnBoard = function(location){
    if (location[X] >= m.game.boardSize){ return false;}
    if (location[Y] >= m.game.boardSize){ return false;}
    return true;
};
m.checkForShip = function(location,shipArray){
    for(var i = 0; i < shipArray.length; i++){
        for(var j = 0; j < shipArray[i].length; j++){
            if(m.sameLocations(location,shipArray[i][j])) {return true;}
        }
    }
    return false;
};
m.sameLocations = function(a,b){
    return (JSON.stringify(a) === JSON.stringify(b));
};

m.randomLocation = function(){
    return [Math.floor(Math.random() * (m.game.boardSize)),
            Math.floor(Math.random() * (m.game.boardSize))];
};
m.createShip = function(headLocation,horizontalBool,length){
    var locations = [], currentLoc = headLocation;
    for(var i = 0; i < length; i++){
        locations.push(currentLoc.slice(0));
        if (horizontalBool)
            { currentLoc[X]++; }
        else
            { currentLoc[Y]++; }
    }
    return locations;
};
m.computerMove = function(){
    var player = m.game.players.comp ,opponant = m.game.players.user;
    var uncheckedHits = player.hits.slice().sort(m.randomSort), i, j ,locA,locB;
    if(uncheckedHits.length > 0){ //Check for multiple hits
        if(uncheckedHits.length >= 2){ //Check for neighbors
            //Check horizontal and vertical rows
            var inline = [];
            for(i = 0; i < uncheckedHits.length; i++){
                for(j = 0; j < uncheckedHits.length; j++){
                    locA = uncheckedHits[i]; locB = uncheckedHits[j];
                    if(m.checkNeighbors(locA,locB)){
                        inline.pushUnique(i);
                        var move = m.neighborsMove(player,opponant,locA,locB);
                        if(move !== null){ return move;}
                    }
                }
            }
            //Remove any that are inline
            inline.sort().reverse();
            for(i = 0; i < inline.length; i++){
                uncheckedHits.splice(inline[i],1);
            }

        }//End neigbor attacks
        //Single attacks
        for(i = 0; i < uncheckedHits.length; i++){
            var choices = m.allDirections(uncheckedHits[i]);
            for(j = 0; j < choices.length; j++){
                if(m.avaliableMove(player,choices[j])){
                    return choices[j];
                }
            }
        }
    }
    return m.randomAvaliable(m.game.players.comp);

};
m.checkNeighbors = function(locA,locB){
    if(locA[X] == locB[X]){ if(Math.abs(locA[Y] - locB[Y]) === 1) {return true;}}
    else if(locA[Y] == locB[Y]){if(Math.abs(locA[X] - locB[X]) === 1) {return true;}}
    return false;
};
m.neighborsMove = function(player,opponant,locA,locB){
    var array = [];
    if(locA[X] == locB[X]){
        array.push([locA[X], (locA[Y] + 1)]);
        array.push([locA[X], (locA[Y] - 1)]);
    }else if(locA[Y] == locB[Y]){
        array.push([(locA[X] + 1), locA[Y]]);
        array.push([(locA[X] - 1), locA[Y]]);
    }
    array.sort(m.randomSort);
    for(var i = 0; i < array.length; i++){
        if(m.avaliableMove(player,array[i])){
            return array[i];
        }
    }
    return null;
};
m.allDirections = function(location){
    var array = [];
    array.push([location[X] + 1, location[Y]]);
    array.push([location[X], location[Y] + 1]);
    array.push([location[X] - 1, location[Y]]);
    array.push([location[X], location[Y] - 1]);
    return array.sort(m.randomSort);
};
m.onGameBoard = function(location){
    var limit = m.game.boardSize;
    if(location[X] < 0 || location[Y] < 0) {return false; }
    if(location[X] >= limit || location[Y] >= limit) {return false;}
    return true;
};
m.avaliableMove = function(player,location){
    var avaliable = true;
    if(!m.onGameBoard(location)) {return false;}
    for(var i = 0; i < player.attacks.length; i++){
            if(m.sameLocations(location,player.attacks[i])) {avaliable = false;}
        }
    return avaliable;
};
m.randomAvaliable = function(player){
    var i,j,k, array = [];
    for(i = 0; i < m.game.boardSize; i++){
        for(j = 0; j < m.game.boardSize; j++){
            array.push([i,j]);
        }
    }
    array.sort(m.randomSort);
    for(k = 0; k < array.length; k++){
        if (m.avaliableMove(player,array[k])) {
            return array[k];
        }
    }
};
m.checkEndGame = function(){
    var user = m.shipsRemaining(m.game.players.comp),
        comp = m.shipsRemaining(m.game.players.user);

    if (user === 0){
        m.game.winner = m.game.players.user.name;
        return true;
    }
    if (comp === 0){
        m.game.winner = m.game.players.comp.name;
        return true;
    }
    return false;
};
m.randomSort = function(){
    return (0.5 - Math.random());
};
m.shipsRemaining = function(player){
    var i, j, k, sunk = 0, ships = [];

    opponantHits = m.getOpponant(player).hits;
    for(i = 0; i < player.ships.length; i++){
        ships.push( player.ships[i].slice() );
    }

    for(i = 0; i < opponantHits.length; i++){
        for(j = 0; j < ships.length; j++){
            for(k = 0; k < ships[j].length; k++){
                if(m.sameLocations(opponantHits[i],ships[j][k])){
                    ships[j].splice(k,1);
                }
            }
        }
    }
    for(i = 0; i < ships.length; i++){ if(ships[i].length === 0){ sunk++; } }
    return (ships.length - sunk);
};
m.getOpponant = function(player){
    return (player.name === 'user' ? m.game.players.comp : m.game.players.user);
};
m.attack = function(player,location){
    var opponant = m.getOpponant(player);
    player.attacks.push(location);
    if(m.checkForShip(location,opponant.ships)){
        player.hits.push(location);
    }
    return location;
};
//END Model

/* View
    This is what is displayed
*/

var v = {}; //View stuff
v.setup = function(){ v.toggleSetupContainer(); };
v.toggleContainer = function(id){
    var container = document.getElementById(id);
    if (container.classList.contains("hidden")){
        container.classList.remove("hidden");
    }else{
        container.classList.add("hidden");
    }
};
v.toggleSetupContainer = function(){ v.toggleContainer("setupContainer"); };
v.toggleGameContainer = function(){ v.toggleContainer("gameContainer"); };
v.toggleEndContainer = function(){ v.toggleContainer("endContainer"); };
v.drawGameboard = function(size,user,board,clickable){
    var html = "";
    html += "<table border=\"1\" class=\"square center " + user.name + "Board";
    if (clickable)  {html += " clickable"; }

    html += "\">";
    for (var y = 0; y <= size -1 ; y++) { //Rows
        html += "<tr>";
        for (var x = 0; x <= size -1 ; x++) { //Columns
            html += "<td></td>";
        }
        html += "</tr>";
    }
    html += "</table>";
    board.innerHTML = html;
};
v.drawShips = function(board,shipArray){
    shipArray.forEach(function(ship){ v.drawShip(board,ship); });
};
v.drawShip = function(board,ship){
    function shipHtml(item){ return "<div class=\"image " + item + "\"></div>";}
    var end = ship.length -1,
    horizontal = (ship[0][Y] === ship[1][Y]) ? true : false;
    //Ship Head
    v.getBoardCell(board,ship[0][Y],ship[0][X]).innerHTML =
        horizontal ? shipHtml("boatLeft") : shipHtml("boatTop");
    //Ship Body
    for(var i = 1; i <= end; i++){
        v.getBoardCell(board,ship[i][Y],ship[i][X]).innerHTML =
            horizontal ? shipHtml("boatCenterHorizontal") : shipHtml("boatCenterVertical");
    }
    //Ship Tail
    v.getBoardCell(board,ship[end][Y],ship[end][X]).innerHTML =
        horizontal ? shipHtml("boatRight") : shipHtml("boatBottom");
};


v.hitsRemaining = function(opponant,elementID){
    document.getElementById(elementID).innerHTML = m.shipsRemaining(opponant);
};
v.updateHitCounter = function(){
    v.hitsRemaining(m.game.players.user,"shipsUser");
    v.hitsRemaining(m.game.players.comp,"shipsComp");
};
v.updateView = function(){
    v.updateHitCounter();
    if(m.game.players.user.visibility)
        v.drawShips(c.boards.user, m.game.players.user.ships);
    if(m.game.players.comp.visibility)
        v.drawShips(c.boards.comp, m.game.players.comp.ships);
};
v.displayHit = function(board,location){
    var el = v.getBoardCell(board,location[Y],location[X]);
    if(el.innerHTML !== ""){ el = el.children[0]; }
    el.innerHTML = "<div class=\"image attackHit\"></div>";
};
v.displayMiss = function(board,location){
    v.getBoardCell(board,location[Y],location[X])
        .innerHTML = "<div class=\"image attackMiss\"></div>";
};
v.endGame = function(name){
    var string = (name === "user" ? "You" : "Computer");
    //console.log(string + " won");
    document.getElementById("winner").innerHTML = string;
    v.toggleGameContainer();
    v.toggleEndContainer();
};
v.hideAllSections = function(){
    var array = ["setupContainer","gameContainer","endContainer"];
    for(var i = 0; i < array.length; i++){
        document.getElementById(array[i]).classList.add("hidden");
    }
};
v.getBoardCell = function (boardEl, row, col){
    //console.log(boardEl + " row " + row + " col " + col);
    return boardEl.getElementsByTagName("table")[0]
        .getElementsByTagName("tbody")[0]
        .getElementsByTagName("tr")[row]
        .getElementsByTagName("td")[col];
};
v.updateWins = function(){
    if (window.localStorage){
        document.getElementById("userWins").innerHTML = localStorage.getItem("bsWinsUser");
        document.getElementById("compWins").innerHTML = localStorage.getItem("bsWinsComp");
    }
};
//END View


/* Controller
 This is what connect the model to the view
*/
var c = { boards:{} };//Controller stuff
c.setup = function(){
    v.setup();

    c.boards.user = document.getElementById("boardUser");
    c.boards.comp = document.getElementById("boardComp");


    if(c.loadFromLocalStorage()){
        if(m.game.winner === null){ return c.startGame(); }
    }
    c.setupSetupContainer();

};
c.setupSetupContainer = function(){
    document.getElementById("startBtn")
        .addEventListener("click", c.clickStart, false);

    c.onFileUpload();
    c.updateDemoStateButton();
};
c.clickStart = function(){
    m.game = new Game();

    m.game.players.user = m.createPlayer("user",true);
    m.game.players.comp = m.createPlayer("comp",false);


    var boardSizeEl = document.getElementById("sizeDropdown");
    m.game.setBoardSize(parseInt(boardSizeEl.options[boardSizeEl.selectedIndex].value));
    m.addRandomShips(m.game.players.user.ships);
    m.addRandomShips(m.game.players.comp.ships);
    c.startGame();
};
c.startGame = function(){
    v.drawGameboard(m.game.boardSize,m.game.players.user,c.boards.user,false);
    v.drawGameboard(m.game.boardSize,m.game.players.comp,c.boards.comp,true);
    v.updateHitCounter();

    v.toggleSetupContainer();
    v.toggleGameContainer();

    [].slice.call(document.getElementsByClassName("reset")).forEach(function(button){
        button.addEventListener("click", c.reset, false);
    });

    document.getElementById("startBtn")
        .removeEventListener("click", c.clickStart,false);
    //console.log(m.game);
    v.updateView();

    //Draw all attacks
    c.drawLoadedAttacks(m.game.players.user,c.boards.comp);
    c.drawLoadedAttacks(m.game.players.comp,c.boards.user);
    c.clickableTables();
    c.saveGame();
};

//c.drawGame = function(){ };
c.attack = function(player,location){
    var opponant = m.getOpponant(player);
    //console.log(opponant);
    m.attack(player,location);
    if(m.checkForShip(location ,opponant.ships)){
        v.displayHit(c.boards[opponant.name],location);
    }else{
        v.displayMiss(c.boards[opponant.name],location);
    }
    v.updateHitCounter();
    v.updateHitCounter();
    c.saveGame();
    c.checkEndGame();

};
c.clickableTables = function(){
    var tables = document.getElementsByClassName("clickable");
    for(var i = 0; i < tables.length; i++){
        c.clickableTable(tables[i]);
    }
};
c.clickableTable = function(tableElement){
    var x,y,player,opponant,location;
    tableElement.onclick = function(e){
        var cell = e.target;
        if (typeof cell.cellIndex === 'undefined') { cell = cell.parentNode; }
        location = [cell.cellIndex,cell.parentNode.rowIndex];
        if (typeof location[X] === 'undefined'){return;} //Catch clicking on boarders

        if (c.boards.user === document.getElementById(tableElement.parentNode.id)){
            player = m.game.players.comp;
            opponant = m.game.players.user;
        }else{
            player = m.game.players.user;
            opponant = m.game.players.comp;
        }

        if (m.avaliableMove(player,location)){
            c.attackSequence(player,location);
        }
    };
};
c.attackSequence = function(player,userAttackLocation){
    c.attack(player,userAttackLocation);
    if(m.game.winner === null){
        c.attack(m.getOpponant(player),m.computerMove());
    }
};
c.reset = function(){
    v.hideAllSections();
    v.toggleSetupContainer();
    localStorage.removeItem("battleship");
    c.setupSetupContainer();
};
c.saveGame = function(){
    if (window.localStorage){
        localStorage.battleship = JSON.stringify(m.game);
    }
    c.updateDownloadStateButton();
};
c.loadFromLocalStorage = function(){
    if (window.localStorage){
        if(localStorage.getItem("battleship") !== null){
            var json = JSON.parse(localStorage.getItem("battleship"));
            c.loadformJson(json);
            return true;
        }
    }
    return false;
};
c.loadformJson = function(json){
    //http://www.html5rocks.com/en/tutorials/file/dndfiles/
    m.game = json;
};
c.checkEndGame = function(){
    if(m.checkEndGame())
        {c.endGame();}
};
c.endGame = function(){
    c.saveGame();
    c.saveWins();
    v.updateWins();
    v.endGame(m.game.winner);
};
c.saveWins = function(){
    if (window.localStorage){
        var wins;
        if (localStorage.getItem("bsWinsUser") === null){
            localStorage.setItem("bsWinsUser",0);
        }
        if (localStorage.getItem("bsWinsComp") === null){
            localStorage.setItem("bsWinsComp",0);
        }
        if(m.game.winner === "user"){
            wins = parseInt(localStorage.getItem("bsWinsUser"))  + 1;
            localStorage.setItem("bsWinsUser",wins);
        }
        if(m.game.winner === "comp"){
            wins = parseInt(localStorage.getItem("bsWinsComp")) + 1;
            localStorage.setItem("bsWinsComp",wins);
        }
    }
};
c.drawLoadedAttacks = function(player,opponantBoard){
    var opponant = m.getOpponant(player);
    for(var i = 0; i < player.attacks.length; i++){
        if(m.checkForShip(player.attacks[i] ,opponant.ships)){
            v.displayHit(opponantBoard,player.attacks[i]);
        }else{
            v.displayMiss(opponantBoard,player.attacks[i]);
        }
    }
};
c.updateDownloadStateButton = function(){
    var html, data = "text/json;charset=utf-8," +
        encodeURIComponent(JSON.stringify(m.game));
    html = '<a href="data:' + data + '" download="battleShipState.json">' +
        '<button>Download State</button></a>';
    document.getElementById("download").innerHTML = html;
};
c.updateDemoStateButton = function(){
    var localRequest = new XMLHttpRequest();
    localRequest.open("GET", "./save.json");
    localRequest.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    localRequest.onreadystatechange = function() {
        if (localRequest.readyState == 4 && localRequest.status == 200) {
            var response =  JSON.parse(localRequest.responseText);
            var html, data = "text/json;charset=utf-8," +
                encodeURIComponent(JSON.stringify(response));
            html = '<a href="data:' + data + '" download="battleShipStateDemo.json">' +
                '<button>Download Demo State</button></a>';
            document.getElementById("demoDownload").innerHTML = html;
        }
    };
    localRequest.send();
};
c.onFileUpload = function(){
    if (!FileReader){
        alert("FileReader not supported in current browser.");
        return;
    }

    var element = document.getElementById('selectedFile');
    element.onchange = function() {
        var files = element.files;
            if (!files.length) {
                alert('Please select a file!');
                return;
            }
        var file = files[0];


        var reader = new FileReader();
        reader.readAsText(file);
        reader.onloadend = function(e) {
            var json, contents = e.target.result;
            try{
                json=JSON.parse(contents);
            }catch(error){
                alert(file.name + " is not valid JSON");
                return;
            }
            if(json.boardSize === null){
                alert("That doesn't seem to be a game save file");
                return;
            }
            c.loadformJson(json);
            c.startGame();
        };
    };
};
// END Controller


/* Non Game Related
    This is stuff that doesn't have to do with the game
*/
function randomBool(){
    return (Math.round(Math.random()) === 0) ? true : false;
}

function credentialInfo(){
    if (localStorage.cs2550timestamp !== undefined){
        document.getElementById("credBox").classList.remove("hidden");
        document.getElementById("credData").innerHTML = localStorage.cs2550timestamp;
        document.getElementById("clearCredsBtn").addEventListener("click", clearCredentials, false);
    }
}
function clearCredentials(){
    localStorage.removeItem("cs2550timestamp");
    document.getElementById("credBox").classList.add("hidden");
}

Array.prototype.pushUnique = function(item){
    if(this.indexOf(item) < 0){this.push(item);}
};
