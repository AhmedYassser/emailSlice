

function AddEmail() {
    var email = document.getElementById("email").value;
    var first = document.getElementById("first");
    var domain = document.getElementById("domain");
    var atindex = email.indexOf("@");
    
    if (email.indexOf("@") == -1) {
        window.alert("enter valid email")
       
    } else {
        
        var namecutting = email.slice(0, atindex);
        var domainCut = email.slice(atindex + 1);
        first.value = namecutting;
        domain.value = domainCut;
    }
}
