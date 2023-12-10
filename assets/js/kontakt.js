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







//funkcija u koju prosledjujemo parametre regex izraza i polja koje proveravamo
function proveriPolja(regEx,polje){
    if(!regEx.test(polje.value))
        polje.nextElementSibling.classList.remove('d-none');
    else
        polje.nextElementSibling.classList.add('d-none');
}

//regularni izrazi
let regImePrezime = /^[A-Z][a-z]{2,17}(\s[A-Z][a-z]{2,17})?$/;
let regExEmail=/^[a-z0-9]{1,30}(\.|[a-z0-9])*@gmail\.com$/;
let regTelefon = /^\+\d{1,14}$/;

//pozivanje funkcije za svako polje koje proveravamo
let ime=document.getElementById('name');
document.getElementById('name').addEventListener("blur",function(){
    proveriPolja(regImePrezime,ime);
});

let prezime=document.getElementById('surname');
document.getElementById('surname').addEventListener("blur",function(){
    proveriPolja(regImePrezime,prezime);
});

let mail=document.getElementById('email');
document.getElementById('email').addEventListener("blur",function(){
    proveriPolja(regExEmail,mail);
});

let brTel=document.getElementById('phone');
document.getElementById('phone').addEventListener("blur",function(){
    proveriPolja(regTelefon,brTel);
});

//provera checkBoxa
var isChecked=false;
        var formErrors=0;
        var greskaPol=document.getElementById('greskaPol');
        let rbGender=document.getElementsByName("gender");
        function checkGender(){
        for(let i=0; i<rbGender.length; i++)
        {
            if(rbGender[i].checked)
            {
               isChecked=true;
            }

        }
        if(!isChecked)
        {
            greskaPol.classList.remove("d-none");
            formErrors++;
        }
        else{
            greskaPol.classList.add("d-none");
            formErrors=0;
        }
    }

    let checkbox = document.getElementById('checkbox');
    function proveraCheckBoxa(){
    if (!checkbox.checked) 
        document.getElementById('checkGreska').classList.remove('d-none');
    else 
        document.getElementById('checkGreska').classList.add('d-none');
    }


document.getElementById('readMore').addEventListener("click",function(){
    submit();//dugme za proveru svih polja na kliktaj dugmeta submit
});

//provera za textarea
function proveriMessage(){
    let textBox=document.getElementById('message').value;
    let poruka=document.getElementById('greskaPoruka');
    if(textBox<10)
        poruka.classList.remove('d-none');
    else 
        poruka.classList.add('d-none');
}

function submit(){
    
        proveriPolja(regImePrezime,ime);
        proveriPolja(regImePrezime,prezime);
        proveriPolja(regExEmail,mail);
        proveriPolja(regTelefon,brTel);
        
        checkGender();
        proveriMessage();
        proveraCheckBoxa();
}


//prikazivanje/sakrivanje dugmeta Close za licence agreement
let licence=document.getElementById('licence');
let agreementBlock=document.getElementById('agreementBlock');
licence.addEventListener('click',function(){
    agreementBlock.classList.toggle('d-none');
});        

let closeLicenceButton=document.getElementById('closeLicence');
closeLicenceButton.addEventListener('click',function(){
    agreementBlock.classList.toggle('d-none');
});


/*plug in*/
$(document).ready(function() {
    $(".accordion-content").css("display", "none");
});
$(".accordion-title").click(function () {
          $(".accordion-title").not(this).removeClass("open");
          $(".accordion-title").not(this).next().slideUp(300);
          $(this).toggleClass("open");
          $(this).next().slideToggle(300);
        });




let futerIkonice=[
    {imeIkonice:"facebook-f", link:"https://www.facebook.com/login/"},
    {imeIkonice:"twitter", link:"https://twitter.com/i/flow/login"},
    {imeIkonice:"instagram", link:"https://www.instagram.com/accounts/login/"}
];
let ikoniceFuter="";
for(let i=0;i<3;i++){
    ikoniceFuter+=`<li><a href="${futerIkonice[i].link}" target="_blank"><i class="fa fa-${futerIkonice[i].imeIkonice}"></i></a></li>`;
}
document.getElementById("futerIkonice").innerHTML=ikoniceFuter;

//dinamicko ispisivanje uslova koriscenja
let objFAQ=[
    {tekst:"Product Usage: The products purchased from our store are intended for personal use only and should not be resold or used for commercial purposes without our explicit consent."},
    {tekst:"Warranty: We provide a limited warranty for the functionality of our products. Any physical damage or unauthorized modifications will void the warranty."},
    {tekst:"Software and Updates: Any software provided with the products is subject to the respective software licenses. Updates may be available and we encourage regular updates for security and performance reasons."},
    {tekst:"Privacy and Data: We respect your privacy and handle all personal data in accordance with our privacy policy. Any data collected during transactions will be used solely for the purpose of completing your purchase."},
    {tekst:"Returns and Refunds: Our store has a return and refund policy. Please refer to our policies for detailed information on returns, exchanges, and refunds."},
    {tekst:"Liability: Our liability is limited to the cost of the purchased product. We are not responsible for any indirect, incidental, or consequential damages arising from the use of our products."},
    {tekst:"Customer Support: We strive to provide excellent customer support. For any queries or assistance, feel free to contact our support team."},
    {tekst:"Governing Law: Any disputes arising from this agreement shall be governed by the laws of the jurisdiction in which our store is located."},
    {tekst:"Modifications: We reserve the right to modify or update these terms and conditions at any time. Any changes will be effective immediately upon posting."},
    {tekst:"Acceptance: By using our products, you acknowledge that you have read and agreed to these terms and conditions."}
];
let uslovi="";
for(let i=0;i<objFAQ.length;i++)
    uslovi+=`<li class="rounded">${objFAQ[i].tekst}</li>`;
let usloviKoriscenja=document.querySelector("#listaLicence").innerHTML=uslovi;



let navFuter=[
    {tekst:"Home", link:"index.html"},
    {tekst:"About", link:"about.html"},
    {tekst:"Brand", link:"brand.html"},
    {tekst:"Contact us", link:"#top"},
    {tekst:"Author", link:"author.html"},
];
let navigacijaFuter="";
for(let i=0;i<5;i++){
    navigacijaFuter+=`<li> <a href="${navFuter[i].link}">${navFuter[i].tekst}</a></li>`;
}
document.getElementById("navFuter").innerHTML=navigacijaFuter;
