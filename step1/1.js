const html1 = document.getElementById("demo");
function loadDoc(){
    var xhttp = new XMLHttpRequest(); //XMLHttpRequest 객체를 만든다.
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){ 
            //xhttp의 status가 request를 받고 response가 준비된경우(4번)이면서
            //200의 "ok" Http 메시지를 받았을때
            html1.innerHTML = this.responseText; //호출한 html문서의 해당 부분에 response의 text를 넣는다. 
        }
    };
    //open과 send 메서드를 통해 서버에 Request를 보낸다
    xhttp.open("GET","ajax_info.html"); 
    xhttp.send();
}