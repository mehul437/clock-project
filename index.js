let wakee=""
let lucnhh=""
let napp=""
function timer(){
    const x=new Date();
    if(x.getHours()>11){
        document.getElementById("am").innerHTML="PM"
    }
    else{
        document.getElementById("am").innerHTML="AM"
    }
    document.getElementById("am")
    let hr=(x.getHours() % 12);
    let min = (x.getMinutes() < 10 ? '0' : '') + x.getMinutes();
    let sec = (x.getSeconds() < 10 ? '0' : '') + x.getSeconds();
    if(hr==0)
    {
        hr=12
    }
    if(hr<10){
        hr='0'+hr
    }
    document.getElementById("hours").innerHTML=hr
    document.getElementById("min").innerHTML = min
    document.getElementById("sec").innerHTML = sec
   
   
    let time=document.getElementById("hours").innerHTML
    let a=document.getElementById("am").innerHTML
    switch(true){
        case (wakee.includes(time)&&wakee.includes(a)):
            let ema=document.getElementById("enjoying");
            ema.src="wake.png"
            let quote=document.getElementById("fun")
            quote.innerText=" WAKE UP !!!"
            break;
        case (lunchh.includes(time)&&lunchh.includes(a)):
            let em = document.getElementById("enjoying");
            em.src = "enjoy.jpeg"
            let quot=document.getElementById("fun")
            quot.innerText = "LET'S HAVE SOME LUNCH !!!"
            break;
        case (napp.includes(time) && napp.includes(a)):
            let emag = document.getElementById("enjoying");
            emag.src = "nap.png"
            let quoti = document.getElementById("fun")
            quoti.innerText = "GOOD NIGHT !!!"
            break;
        default:
            let e=document.getElementById("enjoying");
            e.src="fimages.png"
            let qu = document.getElementById("fun")
            qu.innerText = ""
            break;
       
    }
    
   
}
setInterval(timer,1000)


let child = parent()

function parent() {

    let box = document.createElement("div");
    box.setAttribute("id", "box");
    box.style.height = "110px"
    box.style.width = "250px";
    box.style.backgroundColor = " rgb(175, 29, 175)";
    box.style.borderRadius = "7px"
    box.style.position = "absolute"
    box.style.bottom = "20px";
    box.style.left = "120px"

    let waketime = document.createElement("p");
    waketime.setAttribute("id", "wakedata");
    waketime.style.fontSize = "18px"
    waketime.style.color = "white"
    waketime.style.marginTop = "10px"
    waketime.style.marginLeft = "15px"

    let lunchtime = document.createElement("p");
    lunchtime.setAttribute("id", "lunchdata");
    lunchtime.style.fontSize = "18px"
    lunchtime.style.color = "white"
    lunchtime.style.marginTop = "10px"
    lunchtime.style.marginLeft = "15px"

    let naptime = document.createElement("p");
    naptime.setAttribute("id", "napdata");
    naptime.style.fontSize = "18px"
    naptime.style.color = "white"
    naptime.style.marginTop = "10px"
    naptime.style.marginLeft = "15px"
    return function set() {

        document.getElementById("main").appendChild(box);
        let waky = document.getElementById("wake").value
        waketime.innerText = "Wake up : " + waky
        document.getElementById("box").appendChild(waketime)

        let lunchy = document.getElementById("lunch").value
        lunchtime.innerText = "Lunch : " + lunchy
        document.getElementById("box").appendChild(lunchtime)

        let napy = document.getElementById("nap").value
        naptime.innerText = "Nap : " + napy
        document.getElementById("box").appendChild(naptime)

        wakee = (document.getElementById("wake").value).slice(0, 5)
        lunchh = (document.getElementById("lunch").value).slice(0, 5)
        napp = (document.getElementById("nap").value).slice(0, 5)

    }


}
//    console.log(document.getElementById('wake').value)

//     //  let data=document.getElementById("wake").value
//     //  let arr=data.slice(0,5)
//     //  if(arr.includes(hr)){
//     //      console.log("present")
//     //  }
//     //  else{
//     //      console.log("ho");
//     //  }
    