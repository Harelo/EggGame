
var na = -1;
var nb = 0;
var nc = 0;
var nd = 0;
var ne = 0;
var allc = 0;
var allxp = 0;
var allp = 0;
var allspend = 0;
var started = 0;
var tokened = 0;


function ranks() {
    document.all.rankup.value = document.all.rankup.value - 1;
    allxp = allxp - (-1);
    document.all.rankup.style.color = "red";
    setTimeout("document.all.rankup.style.color='black';", 100);
    if (document.all.rankup.value <= 0 && document.all.rank.value.match(/Begginer/)) {
        document.all.rank.value = "EggCracker";
        document.all.rank.style.color = "gold";
        setTimeout("document.all.rank.style.color='black';", 500)
        document.all.rankup.value = "50000";
        setTimeout("document.all.points.style.color='gold';", 200)
        setTimeout("document.all.points.style.color='black';", 700);
        document.all.points.value = document.all.points.value - (-10000);
        allp = allp - (-10000);
        alert('You have been promoted to EggCracker! You have been awarded 10,000 points!');
    }
    else if (document.all.rankup.value <= 0 && document.all.rank.value.match(/EggCracker/)) {
        document.all.rank.style.color = "gold";
        setTimeout("document.all.rank.style.color='black';", 500)
        document.all.rank.value = "EggtasticCracker";
        document.all.rankup.value = "100000";
        setTimeout("document.all.points.style.color='gold';", 200);
        setTimeout("document.all.points.style.color='black';", 700);
        document.all.points.value = document.all.points.value - (-50000);
        allp = allp - (-50000);
        alert('You have been promoted to EggtasticCracker! You have been awarded 50,000 points!');
    }
    else if (document.all.rankup.value <= 0 && document.all.rank.value.match(/EggtasticCracker/)) {
        document.all.rank.style.color = "gold";
        setTimeout("document.all.rank.style.color='black';", 500)
        document.all.rank.value = "AmeggzingCracker";
        document.all.rankup.value = "250000";
        setTimeout("document.all.points.style.color='gold';", 200);
        setTimeout("document.all.points.style.color='black';", 700);
        document.all.points.value = document.all.points.value - (-100000);
        allp = allp - (-100000);
        alert('You have been promoted to AmeggzingCracker! You have been awarded 100,000 points!');
    }
    else if (document.all.rankup.value <= 0 && document.all.rank.value.match(/AmeggzingCracker/)) {
        document.all.rank.style.color = "gold";
        setTimeout("document.all.rank.style.color='black';", 500)
        document.all.rank.value = "EggstremeCracker";
        document.all.rankup.value = "500000";
        setTimeout("document.all.points.style.color='gold';", 200);
        setTimeout("document.all.points.style.color='black';", 700);
        document.all.points.value = document.all.points.value - (-250000);
        allp = allp - (-250000);
        alert('You have been promoted to EggstremeCracker! You have been awarded 250,000 points!');
    }
    else if (document.all.rankup.value <= 0 && document.all.rank.value.match(/EggstremeCracker/)) {
        document.all.rank.style.color = "gold";
        setTimeout("document.all.rank.style.color='black';", 500)
        document.all.rank.value = "Eggsterminator";
        document.all.rankup.value = "1000000";
        setTimeout("document.all.points.style.color='gold';", 200);
        setTimeout("document.all.points.style.color='black';", 700);
        document.all.points.value = document.all.points.value - (-500000);
        allp = allp - (-500000);
        alert('You have been promoted to Eggsterminator! You have been awarded 500,000 points!');
    }
    else if (document.all.rankup.value <= 0 && document.all.rank.value.match(/Eggsterminator/)) {
        document.all.rank.style.color = "gold";
        setTimeout("document.all.rank.style.color='black';", 500)
        document.all.rank.value = "SuperCracker";
        document.all.rankup.value = "2000000";
        setTimeout("document.all.points.style.color='gold';", 200);
        setTimeout("document.all.points.style.color='black';", 700);
        document.all.points.value = document.all.points.value - (-1000000);
        allp = allp - (-1000000);
        alert('You have been promoted to SuperCracker! You have been awarded 1,000,000 points!');
    }
    else if (document.all.rankup.value <= 0 && document.all.rank.value.match(/SuperCracker/)) {
        document.all.rank.style.color = "gold";
        setTimeout("document.all.rank.style.color='black';", 500)
        document.all.rank.value = "CrackingMaster";
        document.all.rankup.value = "5000000";
        setTimeout("document.all.points.style.color='gold';", 200);
        setTimeout("document.all.points.style.color='black';", 700);
        document.all.points.value = document.all.points.value - (-2000000);
        allp = allp - (-2000000);
        alert('You have been promoted to CrackingMaster! You have been awarded 2,000,000 points!');
    }
    else if (document.all.rankup.value <= 0 && document.all.rank.value.match(/CrackingMaster/)) {
        document.all.rank.style.color = "gold";
        setTimeout("document.all.rank.style.color='black';", 500)
        document.all.rank.value = "CrackingKing";
        document.all.rankup.value = "10000000";
        setTimeout("document.all.points.style.color='gold';", 200);
        setTimeout("document.all.points.style.color='black';", 700);
        document.all.points.value = document.all.points.value - (-5000000);
        allp = allp - (-5000000);
        alert('You have been promoted to CrackingKing! You have been awarded 5,000,000 points!');
    }
    else if (document.all.rankup.value <= 0 && document.all.rank.value.match(/CrackingKing/)) {
        document.all.rank.style.color = "gold";
        setTimeout("document.all.rank.style.color='black';", 500)
        document.all.rank.value = "CrackingEmperor";
        document.all.rankup.value = "20000000";
        setTimeout("document.all.points.style.color='gold';", 200);
        setTimeout("document.all.points.style.color='black';", 700);
        document.all.points.value = document.all.points.value - (-10000000);
        allp = allp - (-10000000);
        alert('You have been promoted to CrackingEmperor! You have been awarded 10,000,000 points!');
    }
    else if (document.all.rankup.value <= 0 && document.all.rank.value.match(/CrackingEmperor/)) {
        document.all.rank.style.color = "gold";
        setTimeout("document.all.rank.style.color='black';", 500)
        document.all.rank.value = "CrackingIdol";
        document.all.rankup.value = "50000000";
        setTimeout("document.all.points.style.color='gold';", 200);
        setTimeout("document.all.points.style.color='black';", 700);
        document.all.points.value = document.all.points.value - (-20000000);
        allp = allp - (-20000000);
        alert('You have been promoted to CrackingIdol! You have been awarded 20,000,000 points!');
    }
    else if (document.all.rankup.value <= 0 && document.all.rank.value.match(/CrackingIdol/)) {
        document.all.rank.style.color = "gold";
        setTimeout("document.all.rank.style.color='black';", 500)
        document.all.rank.value = "CrackingGod";
        document.all.rankup.value = "Reached max rank!";
        setTimeout("document.all.points.style.color='gold';", 200);
        setTimeout("document.all.points.style.color='black';", 700);
        document.all.points.value = document.all.points.value - (-50000000);
        allp = allp - (-50000000);
        alert('You have been promoted to CrackingGod! You have been awarded 50,000,000 points!');
        document.all.rankup.style.color = "black";
    }
    else if (document.all.rank.value.match(/CrackingGod/)) {
        document.all.rankup.value = "Reached max rank!";
        document.all.rankup.style.color = "black";
    }
}

function hit() {

    document.all.color.style.opacity = "0.5";
    setTimeout("document.all.color.style.opacity='1';", 100);
    document.all.count.style.color = "red";
    setTimeout("document.all.count.style.color='black';", 100);
    document.all.points.style.color = "lime";
    setTimeout("document.all.points.style.color='black';", 100);
    setTimeout("colors();", 1);
    document.all.count.value = document.all.count.value - 1;
    document.all.points.value = document.all.points.value - (-1);
    allp = allp - (-1);
    allc = allc - (-1);
    if (document.all.itemact.value.match(/Hit x3/)) {
        document.all.count.value = document.all.count.value - 2;
        allc = allc - (-2);
    }
    else if (document.all.itemact.value.match(/Hit x5/)) {
        document.all.count.value = document.all.count.value - 4;
        allc = allc - (-4);
    }
    else if (document.all.itemact.value.match(/Hit x10/)) {
        document.all.count.value = document.all.count.value - 9;
        allc = allc - (-9);
    }
    else if (document.all.itemact.value.match(/Points x2/)) {
        document.all.points.value = document.all.points.value - (-1);
        allp = allp - (-1);
    }
    else if (document.all.itemact.value.match(/Points x5/)) {
        document.all.points.value = document.all.points.value - (-4);
        allp = allp - (-4);
    }
    tokened = "0";
    started = "1";
    ranks();
    achchecker();
}


function colors() {
    if (document.all.count.value < 1) {
        document.all.count.value = "0";
        addeggs();
        document.all.color.disabled = "true";
        alert('Congratulations! You have cracked an egg!');
        document.all.color.style.opacity = "0";
    }
}

function addeggs() {

    if (document.all.eggs.value == '9') {
        document.all.eggs.value = document.all.eggs.value - (-1);
        document.all.points.value = document.all.points.value - (-1000000);
        allp=allp-(-1000000);
        document.all.points.style.color = "gold";
        setTimeout("document.all.points.style.color='black';", 500);
    }

    else if (document.all.eggs.value == '99') {
        document.all.eggs.value = document.all.eggs.value - (-1);
        document.all.points.value = document.all.points.value - (-5000000);
        allp=allp-(-5000000);
        document.all.points.style.color = "gold";
        setTimeout("document.all.points.style.color='black';", 500);
    }

    else if (document.all.eggs.value == '999') {
        document.all.eggs.value = document.all.eggs.value - (-1);
        document.all.points.value = document.all.points.value - (-10000000);
        allp=allp-(-10000000);
        document.all.points.style.color = "gold";
        setTimeout("document.all.points.style.color='black';", 500);
    }

    else {
        document.all.eggs.value = document.all.eggs.value - (-1);
        document.all.eggs.style.color = "lime";
        setTimeout("document.all.eggs.style.color='black';", 100);
        document.all.points.value = document.all.points.value - (-100000);
        allp=allp-(-100000);
        document.all.points.style.color = "lime";
        setTimeout("document.all.points.style.color='black';", 100);
    }
}

function reset() {
    if (document.all.count.value <= 0) {
        document.all.count.value = "1000000";
        document.all.color.disabled = false;
        document.all.color.style.opacity = "1";
    }
    else if (document.all.count.value > 0) {
        alert("You didn't open the current egg yet!");
    }
}


function activate() {
    if (document.all.itemact.value == '') {
        setTimeout("document.all.itemact.value='';", 720000);
        document.all.itemact.value = document.all.myitems.value;
        remove();
    }
    else {
        sure();
    }
}

function sure() {
    var r = confirm('Are you sure you want to activate another item? The current item will dissapear.');
    if (r == true) {
        setTimeout("document.all.itemact.value='';", 720000);
        document.all.itemact.value = document.all.myitems.value;
        remove();
    }
}

function remove() {
    if (document.all.myitems.value.match(/Hit x3/)) {
        delhit3();
    }
    else if (document.all.myitems.value.match(/Hit x5/)) {
        delhit5();
    }
    else if (document.all.myitems.value.match(/Hit x10/)) {
        delhit10();
    }
    else if (document.all.myitems.value.match(/Points x2/)) {
        delpoi2();
    }
    else if (document.all.myitems.value.match(/Points x5/)) {
        delpoi5();
    }
}

function delhit3() {
    if (na > 1) {
        na = na - 1;
    }
    else if (na == 1) {
        yesdel();
        na = na - 1;
    }
}

function delhit5() {
    if (nb > 1) {
        nb = nb - 1;
    }
    else if (nb == 1) {
        yesdel();
        nb = nb - 1;
    }
}

function delhit10() {
    if (nc > 1) {
        nc = nc - 1;
    }
    else if (nc == 1) {
        yesdel();
        nc = nc - 1;
    }
}

function delpoi2() {
    if (nd > 1) {
        nd = nd - 1;
    }
    else if (nd == 1) {
        yesdel();
        nd = nd - 1;
    }
}

function delpoi5() {
    if (ne > 1) {
        ne = ne - 1;
    }
    else if (ne == 1) {
        yesdel();
        ne = ne - 1;
    }
}

function yesdel() {
    document.all.amoun.value = "0";
    var elSel = document.getElementById('myitems');
    var i;
    for (i = elSel.length - 1; i >= 0; i--) {
        if (elSel.options[i].selected) {
            elSel.remove(i);
        }
    }
}

function purchase() {
    if (document.all.items.value.match(/item1/)) {
        check();
    }
    else if (document.all.items.value.match(/item2/)) {
        check1();
    }
    else if (document.all.items.value.match(/item3/)) {
        check2();
    }
    else if (document.all.items.value.match(/item4/)) {
        check3();
    }
    else if (document.all.items.value.match(/item5/)) {
        check4();
    }
    else if (document.all.items.value.match(/item6/)) {
        check5();
    }
    else if (document.all.items.value.match(/item7/)) {
        check6();
    }
}

function check() {
    if (document.all.points.value >= 100000) {
        alert("Item was successfully purchased and will be added to your item list!");
        document.all.points.value = document.all.points.value - 100000;
        allspend = allspend - (-100000);
        dohitx3();
        document.all.points.style.color = "red";
        setTimeout("document.all.points.style.color='black';", 100);
    }
    else if (document.all.points.value < 100000) {
        alert("You do not have the required points to purchase this item");
    }
}

function check1() {
    if (document.all.points.value >= 250000) {
        alert("Item was successfully purchased and will be added to your item list!");
        document.all.points.value = document.all.points.value - 250000;
        allspend = allspend - (-250000)
        document.all.points.style.color = "red";
        setTimeout("document.all.points.style.color='black';", 100);
        dohitx5();
    }
    else if (document.all.points.value < 250000) {
        alert("You do not have the required points to purchase this item");
    }
}

function check2() {
    if (document.all.points.value >= 1000000) {
        alert("Item was successfully purchased and will be added to your item list!");
        document.all.points.value = document.all.points.value - 1000000;
        allspend = allspend - (-1000000);
        dohitx10();
        document.all.points.style.color = "red";
        setTimeout("document.all.points.style.color='black';", 100);
    }
    else if (document.all.points.value < 1000000) {
        alert("You do not have the required points to purchase this item");
    }
}
function check3() {
    if (document.all.points.value >= 100000) {
        alert("Item was successfully purchased and will be added to your item list!");
        document.all.points.value = document.all.points.value - 100000;
        allspend = allspend - (-100000);
        dopoix2();
        document.all.points.style.color = "red";
        setTimeout("document.all.points.style.color='black';", 100);
    }
    else if (document.all.points.value < 100000) {
        alert("You do not have the required points to purchase this item");
    }
}
function check4() {
    if (document.all.points.value >= 500000) {
        alert("Item was successfully purchased and will be added to your item list!");
        document.all.points.value = document.all.points.value - 500000;
        allspend = allspend - (-500000);
        dopoix5();
        document.all.points.style.color = "red";
        setTimeout("document.all.points.style.color='black';", 100);
    }
    else if (document.all.points.value < 500000) {
        alert("You do not have the required points to purchase this item");
    }
}

function check5() {
    if (document.all.points.value >= 1000000) {
        alert("Item was successfully purchased and will now be activated!");
        document.all.points.value = document.all.points.value - 1000000;
        allspend = allspend - (-1000000);
        setTimeout("addeggs();", 200);
        document.all.points.style.color = "red";
        setTimeout("document.all.points.style.color='black';", 100);
    }
    else if (document.all.points.value < 1000000) {
        alert("You do not have the required points to purchase this item");
    }
}
function check6() {
    how = prompt("How much XP do you want to buy? (1XP costs 5 Points)", "Insert XP amount here (In numbers)");
    how = parseInt(how);
    if (isNaN(how)) {
        alert("This is not a number!");
    }
    else if (how <= 0) {
        alert("XP amount must be bigger than 0!");
    }
    else {
        if (how != null && document.all.points.value >= how * 5 && document.all.rankup.value >= how) {
            document.all.rankup.value = document.all.rankup.value - how - (-1);
            allxp = allxp - (-how) - 1;
            allspend - (-how * 5);
            alert(how + ' XP was purchased for the amount of ' + how * 5 + ' points!');
            document.all.points.value = document.all.points.value - how * 5;
            document.all.points.style.color = "red";
            setTimeout("document.all.points.style.color='black';", 100);
            setTimeout("ranks()", 1);
        }
        else if (how != null && document.all.points.value < how * 5 && document.all.rankup.value >= how) {
            alert('You do not have the required points to purchase this item');
        }
        else if (document.all.rankup.value < how) {
            alert("You can only buy XP for one rank, maximum amount of XP you can buy is " + document.all.rankup.value);
        }
    }
}

function dohitx3() {
    if (na == -1) {
        var x = document.getElementById("myitems");
        var option = document.createElement("option");
        option.text = "Hit x3";
        option.value = "Hit x3";
        x.add(option, x.options[null]);
        document.all.amoun.value = na - (-1);
        na = na - (-1);
    }
    else if (na > 1);
    {
        na = na - (-1);
    }
}
function dohitx5() {
    if (nb == 0) {
        var x = document.getElementById("myitems");
        var option = document.createElement("option");
        option.text = "Hit x5";
        option.value = "Hit x5";
        x.add(option, x.options[null]);
        document.all.amoun.value = nb - (-1);
        nb = nb - (-1);
    }
    else if (nb > 0) {
        nb = nb - (-1);
    }
}

function dohitx10() {
    if (nc == 0) {
        var x = document.getElementById("myitems");
        var option = document.createElement("option");
        option.text = "Hit x10";
        option.value = "Hit x10";
        x.add(option, x.options[null]);
        document.all.amoun.value = nc - (-1);
        nc = nc - (-1);
    }
    else if (nc > 0) {
        nc = nc - (-1);
    }
}

function dopoix2() {
    if (nd == 0) {
        var x = document.getElementById("myitems");
        var option = document.createElement("option");
        option.text = "Points x2";
        option.value = "Points x2";
        x.add(option, x.options[null]);
        document.all.amoun.value = nd - (-1);
        nd = nd - (-1);
    }
    else if (nd > 0) {
        nd = nd - (-1);
    }
}
function dopoix5() {
    if (ne == 0) {
        var x = document.getElementById("myitems");
        var option = document.createElement("option");
        option.text = "Points x5";
        option.value = "Points x5";
        x.add(option, x.options[null]);
        document.all.amoun.value = ne - (-1);
        ne = ne - (-1);
    }
    else if (ne > 0) {
        ne = ne - (-1);
    }
}

function doamount() {
    if (document.all.myitems.value.match(/Hit x3/)) {
        document.all.amoun.value = na;
    }
    else if (document.all.myitems.value.match(/Hit x5/)) {
        document.all.amoun.value = nb;
    }
    else if (document.all.myitems.value.match(/Hit x10/)) {
        document.all.amoun.value = nc;
    }
    else if (document.all.myitems.value.match(/Points x2/)) {
        document.all.amoun.value = nd;
    }
    else if (document.all.myitems.value.match(/Points x5/)) {
        document.all.amoun.value = ne;
    }
}

function viewstats() {
    alert("So far, you clicked the egg " + allc + " times ,earned " + allp + " points and also earned " + allxp + " XP!");
}

function maketok() {
    if (allp <= 0) {
        alert("Cannot generate a token when you do not have any points!");
    }
    else if (tokened > 0) {
        alert("Cannot generate two tokens for the same amount of points!");
    }
    else {

        pass = prompt("Write a password here, password must contain maximum amount of 10 numbers only and must not start with 0:");
        fl = pass.charAt(0);
        if (pass % 1 == 0 && pass != null && pass != isNaN && pass > 0 && pass.length < 11 && fl != 0) {
            tokened = "1";
            a = (Math.random() * 100000);
            a = a.toFixed(0);
            g = pass * 1;
            b = (((allp + g) * a) + g);
            c = (Math.random() * 100000);
            c = c.toFixed(0);
            d = (Math.random() * 100000);
            d = d.toFixed(0);
            document.all.datok.value = b + "nd" + (a * 7) + "nd" + (pass * c) + "nd" + (c * 8) + "nd" + (allp * d) + "nd" + (d * 13);
            alert("A token for the amount of " + allp + " points was generated!");
        }


        else {
            alert("Invalid password!");
        }
    }
}

function token() {
    t = prompt("Enter your token here:");
    pass = prompt("Enter your password here: (Remember that password cannot start with 0!)");
    var str = t;
    var nswz = pass.charAt(0);
    var spliter = str.split("nd");
    var z = (spliter[0] - (spliter[2] / (spliter[3] / 8))) / (spliter[1] / 7) - (spliter[2] / (spliter[3] / 8));
    if (pass != spliter[2] / (spliter[3] / 8)) {
        alert("Invalid password or token!");
    }
    else if (z != (spliter[4] / (spliter[5] / 13))) {
        alert("Invalid password or token!");
    }
    else if (isNaN(z)) {
        alert("Invalid password or token!");
    }
    else if (z % 1 !== 0) {
        alert("Invalid password or token!");
    }
    else if (z < 0) {
        alert("Invalid password or token!");
    }
    else if (started > 0) {
        alert("You have allready started a game, if you want to activate a token, you must start a new game!");
    }
    else if (nswz == 0) {
        alert("Invalid password or token!");
    }
    else {
        alert("The token was activated, " + z + " point(s) will be added now!")
        document.all.points.value = z;
        allp = z;
        started = "1";
    }
}

function achinfo() {
    if (document.all.achievements.value.match(/1/)) {
        alert("Mission: Crack one egg! \nPoints bonus: 50,000 Points \nStatus: " + ach1);
    }
    else if (document.all.achievements.value.match(/2/)) {
        alert("Mission: Crack five eggs! \nPoints bonus: 250,000 Points \nStatus: " + ach2);
    }
    else if (document.all.achievements.value.match(/3/)) {
        alert("Mission: Crack 20 eggs! \nPoints bonus: 1,000,000 Points \nStatus: " + ach3);
    }
    else if (document.all.achievements.value.match(/4/)) {
        alert("Mission: Crack 50 eggs! \nPoints bonus: 2,500,000 Points \nStatus: " + ach4);
    }
    else if (document.all.achievements.value.match(/5/)) {
        alert("Mission: Earn 100,000 XP! \nPoints bonus: 100,000 Points \nStatus: " + ach5);
    }
    else if (document.all.achievements.value.match(/6/)) {
        alert("Mission: Earn 500,000 XP! \nPoints bonus: 500,000 Points \nStatus: " + ach6);
    }
    else if (document.all.achievements.value.match(/7/)) {
        alert("Mission: Earn 1,000,000 XP! \nPoints bonus: 1,000,000 Points \nStatus: " + ach7);
    }
    else if (document.all.achievements.value.match(/8/)) {
        alert("Mission: Spend 1,000,000 Points! \nPoints bonus: 2,000,000 Points \nStatus: " + ach8);
    }
}

function achchecker() {
    if (document.all.eggs.value >= 1 && ach1 != "Completed") {
        ach1 = "Completed";
        setTimeout("document.all.points.style.color='gold';", 200);
        setTimeout("document.all.points.style.color='black';", 700);
        document.all.points.value = document.all.points.value - (-50000);
        allp = allp - (-50000);
    }
    else if (document.all.eggs.value >= 5 && ach2 != "Completed") {
        ach2 = "Completed";
        setTimeout("document.all.points.style.color='gold';", 200);
        setTimeout("document.all.points.style.color='black';", 700);
        document.all.points.value = document.all.points.value - (-250000);
        allp = allp - (-250000);
    }
    else if (document.all.eggs.value >= 20 && ach3 != "Completed") {
        ach3 = "Completed";
        setTimeout("document.all.points.style.color='gold';", 200);
        setTimeout("document.all.points.style.color='black';", 700);
        document.all.points.value = document.all.points.value - (-1000000);
        allp = allp - (-1000000);
    }
    else if (document.all.eggs.value >= 50 && ach4 != "Completed") {
        ach4 = "Completed";
        setTimeout("document.all.points.style.color='gold';", 200);
        setTimeout("document.all.points.style.color='black';", 700);
        document.all.points.value = document.all.points.value - (-2500000);
        allp = allp - (-2500000);
    }
    else if (allxp >= 100000 && ach5 != "Completed") {
        ach5 = "Completed";
        setTimeout("document.all.points.style.color='gold';", 200);
        setTimeout("document.all.points.style.color='black';", 700);
        document.all.points.value = document.all.points.value - (-100000);
        allp = allp - (-100000);
    }
    else if (allxp >= 500000 && ach6 != "Completed") {
        ach6 = "Completed";
        setTimeout("document.all.points.style.color='gold';", 200);
        setTimeout("document.all.points.style.color='black';", 700);
        document.all.points.value = document.all.points.value - (-500000);
        allp = allp - (-500000);
    }
    else if (allxp >= 1000000 && ach7 != "Completed") {
        ach7 = "Completed";
        setTimeout("document.all.points.style.color='gold';", 200);
        setTimeout("document.all.points.style.color='black';", 700);
        document.all.points.value = document.all.points.value - (-1000000);
        allp = allp - (-1000000);
    }
    else if (allspend >= 1000000 && ach8 != "Completed") {
        ach8 = "Completed";
        setTimeout("document.all.points.style.color='gold';", 200);
        setTimeout("document.all.points.style.color='black';", 700);
        document.all.points.value = document.all.points.value - (-2000000);
        allp = allp - (-2000000);
    }
}

var ach1 = "Not completed";
var ach2 = "Not completed";
var ach3 = "Not completed";
var ach4 = "Not completed";
var ach5 = "Not completed";
var ach6 = "Not completed";
var ach7 = "Not completed";
var ach8 = "Not completed";

