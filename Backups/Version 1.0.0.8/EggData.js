
function ranks()
{
document.all.rankup.value=document.all.rankup.value-1;
document.all.rankup.style.color="red";
setTimeout("document.all.rankup.style.color='black';",100);
if(document.all.rankup.value <= 0 && document.all.rank.value.match(/Begginer/))
{
document.all.rank.value="EggCracker";
document.all.rank.style.color="gold";
setTimeout("document.all.rank.style.color='black';",500)
document.all.rankup.value="50000";
setTimeout("document.all.points.style.color='gold';",200)
setTimeout("document.all.points.style.color='black';",700);
document.all.points.value=document.all.points.value-(-10000);
alert('You have been promoted to EggCracker! You have been awarded 10,000 points!');
}
else if(document.all.rankup.value <= 0 && document.all.rank.value.match(/EggCracker/))
{
document.all.rank.style.color="gold";
setTimeout("document.all.rank.style.color='black';",500)
document.all.rank.value="EggtasticCracker";
document.all.rankup.value="100000";
setTimeout("document.all.points.style.color='gold';",200);
setTimeout("document.all.points.style.color='black';",700);
document.all.points.value=document.all.points.value-(-50000);
alert('You have been promoted to EggtasticCracker! You have been awarded 50,000 points!');
}
else if(document.all.rankup.value <= 0 && document.all.rank.value.match(/EggtasticCracker/))
{
document.all.rank.style.color="gold";
setTimeout("document.all.rank.style.color='black';",500)
document.all.rank.value="AmeggzingCracker";
document.all.rankup.value="250000";
setTimeout("document.all.points.style.color='gold';",200);
setTimeout("document.all.points.style.color='black';",700);
document.all.points.value=document.all.points.value-(-100000);
alert('You have been promoted to AmeggzingCracker! You have been awarded 100,000 points!');
}
else if(document.all.rankup.value <= 0 && document.all.rank.value.match(/AmeggzingCracker/))
{
document.all.rank.style.color="gold";
setTimeout("document.all.rank.style.color='black';",500)
document.all.rank.value="EggstremeCracker";
document.all.rankup.value="500000";
setTimeout("document.all.points.style.color='gold';",200);
setTimeout("document.all.points.style.color='black';",700);
document.all.points.value=document.all.points.value-(-250000);
alert('You have been promoted to EggstremeCracker! You have been awarded 250,000 points!');
}
else if(document.all.rankup.value <= 0 && document.all.rank.value.match(/EggstremeCracker/))
{
document.all.rank.style.color="gold";
setTimeout("document.all.rank.style.color='black';",500)
document.all.rank.value="Eggsterminator";
document.all.rankup.value="1000000";
setTimeout("document.all.points.style.color='gold';",200);
setTimeout("document.all.points.style.color='black';",700);
document.all.points.value=document.all.points.value-(-500000);
alert('You have been promoted to Eggsterminator! You have been awarded 500,000 points!');
}
else if(document.all.rankup.value <= 0 && document.all.rank.value.match(/Eggsterminator/))
{
document.all.rank.style.color="gold";
setTimeout("document.all.rank.style.color='black';",500)
document.all.rank.value="SuperCracker";
document.all.rankup.value="2000000";
setTimeout("document.all.points.style.color='gold';",200);
setTimeout("document.all.points.style.color='black';",700);
document.all.points.value=document.all.points.value-(-1000000);
alert('You have been promoted to SuperCracker! You have been awarded 1,000,000 points!');
}
else if(document.all.rankup.value <= 0 && document.all.rank.value.match(/SuperCracker/))
{
document.all.rank.style.color="gold";
setTimeout("document.all.rank.style.color='black';",500)
document.all.rank.value="CrackingMaster";
document.all.rankup.value="5000000";
setTimeout("document.all.points.style.color='gold';",200);
setTimeout("document.all.points.style.color='black';",700);
document.all.points.value=document.all.points.value-(-2000000);
alert('You have been promoted to CrackingMaster! You have been awarded 2,000,000 points!');
}
else if(document.all.rankup.value <= 0 && document.all.rank.value.match(/CrackingMaster/))
{
document.all.rank.style.color="gold";
setTimeout("document.all.rank.style.color='black';",500)
document.all.rank.value="CrackingIdol";
document.all.rankup.value="10000000";
setTimeout("document.all.points.style.color='gold';",200);
setTimeout("document.all.points.style.color='black';",700);
document.all.points.value=document.all.points.value-(-5000000);
alert('You have been promoted to CrackingIdol! You have been awarded 5,000,000 points!');
}
else if(document.all.rankup.value <= 0 && document.all.rank.value.match(/CrackingIdol/))
{
document.all.rank.style.color="gold";
setTimeout("document.all.rank.style.color='black';",500)
document.all.rank.value="CrackingGod";
document.all.rankup.value="Reached max rank";
setTimeout("document.all.points.style.color='gold';",200);
setTimeout("document.all.points.style.color='black';",700);
document.all.points.value=document.all.points.value-(-10000000);
alert('You have been promoted to CrackingGod! You have been awarded 10,000,000 points!');
}
else if(document.all.rank.value.match(/CrackingGod/))
{
document.all.rankup.value="Reached max rank";
document.all.rankup.style.color="black";
}
}


function hit()
{
ranks();
document.all.count.style.color="red";
setTimeout("document.all.count.style.color='black';",100);
document.all.points.style.color="lime";
setTimeout("document.all.points.style.color='black';",100);
setTimeout("colors();",1);
document.all.count.value=document.all.count.value-1;
document.all.points.value=document.all.points.value-(-1);

if(document.all.itemact.value.match(/Hit x3/))
{
document.all.count.value=document.all.count.value-2;
}
else if(document.all.itemact.value.match(/Hit x5/))
{
document.all.count.value=document.all.count.value-4;
}
else if(document.all.itemact.value.match(/Hit x10/))
{
document.all.count.value=document.all.count.value-9;
}
else if(document.all.itemact.value.match(/Points x2/))
{
document.all.points.value=document.all.points.value-(-1);
}
else if(document.all.itemact.value.match(/Points x5/))
{
document.all.points.value=document.all.points.value-(-4);
}
}


function colors()
{
if(document.all.count.value < 1)
{
document.all.count.value="0";
addeggs();
document.all.color.disabled="true";
alert('Congratulations! You have cracked an egg!');
}
}

function addeggs()
{

if(document.all.eggs.value=='9')
{
document.all.eggs.value=document.all.eggs.value-(-1);
document.all.points.value=document.all.points.value-(-250000);
document.all.points.style.color="gold";
setTimeout("document.all.points.style.color='black';",500);
}

else if(document.all.eggs.value=='99')
{
document.all.eggs.value=document.all.eggs.value-(-1);
document.all.points.value=document.all.points.value-(-500000);
document.all.points.style.color="gold";
setTimeout("document.all.points.style.color='black';",500);
}

else if(document.all.eggs.value=='999')
{
document.all.eggs.value=document.all.eggs.value-(-1);
document.all.points.value=document.all.points.value-(-1000000);
document.all.points.style.color="gold";
setTimeout("document.all.points.style.color='black';",500);
}

else
{
document.all.eggs.value=document.all.eggs.value-(-1);
document.all.eggs.style.color="lime";
setTimeout("document.all.eggs.style.color='black';",100);
document.all.points.value=document.all.points.value-(-100000);
document.all.points.style.color="lime";
setTimeout("document.all.points.style.color='black';",100);
}
}

function reset()
{
if(document.all.count.value <= 0)
{
document.all.count.value="1000000";
document.all.color.disabled=false;
}
else if(document.all.count.value > 0)
{
alert("You didn't open the current egg yet!");
}
}


function activate()
{
if(document.all.itemact.value=='')
{
setTimeout("document.all.itemact.value='';",720000);
document.all.itemact.value=document.all.myitems.value;
remove();
}
else
{
sure();
}
}

function sure()
{
var r=confirm('Are you sure you want to activate another item? The current item will dissapear.');
if(r==true)
{
setTimeout("document.all.itemact.value='';",720000);
document.all.itemact.value=document.all.myitems.value;
remove();
}
}

function remove()
{
  var elSel = document.getElementById('myitems');
  var i;
  for (i = elSel.length - 1; i>=0; i--) {
    if (elSel.options[i].selected) {
      elSel.remove(i);
    }
  }
}
function purchase()
{
if(document.all.items.value.match(/item1/))
{
check();
}
else if(document.all.items.value.match(/item2/))
{
check1();
}
else if(document.all.items.value.match(/item3/))
{
check2();
}
else if(document.all.items.value.match(/item4/))
{
check3();
}
else if(document.all.items.value.match(/item5/))
{
check4();
}
else if(document.all.items.value.match(/item6/))
{
check5();
}
else if(document.all.items.value.match(/item7/))
{
check6();
}
}

function check()
{
if(document.all.points.value >= 100000)
{
alert("Item was successfully purchased and will be added to your item list!");
document.all.points.value=document.all.points.value-100000;
var x=document.getElementById("myitems");
var option=document.createElement("option");
option.text="Hit x3";
x.add(option,x.options[null]);
document.all.points.style.color="red";
setTimeout("document.all.points.style.color='black';",100);
}
else if(document.all.points.value < 100000)
{
alert("You do not have the required points to purchase this item");
}
}

function check1()
{
if(document.all.points.value >= 250000)
{
alert("Item was successfully purchased and will be added to your item list!");
document.all.points.value=document.all.points.value-250000;
var x=document.getElementById("myitems");
var option=document.createElement("option");
option.text="Hit x5";
x.add(option,x.options[null]);
document.all.points.style.color="red";
setTimeout("document.all.points.style.color='black';",100);
}
else if(document.all.points.value < 250000)
{
alert("You do not have the required points to purchase this item");
}
}

function check2()
{
if(document.all.points.value >= 1000000)
{
alert("Item was successfully purchased and will be added to your item list!");
document.all.points.value=document.all.points.value-1000000;
var x=document.getElementById("myitems");
var option=document.createElement("option");
option.text="Hit x10";
x.add(option,x.options[null]);
document.all.points.style.color="red";
setTimeout("document.all.points.style.color='black';",100);
}
else if(document.all.points.value < 1000000)
{
alert("You do not have the required points to purchase this item");
}
}
function check3()
{
if(document.all.points.value >= 100000)
{
alert("Item was successfully purchased and will be added to your item list!");
document.all.points.value=document.all.points.value-100000;
var x=document.getElementById("myitems");
var option=document.createElement("option");
option.text="Points x2";
x.add(option,x.options[null]);
document.all.points.style.color="red";
setTimeout("document.all.points.style.color='black';",100);
}
else if(document.all.points.value < 100000)
{
alert("You do not have the required points to purchase this item");
}
}
function check4()
{
if(document.all.points.value >= 500000)
{
alert("Item was successfully purchased and will be added to your item list!");
document.all.points.value=document.all.points.value-500000;
var x=document.getElementById("myitems");
var option=document.createElement("option");
option.text="Points x5";
x.add(option,x.options[null]);
document.all.points.style.color="red";
setTimeout("document.all.points.style.color='black';",100);
}
else if(document.all.points.value < 500000)
{
alert("You do not have the required points to purchase this item");
}
}

function check5()
{
if(document.all.points.value >= 1000000)
{
alert("Item was successfully purchased and will now be activated!");
document.all.points.value=document.all.points.value-1000000;
setTimeout("addeggs();",200);
document.all.points.style.color="red";
setTimeout("document.all.points.style.color='black';",100);
}
else if(document.all.points.value < 1000000)
{
alert("You do not have the required points to purchase this item");
}
}
function check6()
{
how=prompt("How much XP do you want to buy? (1XP costs 5 Points)", "Insert XP amount here (In numbers)");
how=parseInt(how);
if(isNaN(how))
{
alert("This is not a number!");
}
else if(how <=0)
{
alert("XP amount must be bigger than 0!");
}
else
{
if(how != null && document.all.points.value >= how * 5 && document.all.rankup.value >= how)
{
document.all.rankup.value=document.all.rankup.value-how-(-1);
alert(how+' XP was purchased for '+how*5+' amount of points!');
document.all.points.value=document.all.points.value-how*5;
document.all.points.style.color="red";
setTimeout("document.all.points.style.color='black';",100);
setTimeout("ranks()",1);
}
else if(how != null && document.all.points.value < how*5 && document.all.rankup.value >=how)
{
alert('You do not have the required points to purchase this item');
}
else if(document.all.rankup.value < how)
{
alert("You can only buy XP for one rank, maximum amount of XP you can buy is "+document.all.rankup.value);
}
}
}
