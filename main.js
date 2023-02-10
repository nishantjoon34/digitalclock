var h,m,s;
let str="";
function time() {
    var t=new Date();
    h=t.getHours();
    m=t.getMinutes();
    s=t.getSeconds();
    console.log(h);
    if(h>=12 && h<=17){
        document.getElementById("timing").innerText="GOOD AFTERNOON !!";
    }
    else if(h>=18 && h<=20){
        document.getElementById("timing").innerText="GOOD EVENING !! ";
    }
    else if(h>=21 && h<=23){
        document.getElementById("timing").innerText="GOOD NIGHT !!";
    }
    else{
        document.getElementById("timing").innerText="GOOD MORNING !!";
    }
    if(h>=12){
        if(h!=12){
            h-=12;
        }
        document.getElementById("am").innerText="PM";
        str="PM";
    }
    else{
        document.getElementById("am").innerText="AM";
        str="AM";
    }
    let x="",y="",z="";
    if(h<=9){
        x+='0'; x+=h;
    }
    else{
        x+=h;
    }
    if(m<=9){
        y+='0'; y+=m;
    }
    else{
        y+=m;
    }
    if(s<=9){
        z+='0'; z+=s;
    }
    else{
        z+=s;
    }
    document.getElementById("tt").innerText=x;
    document.getElementById("mm").innerText=y;
    document.getElementById("ss").innerText=z;
}
setInterval(time,1000);


const setEverything=()=>{
    let str1=document.getElementById("cars1").value;
    let str2=document.getElementById("cars2").value;
    let str3=document.getElementById("cars3").value;
    let str4=document.getElementById("cars4").value;

    document.getElementById("aa").innerText=str1;
    document.getElementById("bb").innerText=str2;
    document.getElementById("cc").innerText=str3;
    document.getElementById("dd").innerText=str4;

    let hours1=parseInt(str1[0]);
    let c=parseInt(str1[1]);
    hours1=hours1*10+c;
    let cur=str1[2]; cur+=str1[3];
    if(cur==str){
        if(h==hours1){
            document.getElementById("text").innerText="GRAB SOME HEALTHY BREAKFAST !!";
            document.getElementById("changeimage").src="./Component 30 – 1.jpg";
        }
    }
    hours1=parseInt(str2[0]);
    c=parseInt(str2[1]);
    hours1=hours1*10+c;
    cur=str2[2]; cur+=str2[3];
    if(cur==str){
        console.log("YES")
        if(h==hours1){
            document.getElementById("text").innerText="LETS'S HAVE SOME LUNCH !!";
            document.getElementById("changeimage").src="./Component 31 – 1.jpg";
        }
    }
    hours1=parseInt(str3[0]);
    c=parseInt(str3[1]);
    hours1=hours1*10+c;
    cur=str3[2]; cur+=str3[3];
    if(cur==str){
        if(h==hours1){
            document.getElementById("text").innerText="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING !!";
            document.getElementById("changeimage").src="./lunch_image@2x.jpg";
        }
    }
    hours1=parseInt(str4[0]);
    c=parseInt(str4[1]);
    hours1=hours1*10+c;
    cur=str4[2]; cur+=str4[3];
    if(cur==str){
        if(h==hours1){
            document.getElementById("text").innerText="CLOSE YOUR EYES AND GO TO SLEEP !!";
            document.getElementById("changeimage").src="./Component 32 – 1.jpg";
        }
    }
}