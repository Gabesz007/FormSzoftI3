console.log("hello world")
document.querySelector('form').addEventListener("submit",
function(event){
    event.preventDefault()
    // console.log(event.target.elements.pizza.children[0].innerHtml)
    let nev = event.target.elements.nev.value
    const pizzaNev = event.target.elements.pizza.children[event.target.elements.pizza.selectedIndex].innerHTML
    const pizzaMeret = event.target.elements.meret.value
    const db = event.target.elements.db.value
    const feltet1 = event.target.elements.feltet1
    const feltet2 = event.target.elements.feltet2
    const feltetValasztva1 = feltet1.checked
    const feltetValasztva2 = feltet2.checked
    const megadottDatum = event.target.elements.datum.value
    let datumText
    if (megadottDatum == ""){
        datumText = "hamarosan";
    }
    else{
        const datum = event.target.elements.datum.value.split("T")
        const date = datum[0]
        const time = datum[1]
        datumText = `${date}-án/én ${time}-kor`
    }

    if (nev == ""){
        nev = "Megrendelő";
    }

    let feltet = ""
    if (feltetValasztva1 && feltetValasztva2 ){
        feltet = ` ${feltet1.value} és ${feltet2.value} feltéttel`
    }
    else if (feltetValasztva1){
            feltet = ` ${feltet1.value} feltéttel`
    }
    else if (feltetValasztva2){
            feltet = ` ${feltet2.value} feltéttel`
    }
    
    let text = `Tisztelt ${nev}!\nRendeltél ${db} db ${pizzaMeret} cm-es ${pizzaNev} pizzát${feltet}.\nA kiszállítás ${datumText} meg fog történni!\nÜdvözlettel, PizzaPizzázó`
    console.log(text)
})
onsubmit = (event) => {}