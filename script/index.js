const buttonCatagories=()=>{
    fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    .then((res)=>res.json())
    .then((data)=>showButton(data.categories)
    )
}

const showButton=(categories)=>{
    // find the Element
    const buttonContainer= document.getElementById("button-container");
   for(let category of categories){
    // create the element
    const contentDiv=document.createElement("div");
    contentDiv.innerHTML=`
            <button class="btn btn-sm hover:bg-[#FF1F3D] hover:text-white">${category.category}</button>

    `
    buttonContainer.appendChild(contentDiv)

   }
   
}
buttonCatagories()

// videoes container section

