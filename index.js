var len=document.querySelectorAll("button").length;
for (var i=0;i<len;i++){
  document.querySelectorAll(".btn")[i].addEventListener("click",function(){
    switch (this.innerHTML) {
      case "=":
        var num1=document.querySelector(".output").innerHTML;
        var num2=eval(num1);
        document.querySelector(".output").innerHTML=num2;
        break;
      case "C":
        document.querySelector(".output").innerHTML="";
        break;
      default:
        document.querySelector(".output").innerHTML+=this.innerHTML;
        break;
    }
  });
}