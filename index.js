const obiect = document.querySelector(".obiect");
const masaObiect = document.querySelector("#masaObiect");
const volumObiect = document.querySelector("#volumObiect");
const densitateLichid = document.querySelector("#densitateLichid");
const submitBtn = document.querySelector("#submitBtn");
const refreshBtn = document.querySelector("#refreshBtn");
const Fa = document.querySelector("#FA");
const g = 10;

function legeaArhimedica(){
  let masaObiectValoare = masaObiect.value;
  let volumObiectValoare = volumObiect.value;
  let densitateLichidValoare = densitateLichid.value;
  let densitateObiect = masaObiectValoare / volumObiectValoare;
  if(densitateObiect > densitateLichidValoare){
    console.log(densitateObiect);
    console.log("Corpul se scufunda");
    obiect.style.animation = "scufundareTotala 1s forwards";
  }
  if(densitateObiect < densitateLichidValoare){
    console.log("Corpul nu se scufunda");
    obiect.style.animation = "Plutire 1s forwards";
  }
  if(densitateObiect == densitateLichidValoare){
    obiect.style.animation = "ScufundarePartiala 1s forwards";
    console.log("Corpul se scufunda partial");
  }
  let FaValoare = densitateLichidValoare * volumObiectValoare * g;
  Fa.innerText = "Valoarea Fortei Arhimedice este de " + FaValoare + "N";
}

submitBtn.addEventListener("click", legeaArhimedica)
refreshBtn.addEventListener("click", () => {
  obiect.style.animation = "none";
  masaObiect.value = "";
  volumObiect.value = "";
  densitateLichid.value = "";
  Fa.innerText = "";
})