//For selectItem.html
//script to add css when item is clicked
function selectItem(id){
    //adds green border and check img on click
    const activeItem = document.getElementById(id);
    const child = activeItem.querySelector(".checkedBackGround");
    const limit = 4;
    const currentCnt = document.querySelectorAll('.selectedItems').length;

    //sets a limit of 4 items
    if(currentCnt <  4 || activeItem.classList.contains('selectedItems')){
        child.classList.toggle("active");
        activeItem.classList.toggle("selectedItems");

        console.log(currentCnt);
    };
};
