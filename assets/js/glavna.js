
let nizImena=['Home','About','Brand','Contact Us','Author'];
let nizPutanja=['index.html','about.html','brand.html','contact.html','author.html'];

let navContent="";
for(let i=0;i<nizImena.length;i++)
    navContent+=`<li><a href="${nizPutanja[i]}">${nizImena[i]}</a></li>`;
document.getElementById('navigacija').innerHTML=navContent;

let nizIkonicaNavPutanja=['assets/icon/call.png','assets/icon/email.png','assets/icon/loc.png'];
let nizIkonicaNavText=['(+71)9876543109','demo@gmail.com','Location'];
let nizIkonicaNavAlt=['phone icon','mail icon','location icon'];

let navContentIkonice="";
for(let i=0;i<nizIkonicaNavPutanja.length;i++)
    navContentIkonice+=`<li><img src="${nizIkonicaNavPutanja[i]}" alt="${nizIkonicaNavAlt[i]}">${nizIkonicaNavText[i]}</li>`;
document.getElementById("navIkonice").innerHTML=navContentIkonice;

let blokTelefon="";
let objTel=[
    {slika:"1.png",model:"iPhone 13 Pro Max", cena:"1000$", id:1, ram:"16GB",cpu:"snapdragon",baterry:"5000mAh"},
    {slika:"2.png",model:"Galaxy S21 Ultra", cena:"950$",id:2, ram:"12GB",cpu:"snapdragon",baterry:"4500mAh"},
    {slika:"3.png",model:"OnePlus 9 Pro", cena:"875$",id:3, ram:"8GB",cpu:"snapdragon",baterry:"3000mAh"},
    {slika:"4.png",model:"Xiaomi Mi 11 Ultra", cena:"850$",id:4, ram:"24GB",cpu:"snapdragon",baterry:"5500mAh"},
    {slika:"5.png",model:"Sony Xperia 1 III", cena:"900$",id:5, ram:"6GB",cpu:"snapdragon",baterry:"4200mAh"},
    {slika:"6.png",model:"Motorola Edge+", cena:"790$",id:6, ram:"8GB",cpu:"snapdragon",baterry:"5000mAh"}
];
for(let i=0;i<objTel.length;i++){
    blokTelefon+=`<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin">
                  <div class="brand_box rounded font">
                  <img src="assets/images/${objTel[i].slika}" alt="img" />
                  <ul class="no-bullets">
                  <li><h2 class="mt-4">${objTel[i].model}</h2></li>
                  <li> <h3>$<strong class="red">${objTel[i].cena}</strong></h3></li>
                  <li><button data-id="${objTel[i].id}" type="button" class="readMore btn crveno-bg my-4"  data-bs-toggle="modal" data-bs-target="#iskacuciProzor">
                  Read more
                  </button></li>
                  </ul>
                  </div>
                  </div>`
}
document.getElementById("telefoni").innerHTML=blokTelefon;






let objNovihTel=[
    {slika:"7.jpg",model:"Asus ROG Phone 5",cena:"700$",id:7, ram:"11GB",cpu:"snapdragon",baterry:"4700mAh"},
    {slika:"8.png",model:"Realme GT",cena:"680$",id:8, ram:"7GB",cpu:"snapdragon",baterry:"3700mAh"},
    {slika:"9.jpg",model:"Motorola Edge 20 Pro",cena:"820$",id:9, ram:"21GB",cpu:"snapdragon",baterry:"6000mAh"},
    {slika:"10.png",model:"Oppo Find X3 Pro",cena:"700$",id:10, ram:"31GB",cpu:"snapdragon",baterry:"5200mAh"},
    {slika:"11.jpg",model:"Vivo X60 Pro+",cena:"725$",id:11, ram:"5GB",cpu:"snapdragon",baterry:"4150mAh"},
    {slika:"12.jpg",model:"Lenovo Legion Phone Duel 2",cena:"780$",id:12, ram:"9GB",cpu:"snapdragon",baterry:"4700mAh"}
];

/*<h2 class="mt-4">${objTel[i].model}</h2>
                  <h3>$<strong class="red">100</strong></h3>
                  <button type="button" class="btn btn-danger my-2" data-bs-toggle="modal" data-bs-target="#iskacuciProzor">
                  Klikni me
                  </button>*/

let brojac=0;
function prikaziSakrij(){
    brojac++;
   if(brojac%2==1){
        $('#holderNoviBlokovi').removeClass('d-none');
        dodajBlokove();
        $('#vidiJos').text("Show less");
   }     
    else {
        $('#holderNoviBlokovi').addClass('d-none');
        ukloniBlokove();
        $('#vidiJos').text("Show more");
    }

    function dodajBlokove(){
        for(let i=0;i<6;i++){
            var noviBlok=`<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin" id="blok">
                          <div class="brand_box rounded">
            <img src="assets/images/${objNovihTel[i].slika}" alt="img" />
            <ul class="no-bullets">
            <li><h2 class="mt-4">${objNovihTel[i].model}</h2></li>
            <li> <h3>$<strong class="red">${objNovihTel[i].cena}</strong></h3></li>
            <li><button type="button" class="readMore btn crveno-bg my-4" data-bs-toggle="modal" data-id="${objNovihTel[i].id}" data-bs-target="#iskacuciProzor">
            Read more
            </button></li>
            </ul>
            </div>
            </div>`;
            $('#holderNoviBlokovi').append(noviBlok);
            dodajEventove();
        }
    }
    function ukloniBlokove(){
        $('#holderNoviBlokovi').children('#blok').remove();
    }
}     
document.getElementById("vidiJos").addEventListener("click",prikaziSakrij);    
 

function prikaziModal(){
    var id = $(this).data("id")
    var trenutniObjekat = null;
    for(var i = 0;i<objTel.length;i++){
        if(objTel[i].id == id){
            trenutniObjekat = objTel[i];
            break;
        }
    }
    if(!trenutniObjekat){
        for(var i = 0;i<objNovihTel.length;i++){
            if(objNovihTel[i].id==id){
                trenutniObjekat = objNovihTel[i];
                break;
            }
        }
    }
    //ispisujes sve iz trenutnog objekta
    var ispis=`
    <div class="modal-dialog" role="document">
      <div class="modal-content col text-center">
        <div class="modal-header">
          <h5 class="modal-title text-dark" id="mojModalLabel">${trenutniObjekat.model}</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Zatvori">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
        <img src="assets/images/${trenutniObjekat.slika}" alt="image"/>
        <p class="text-dark pt-4">Price: <span class="crveno">${trenutniObjekat.cena}</span></p>
        <ul class="text-dark">
            <li>RAM: <span class="crveno">${trenutniObjekat.ram}</span></li>
            <li>CPU: <span class="crveno">${trenutniObjekat.cpu}</span></li>
            <li>Baterry: <span class="crveno">${trenutniObjekat.baterry}</span></li>
        </ul>
        </div>
        <div class="modal-footer justify-content-right">
          
          <button type="button" class="bg-dark btn btn-primary text-white border-0" data-dismiss="modal">Izlaz</button>
        </div>
      </div>
    </div>

    `;
document.getElementById("modalHolder").innerHTML=ispis;
$("#modalHolder").modal("show");
     
}
function dodajEventove(){
    var buttons = document.getElementsByClassName("readMore");
    for(var i = 0;i<buttons.length;i++){
        buttons[i].addEventListener("click", prikaziModal);
    }
}
dodajEventove();




let objSlajderKom=[
    {naslov:"John Stockton",tekst:"Outstanding Customer Service: The store staff went above and beyond to help me find the perfect phone. Their knowledge and willingness to assist made my shopping experience exceptional."},
    {naslov:"James Balwin",tekst:"Great Product Selection: I was impressed by the wide range of phones available. The store had the latest models and offered great deals, making it easy to find exactly what I was looking for."},
    {naslov:"Sophie Smith",tekst:"Efficient and Reliable: The purchasing process was smooth and efficient. From browsing to checkout, everything was well-organized, and the delivery was prompt. A trustworthy store I'd recommend to anyone."}
];


//Slajder sa utiscima kupaca
 let i=0;
 function menjajSlajdKomentar(){
     if(i==0 || i==1)
         i++;
    else i = 0;
     console.log(i);
     ispisivnjeSlajda(i);
 }
 menjajSlajdKomentar();
 setInterval(menjajSlajdKomentar,10000);

 function ispisivnjeSlajda(i){
     document.getElementById("naslovKom").innerHTML=objSlajderKom[i].naslov;
     document.getElementById("textKom").innerHTML=objSlajderKom[i].tekst;
 }




 




let futerIkonice=[
    {imeIkonice:"facebook-f", link:"https://www.facebook.com/login/"},
    {imeIkonice:"twitter", link:"https://twitter.com/i/flow/login"},
    {imeIkonice:"instagram", link:"https://www.instagram.com/accounts/login/"}
];
let ikoniceFuter="";
for(let i=0;i<3;i++){
    ikoniceFuter+=`<li><a href="${futerIkonice[i].link}" target="_blank"><i class="fa fa-${futerIkonice[i].imeIkonice}"></i></a></li>`;
}
$("#futerIkonice").append(ikoniceFuter);


let navFuter=[
    {tekst:"Home", link:"#top"},
    {tekst:"About", link:"about.html"},
    {tekst:"Brand", link:"brand.html"},
    {tekst:"Contact us", link:"contact.html"},
    {tekst:"Author", link:"author.html"}
];
let navigacijaFuter="";
for(let i=0;i<5;i++){
    navigacijaFuter+=`<li> <a href="${navFuter[i].link}">${navFuter[i].tekst}</a></li>`;
}
$("#navFuter").append(navigacijaFuter);
