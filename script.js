// progress
let lines = document.querySelectorAll('.skill span');
let numbers = document.querySelectorAll('.skill .number');

let skills = document.querySelector(".skills");

window.onscroll = function() {

    // get skill Offset top
    //المنطقة الي فوق العنصر
    let skillOffsetTopp = skills.offsetTop,

    // get skill outer
    //طول العنصر
        skillOuter = skills.offsetHeight,

    // get window height
        windowHeight = this.innerHeight,
    
    // get window scroll top
        windowScrollTop = this.pageYOffset;

        // console.log(windowScrollTop);
        // console.log(skillOffsetTopp + skillOuter - windowHeight - 5);

    if (windowScrollTop > ( skillOffsetTopp + skillOuter - windowHeight - 150)) {
        lines.forEach(e=>{
            e.style.width = e.dataset.prog;
        });
    }}