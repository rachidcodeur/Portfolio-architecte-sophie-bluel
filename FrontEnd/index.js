const galleryContainer = document.querySelector(".gallery");

/* Definition des fonctions */

let regenererDonnes = async () =>{

    await fetch("http://localhost:5678/api/works")

    .then((response)=>{
        return response.json();
    })

    .then((donnees) =>{

        donnees.forEach(realisation => {
            let figure = document.createElement("figure"),
                image = document.createElement("img"),
                figcaption = document.createElement("figcaption");
            
            image.setAttribute("src", realisation.imageUrl);
            figcaption.textContent = realisation.title;
            console.log(figcaption);
            figure.appendChild(image);
            figure.appendChild(figcaption);
            
            galleryContainer.appendChild(figure);
            
        });
    })
    
}

let regenererCategories = async ()=>{

    await fetch ("http://localhost:5678/api/categories")

    .then((response)=>{
        return response.json();
    })

    .then((categories)=>{
        let categoriesContainer = document.querySelector(".filter");
        const setCategories = new Set();
        categoriesContainer.innerHTML = "<div style=\"padding:10px 12px;\">Tous</div>"
        categories.forEach(categorie => {
            setCategories.add(categorie);
        });

        setCategories.forEach(element =>{
            let categorieButton = document.createElement("div");
            categorieButton.textContent = element.name;
            categoriesContainer.appendChild(categorieButton);
        })

    })
}

regenererDonnes();
regenererCategories();


console.log(localStorage.getItem("token"))




