if(localStorage.length){
    window.location.href="./index.html"
}else{
    let emailValue, passwordValue;
    
    let formulaire = document.getElementsByTagName("form")[0];
    
    let submitBtn = document.getElementById("submit-btn");
    
    let recupererDonnees = ()=>{
    
        let email = document.getElementById("email");
    
        let password = document.getElementById("password");
    
        emailValue = email.value ; 
        passwordValue = password.value;
    
    }
    
    
    let submitFeature = async ()=>{
        recupererDonnees();
        await fetch("http://localhost:5678/api/users/login", {
            method: "POST",
            headers: {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                email: emailValue,
                password: passwordValue 
            })
        })
        .then(res=>{
            if(res.ok){
                return res.json();
            }else{
                alert("mot de passe incorrect");
            }
        })
    
        .then(res=>{
            console.log(res);
            localStorage.setItem("userId", res.userId);
            localStorage.setItem("token", res.token);
            window.location.href="./index.html";
        })
        .catch(err=>{
            console.log(err);
        })
    }
    
    submitBtn.addEventListener("click", (e)=>{
        e.preventDefault();
        submitFeature();
    })
    
    
}

