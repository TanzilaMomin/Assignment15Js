function handleSubmit(){
    var un=document.getElementById('user').value 
    var emid=document.getElementById('email').value  
    var mob=document.getElementById('mobile').value 
    var result=un+emid+mob

document.getElementById('show').textContent=result
}
