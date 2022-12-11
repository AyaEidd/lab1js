   
        var xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
        if (this.readyState == 4 && this.status == 200) {
        var obdata=JSON.parse(xhttp.responseText);
        const data=obdata.data;
        

        data.forEach(function(user) {
          var email=user["email"];
          var image=user["avatar"];
          var p=document.createElement('div');
          p.innerHTML=email;
          document.getElementById('demo').appendChild(p);
          var s=document.createElement('div');
          s.innerHTML="<img src= '"+image+"'>";
          document.getElementById('demo').appendChild(s);

      });
      
        
    }
};
xhttp.open("GET","https://reqres.in/api/users?page=2" , true);
xhttp.send();



