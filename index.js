const loadData=()=>{
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res)=>res.json())
    .then((json)=>displayData(json.data));
};

const loadLevelWord=(id)=>{
const url=`https://openapi.programming-hero.com/api/level/${id}`;
 fetch(url)
 .then((res)=>res.json())
 .then((data) =>{
  removeActive();

  const clickBtn=document.getElementById(`lesson-btn-${id}`);
  clickBtn.classList.add("active");

  console.log(clickBtn);


   displayLevelWord(data.data);
 })
 };

 const removeActive=()=>{
   const lessonButtons=document.querySelectorAll(".lesson-btn");
  lessonButtons.forEach(btn=> btn.classList.remove("active"));
 }


//word display
const displayLevelWord=(words)=>{
  const wordContainer=document.getElementById("word-container");

 
  wordContainer.innerText="";
    

  if(words.length==0)
  {
    wordContainer.innerHTML=` 
    <div class="text-center col-span-full text-semibold space-y-5 rounded-xl font-bangla ">
     <img class="mx-auto" src="./assets/alert-error.png" alt="">
     <p class="text-gray-600">এখনো কোন lesson add করা হয় নি</p>
     <h2 class="text-3xl">নেক্সট লেসন এ যান।</h2>
    </div>`;
    return;
  }
  
  words.forEach((word) => {

const card=document.createElement("div");


card.innerHTML=`<div class="bg-white rounded-xl text-center py-10 px-5 space-y-4" >
    <h2 class="font-bold text-2xl">${word.word ? word.word : "কোন ওয়ার্ড পওয়া যায় নি"}</h2>
    <p class="font-semibold">Meaning / Pronunciation</p>
    <div class="font-semibold text-2xl font-bangla">"${word.meaning ? word.meaning : "কোন ওয়ার্ড মিনিং পওয়া যায় নি"} / ${word.pronunciation ? word.pronunciation : "কোন pronunciation পওয়া যায় নি"}"
    </div>
    <div class="items-center justify-between flex">
      <button onclick="my_modal_5.showModal()" class="btn bg-sky-400/10 hover:bg-sky-400/70">
        <i class="fa-solid fa-circle-question" style="color: black;"></i>
      </button>
      <button class="btn bg-sky-400/10 hover:bg-sky-400/70">
        <i class="fa-solid fa-volume-high" style="color:black;"></i>
      </button>
    </div>
  </div>`;

wordContainer.append(card);
    })
};

const displayData=(lessons)=>{
   const levelContainer= document.getElementById("level-container");

  
   levelContainer.innerText="";

for(let lesson of lessons)
{
     const btnDiv=document.createElement("div");
    btnDiv.innerHTML=`<button id="lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson-btn">
           <i class="fa-solid fa-book-open" style="color: rgb(99, 207, 230);"></i> Lesson - ${lesson.level_no}
           </button>
    `;
    levelContainer.append(btnDiv);
}
};

loadData();
