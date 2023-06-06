function onOff(){
    document.querySelector("#modal")
            .classList
            .toggle("hide")

    document.querySelector("body")
            .classList
            .toggle("hideScroll")

    document.querySelector("#modal")
    .classList.toggle("addScroll")
}

function checkFields(event){

        const valuesToCheck = [
                "title",
                "category",
                "image",
                "description",
                "link",
        ]


        const isEmpty = valuesToCheck.find(function(value){

                const checkIfisString = typeof typeof event.target[value].value === "string"
                const checkIfisEmpty = !event.target["value"].value.trim()
               
                if (checkIfisString && checkIfisEmpty ){
                        return true;
                }
       })

        if(isEmpty){
                event.preventDefault()
                alert("Por favor, preenchar todos os campos !")
       }
}
