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
    {slika:"1.png",model:"iPhone 13 Pro Max",},
    {slika:"2.png",model:"Galaxy S21 Ultra",},
    {slika:"3.png",model:"OnePlus 9 Pro",},
    {slika:"4.png",model:"Xiaomi Mi 11 Ultra",},
    {slika:"5.png",model:"Sony Xperia 1 III",},
    {slika:"6.png",model:"Motorola Edge+",}
];
for(let i=0;i<objTel.length;i++){
    blokTelefon+=`<div class="col-xl-4 col-lg-4 col-md-4 col-sm-6 margin">
                  <div class="brand_box rounded">
                  <img src="assets/images/${objTel[i].slika}" alt="img" />
                  <ul class="no-bullets">
                  <li><h2 class="mt-4">${objTel[i].model}</h2></li>
                  <li> <h3>$<strong class="red">100</strong></h3></li>
                  <li><button id="readMore" type="button" class="btn btn-danger my-4"  data-bs-toggle="modal" data-bs-target="#iskacuciProzor">
                  Read more
                  </button></li>
                  </ul>
                  </div>
                  </div>`
}
document.getElementById("telefoni").innerHTML=blokTelefon;

let objNovihTel=[
    {slika:"7.jpg",model:"Asus ROG Phone 5",},
    {slika:"8.png",model:"Realme GT",},
    {slika:"9.jpg",model:"Motorola Edge 20 Pro",},
    {slika:"10.png",model:"Oppo Find X3 Pro",},
    {slika:"11.jpg",model:"Vivo X60 Pro+",},
    {slika:"12.jpg",model:"Lenovo Legion Phone Duel 2",}
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
            <li> <h3>$<strong class="red">100</strong></h3></li>
            <li><button id="readMore" type="button" class="btn btn-danger my-4" data-bs-toggle="modal" data-bs-target="#iskacuciProzor">
            Read more
            </button></li>
            </ul>
            </div>
            </div>`;
            $('#holderNoviBlokovi').append(noviBlok);
        }
    }
    function ukloniBlokove(){
        $('#holderNoviBlokovi').children('#blok').remove();//mora sa id-em blok, inace sa klasom(npr.col-xl-4) dodaje jos blokova svakim kliktajem
    }
}     
document.getElementById("vidiJos").addEventListener("click",prikaziSakrij);    
 





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
//document.getElementById("#futerIkonice").innerHTML=ikoniceFuter;

let navFuter=[
    {tekst:"Home", link:"index.html"},
    {tekst:"About", link:"#top"},
    {tekst:"Brand", link:"brand.html"},
    {tekst:"Contact us", link:"contact.html"},
    {tekst:"Author", link:"author.html"}
];
let navigacijaFuter="";
for(let i=0;i<5;i++){
    navigacijaFuter+=`<li> <a href="${navFuter[i].link}">${navFuter[i].tekst}</a></li>`;
}
$("#navFuter").append(navigacijaFuter);