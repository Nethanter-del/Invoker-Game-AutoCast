var spells = {
    "cold snap": cold_snap,
    "ghost walk": ghost_walk,
    "ice wall": ice_wall,
    "emp": emp,
    "tornado": tornado,
    "alacrity": alacrity,
    "sun strike": sun_strike,
    "forge spirit": forge_spirit,
    "chaos meteor": chaos_meteor,
    "deafening blast": deafening_blast,
}

function delay(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

function q() {
    document.dispatchEvent(new KeyboardEvent("keydown", {
        key: "q",
        keyCode: 81,
        code: "QUAS",
    }));
    console.log('QUAS')
}

function w() {
    document.dispatchEvent(new KeyboardEvent("keydown", {
        key: "w",
        keyCode: 87,
        code: "WEX",
    }));
    console.log('WEX')
}

function e() {
    document.dispatchEvent(new KeyboardEvent("keydown", {
        key: "e",
        keyCode: 69,
        code: "EXORT",
    }));
    console.log('EXORT')
}

function r() {
    document.dispatchEvent(new KeyboardEvent("keydown", {
        key: "r",
        keyCode: 82,
        code: "INVOKE",
    }));
    console.log('INVOKE')
}

function spell() {
    return document.querySelector(".curent__spell").querySelector("p").textContent
}
var cold_snap = function() {
    q();
    delay(1000).then(() => q());
    delay(1000).then(() => q());
    delay(1000).then(() => r())
    console.log('cold_snap')
}
var ghost_walk = function() {
    q();
    delay(1000).then(() => q());
    delay(1000).then(() => w());
    delay(1000).then(() => r())
    console.log('ghost_walk')
}
var ice_wall = function() {
    q();
    delay(1000).then(() => q());
    delay(1000).then(() => e());
    delay(1000).then(() => r())
    console.log('ice_wall')
}
var emp = function() {
    w();
    delay(1000).then(() => w());
    delay(1000).then(() => w());
    delay(1000).then(() => r())
    console.log('emp')
}
var tornado = function() {
    w();
    delay(1000).then(() => w());
    delay(1000).then(() => q());
    delay(1000).then(() => r())
    console.log('tornado')
}
var alacrity = function() {
    w();
    delay(1000).then(() => w());
    delay(1000).then(() => e());
    delay(1000).then(() => r())
    console.log('alacrity')
}
var sun_strike = function() {
    e();
    delay(1000).then(() => e());
    delay(1000).then(() => e());
    delay(1000).then(() => r())
    console.log('sun_strike')
}
var forge_spirit = function() {
    e();
    delay(1000).then(() => e());
    delay(1000).then(() => q());
    delay(1000).then(() => r())
    console.log('forge_spirit')
}

var chaos_meteor = function() {
    e();
    delay(1000).then(() => e());
    delay(1000).then(() => w());
    delay(1000).then(() => r())
    console.log('chaos_meteor')
}
var deafening_blast = function() {
    q();
    delay(1000).then(() => w());
    delay(1000).then(() => e());
    delay(1000).then(() => r())
    console.log('deafening_blast')
}

function solve() {
    let sp = spell()
    if (sp in spells) {
        spells[sp]()
    }
}
document.addEventListener('keydown', function(event) {
    if (event.keyCode === 88) { solve() };
});