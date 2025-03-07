var bg=document.getElementById('cc');
var stf=document.getElementById('stp');
var fs=document.getElementById('fst');
var pr=document.getElementById('prvbn');
var tx=document.getElementById('val');
var prprp=document.getElementById('prpr');

var st=[];
var ht,jk;

function clr(){
    var ltr='0123456789ABCDEF';
    var c='#';
    for(var i=0;i<6;i++)
    {
        c+=ltr[Math.floor(Math.random() * 16)];
    }
    st.push(c);
    return c;
}

bg.addEventListener('click',cbg);
function cbg(){
    clr();
    ht=st[st.length-1];
    document.body.style.backgroundColor=ht;
    tx.textContent=ht;
    prprp.textContent='';
    clearInterval(jk);
}

pr.addEventListener('click',prvf);
function prvf(){
    document.body.style.backgroundColor=st[st.length-2];
    prprp.textContent=st[st.length-2];
    tx.textContent='';
    clearInterval(jk);
}

stf.addEventListener('click',nxt);
function nxt(){
    clearInterval(jk);
}

fs.addEventListener('click',bbb);
function bbb(){
    if(jk){
        clearInterval(jk);
    }
    jk=setInterval(function(){
        document.body.style.backgroundColor=clr();
        tx.textContent=st[st.length-1];
        prprp.textContent='';
    },1000);
}