window.onload=function(){
    const blocks=document.querySelectorAll(".slider__block");
    const line=document.querySelector(".slider__blocks");
    let count=0;
    let width=Number(blocks[0].offsetWidth)+Number(window.getComputedStyle(blocks[0], null).getPropertyValue("margin-right").replace("px",""));
    document.querySelector(".button-next").addEventListener("click",function(){
        count++;
        if(count>=blocks.length){
            count=0;
            for(let i=blocks.length;i>0;i--){
                blocks[i-1].style.opacity="1";
            }
        }
        line.style.transform="translate(-"+width*count+"px)";
        blocks[count-1].style.opacity="0";
    });
    document.querySelector(".button-prev").addEventListener("click",function(){
        count--;
        if(count<0){
            count=blocks.length-1;
            for(let i=blocks.length;i>0;i--){
                blocks[i-1].style.opacity="0";
            }
        }
        line.style.transform="translate(-"+width*count+"px)";
        blocks[count].style.opacity="1";
    });
}