const loadData=()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all")// akta poromise deve
    .then((res)=>res.json())
    .then((json)=>displayData(json.data));

};

const loadLevelWord=(id)=>{
//     console.log(id);
const url=`https://openapi.programming-hero.com/api/level/${id}`;
 fetch(url)
 .then((res)=>res.json())
 .then((data) => displayLevelWord(data.data))
 };

 //word display
 const displayLevelWord=(words)=>{
   const wordContainer=document.getElementById("word-container");
    wordContainer.innerText="";
    
   if(words.length==0)
   {
    
     wordContainer.innerHTML=` <div class="text-center  col-span-full text-semibold space-y-5 rounded-xl font-bangla ">
     <img class="mx-auto" src="./assets/alert-error.png" alt="">
    <p class="text-gray-600">এখনো কোন lesson add করা হয় নি</p>
    <h2 class="text-3xl">নেক্সট লেসন এ যান।</h2>
   </div>`;
   
   }
  
  words.forEach((word) => {
// console.log(word)

const card=document.createElement("div");
card.innerHTML=`<div class="bg-white rounded-xl text-center py-10 px-5 space-y-4" >
    <h2 class="font-bold text-2xl">${word.word ? word : "কোন ওয়ার্ড পওয়া যায় নি"}</h2>
    <p class="font-semibold">Meaning / Pronounciation</p>
    <div class="font-semibold text-2xl font-bangla">"${word.meaning ? word.meaning : "কোন ওয়ার্ড মিনিং পওয়া যায় নি"} / ${word.pronunciation ? word.pronunciation : "কোন pronunciation পওয়া যায় নি"}"</div>
    <div class="items-center justify-between flex">
      <button class="btn bg-sky-400/10 hover:bg-sky-400/70"><i class="fa-solid fa-circle-question" style="color: black;"></i></button>
      <button class="btn bg-sky-400/10 hover:bg-sky-400/70"><i class="fa-solid fa-volume-high" style="color:black;"></i></button>
    </div>
  </div>`;

wordContainer.append(card);
    })
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
    btnDiv.innerHTML=`<button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary">
           <i class="fa-solid fa-book-open" style="color: rgb(99, 207, 230);"></i> Lesson - ${lesson.level_no}
           </button>
    `;
    //3 append child
    levelContainer.append(btnDiv);
}
};
loadData();