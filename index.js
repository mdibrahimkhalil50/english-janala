const loadData=()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all")// akta poromise deve
    .then((res)=>res.json())
    .then((json)=>displayData(json.data));

};
const displayData=(lessons)=>{
    // console.log(lesson);

    //1 get the container and empty
   const levelContainer= document.getElementById("level-container");
   levelContainer.innerText="";

    //2 get into  every lesson
for(let lesson of lessons)
{
    //3 create element
     const btnDiv=document.createElement("div");
    btnDiv.innerHTML=`<button class="btn btn-outline btn-primary">
           <i class="fa-solid fa-book-open" style="color: rgb(99, 207, 230);"></i> Lesson - ${lesson.level_no}
           </button>
    `;
    //3 append child
    levelContainer.append(btnDiv);
}
};
loadData();