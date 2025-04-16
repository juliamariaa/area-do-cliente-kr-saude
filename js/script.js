let btnIniciarLoading = document.getElementById("iniciar-loading");
let btnPararLoading = document.getElementById("parar-loading");
let loading = document.getElementById("loading");

btnIniciarLoading.addEventListener("click", () => {
  document.body.style.opacity = "0.5";
  document.body.style.background = "#000";
  loading.classList.remove("d-none");  
  loading.classList.add("d-flex");    
});

btnPararLoading.addEventListener("click", () => {
  document.body.style.opacity = "1";
  document.body.style.background = "none";
  loading.classList.remove("d-flex");  
  loading.classList.add("d-none");     
});
