var feet=document.getElementById("feet");
var inch=document.getElementById("inches");
feet.addEventListener('input',function(){
    let f=this.value;
    if(f>=0)
    {
    let i=f*12;
    inch.value=i;
    }
    else
    {
        window.alert("Invalid Data");
        this.value=0;
    }
});
inch.addEventListener('input',function(){
    let i=this.value;
    if(i>=0)
    {
        let f=i/12;
        feet.value=f.toPrecision(4);
    }
    else
    {
        window.alert("Invalid Data");
        this.value=0;
    }
    
});
