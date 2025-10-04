const prixUnit=3700;
const qte=document.getElementById('qte');
const totalSpan=document.getElementById('total');
qte.addEventListener('change',()=>{
  totalSpan.textContent=qte.value*prixUnit;
});

document.getElementById('orderForm').addEventListener('submit',function(e){
  e.preventDefault();
  fetch(this.action,{method:'POST',body:new FormData(this)})
    .then(()=>window.location.href='merci.html')
    .catch(()=>alert('Erreur envoi – réessaye'));
});
