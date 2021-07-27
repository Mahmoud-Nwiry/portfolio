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
    }else{
        lines.forEach(e=>{
            e.style.width = 0;
        });
    }

    if(pageYOffset > 10)
        document.querySelector('nav').classList.add("scrolled");
    else
        document.querySelector('nav').classList.remove("scrolled");
}

let mneu = document.querySelector(".mneu i");
let linksList = document.querySelector('.links');
mneu.addEventListener('click', ()=>{
    linksList.classList.toggle('active');
});

let links = document.querySelectorAll('.links a');
links.forEach(e=>{
    e.addEventListener('click',()=>{
        linksList.classList.toggle('active');
    })
})
document.addEventListener('click',(e)=>{
    if(e.target !== mneu && e.target !== linksList){
        if(linksList.classList.contains('active')){
            linksList.classList.toggle('active')
        }
    }
})