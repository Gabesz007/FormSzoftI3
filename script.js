document.querySelector('form').addEventListener("submit",
function(event){
    event.preventDefault()
    // console.log(event.target.elements.pizza.children[0].innerHtml)
    console.log(event.target.elements.pizza.children[event.target.elements.pizza.selectedIndex].innerHTML)
    console.log(event.target.elements.meret.value)
    console.log(event.target.elements.feltet[0].checked)
    console.log(event.target.elements.datum.value)

//     A cél:
//     Tisztelt Név , rendeltél x db y cm-es valamilyen pizzát (Pluszfeltétek/ha van/)
//     A kiszállítás datum idő kor fog megtörténi!
//     Üdvözlettel, PizzaPizzázó
// }
)