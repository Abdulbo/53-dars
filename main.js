const listBox = document.querySelector(".list-box");
const itemBox = document.querySelectorAll(".item-box");
const btnBox = document.querySelectorAll(".btn-box");


btnBox.forEach((btn, index) => {
    btn.dataset.index = index
})

itemBox.forEach((box, index) => {
    box.dataset.index = index
});

listBox.addEventListener("click" , function(evt) {
    if(evt.target.matches(".btn-box")){
        const itemBox = document.querySelector(".item-box--active");
        if(itemBox){

        }
    }
})
