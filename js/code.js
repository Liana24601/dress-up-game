var state = {
    i: 0,
    j: 0,
    k: 0,
    l: 0
}

var hair = document.getElementById("hair");
var necklace = document.getElementById("necklace");
var top = document.getElementById("top");
var bottom = document.getElementById("bottom");

hair.setAttribute("class", "blankhair");
necklace.setAttribute("class", "blanknecklace");
top.setAttribute("class", "blanktop");
bottom.setAttribute("class", "blankbottom");

function getRandom1to4() {
  return Math.floor(Math.random() * 4) + 1;
}

function randomoutfit() {
    var hair = document.getElementById("hair");
    var necklace = document.getElementById("necklace");
    var top = document.getElementById("top");
    var bottom = document.getElementById("bottom");
    hair.setAttribute("class", "hair" + getRandom1to4());
    top.setAttribute("class", "top" + getRandom1to4());
    necklace.setAttribute("class", "necklace" + getRandom1to4());
    bottom.setAttribute("class", "bottom" + getRandom1to4());
}

function resetoutfit() {
    var hair = document.getElementById("hair");
    var necklace = document.getElementById("necklace");
    var top = document.getElementById("top");
    var bottom = document.getElementById("bottom");
    hair.setAttribute("class", "blankhair");
    necklace.setAttribute("class", "blanknecklace");
    top.setAttribute("class", "blanktop");
    bottom.setAttribute("class", "blankbottom");
}

function nexthair()
{
    console.log(state.i);
    if (state.i==0){
        hair.setAttribute("class", "hair1");
        state.i++;
        console.log(state.i);
    }
    else
        if(state.i==1){
            hair.setAttribute("class", "hair2");
            state.i++;
            console.log(state.i);
        }
    else
        if(state.i==2){
            hair.setAttribute("class", "hair3");
            state.i++;
            console.log(state.i);
        }
    else
        if(state.i==3){
            hair.setAttribute("class", "hair4");
            state.i=0;
        }
}

function backhair()
{
    console.log(state.i);
    if (state.i==3){
        hair.setAttribute("class", "hair3");
        state.i--;
        console.log(state.i);
    }
    else
        if(state.i==2){
            hair.setAttribute("class", "hair2");
            state.i--;
            console.log(state.i);
        }
    else
        if(state.i==1){
            hair.setAttribute("class", "hair1");
            state.i--;
            console.log(state.i);
        }
    else
        if(state.i==0){
            hair.setAttribute("class", "hair4")
            state.i=3;
        }
}

function nextnecklace()
{
    console.log(state.j);
    if (state.j==0){
        necklace.setAttribute("class", "necklace1");
        state.j++;
        console.log(state.j);
    }
    else
        if(state.j==1){
            necklace.setAttribute("class", "necklace2");
            state.j++;
            console.log(state.j);
        }
    else
        if(state.j==2){
            necklace.setAttribute("class", "necklace3");
            state.j++;
            console.log(state.j);
        }
    else
        if(state.j==3){
            necklace.setAttribute("class", "necklace4")
            state.j=0;
        }
}

function backnecklace()
{
    console.log(state.j);
    if (state.j==3){
        necklace.setAttribute("class", "necklace3");
        state.j--;
        console.log(state.j);
    }
    else
        if(state.j==2){
            necklace.setAttribute("class", "necklace2");
            state.j--;
            console.log(state.j);
        }
    else
        if(state.j==1){
            necklace.setAttribute("class", "necklace1");
            state.j--;
            console.log(state.j);
        }
    else
        if(state.j==0){
            necklace.setAttribute("class", "necklace4")
            state.j = 3;
        }
}

function nexttop()
{
    console.log(state.k);
    var top = document.getElementById("top");
    if (state.k==0){
        top.setAttribute("class", "top1");
        state.k++;
        console.log(state.k);
    }
    else
        if(state.k==1){
            top.setAttribute("class", "top2");
            state.k++;
            console.log(state.k);
        }
    else
        if(state.k==2){
            top.setAttribute("class", "top3");
            state.k++;
            console.log(state.k);
        }
    else
        if(state.k==3){
            top.setAttribute("class", "top4")
            state.k=0;
        }
}

function nextbottom()
{
    console.log(state.l);
    if (state.l==0){
        bottom.setAttribute("class", "bottom1");
        state.l++;
        console.log(state.l);
    }
    else
        if(state.l==1){
            bottom.setAttribute("class", "bottom2");
            state.l++;
            console.log(state.l);
        }
    else
        if(state.l==2){
            bottom.setAttribute("class", "bottom3");
            state.l++;
            console.log(state.l);
        }
    else
        if(state.l==3){
            bottom.setAttribute("class", "bottom4")
            state.l=0;
        }
}

function backbottom()
{
    console.log(state.l);
    if (state.l==3){
        bottom.setAttribute("class", "bottom3");
        state.l--;
        console.log(state.l);
    }
    else
        if(state.l==2){
            bottom.setAttribute("class", "bottom2");
            state.l--;
            console.log(state.l);
        }
    else
        if(state.l==1){
            bottom.setAttribute("class", "bottom1");
            state.l--;
            console.log(state.l);
        }
    else
        if(state.l==0){
            bottom.setAttribute("class", "bottom4");
            state.l = 3;
        }
}

function backtop()
{
    console.log(state.k);
    var top = document.getElementById("top");
    if (state.k==3){
        top.setAttribute("class", "top3");
        state.k--;
        console.log(state.k);
    }
    else
        if(state.k==2){
            top.setAttribute("class", "top2");
            state.k--;
            console.log(state.k);
        }
    else
        if(state.k==1){
            top.setAttribute("class", "top1");
            state.k--;
            console.log(state.k);
        }
    else
        if(state.k==0){
            top.setAttribute("class", "top4");
            state.k = 3;
        }
}

/* Lilly the Bunny is choosing an outfit for today, and she needs your help!

Art Credit
- All artistic assets such as the outfit items, mannequin base, button designs, and backgrounds were created by me. */