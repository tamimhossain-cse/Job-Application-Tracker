let interviewList = [];
let rejectedList = [];
let activeTab = "all-filter-btn";

// selection by id name
const total = document.getElementById("total");
const interview = document.getElementById("interview");
const rejected = document.getElementById("rejected");

const allCard = document.getElementById("allCard");
const filteredSection = document.getElementById("filtered-section");
const emptyState = document.getElementById("emptyState");

const allBtn = document.getElementById("all-filter-btn");
const interviewBtn = document.getElementById("interview-filter-btn");
const rejectedBtn = document.getElementById("rejected-filter-btn");
const jobSummary = document.getElementById("jobSummary");

const mainContainer = document.querySelector("main");


// Calculation update
function calculateCount() {
  total.innerText = allCard.querySelectorAll(".card").length;
  interview.innerText = interviewList.length;
  rejected.innerText = rejectedList.length;
  
}
calculateCount();


// toggle button
function toggleStyle(id){
   activeTab = id; 
    allBtn.classList.remove('bg-[#3B82F6]' ,'text-white')
     interviewBtn.classList.remove('bg-[#3B82F6]' ,'text-white')
      rejectedBtn.classList.remove('bg-[#3B82F6]' ,'text-white')

      allBtn.classList.add('bg-gray-300' ,'text-black') 
      interviewBtn.classList.add('bg-gray-300' ,'text-black') 
      rejectedBtn.classList.add('bg-gray-300' ,'text-black')
      const selected=document.getElementById(id); 
      selected.classList.add('bg-[#3B82F6]' ,'text-white') 
      selected.classList.remove('bg-gray-300' ,'text-black')

  if (id === "all-filter-btn") {
    allCard.classList.remove("hidden");
    filteredSection.classList.add("hidden");
  }

  if (id === "interview-filter-btn") {
    allCard.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    renderInterview();
  }

  if (id === "rejected-filter-btn") {
    allCard.classList.add("hidden");
    filteredSection.classList.remove("hidden");
    renderRejected();
  }
}

// Event Handler
mainContainer.addEventListener("click", function (event) {

  // Event for Interview

  if (event.target.classList.contains("interview-btn")) {

    const parent = event.target.closest(".card");

    const companyName = parent.querySelector(".companyName").innerText;
    const skill = parent.querySelector(".skill").innerText;
    const type = parent.querySelector(".type").innerText;
    const about = parent.querySelector(".about").innerText;

    parent.querySelector(".status").innerText = "INTERVIEW";

    const cardInfo = { companyName, skill, type, status: "INTERVIEW", about };

    if (!interviewList.find(i => i.companyName === companyName)) {
      interviewList.push(cardInfo);
    }

    rejectedList = rejectedList.filter(i => i.companyName !== companyName);

    if (activeTab === "interview-filter-btn") renderInterview();
    if (activeTab === "rejected-filter-btn") renderRejected();

    calculateCount();
  }

  // EventFor Rejected
  else if (event.target.classList.contains("rejected-btn")) {

    const parent = event.target.closest(".card");

    const companyName = parent.querySelector(".companyName").innerText;
    const skill = parent.querySelector(".skill").innerText;
    const type = parent.querySelector(".type").innerText;
    const about = parent.querySelector(".about").innerText;

    parent.querySelector(".status").innerText = "REJECTED";

    const cardInfo = { companyName, skill, type, status: "REJECTED", about };

    if (!rejectedList.find(i => i.companyName === companyName)) {
      rejectedList.push(cardInfo);
    }

    interviewList = interviewList.filter(i => i.companyName !== companyName);

    if (activeTab === "interview-filter-btn") renderInterview();
    if (activeTab === "rejected-filter-btn") renderRejected();

    calculateCount();
  }

  // Event For Delete

  else if (event.target.closest(".fa-trash-can")) {

    const card = event.target.closest(".card");
    const company = card.querySelector(".companyName").innerText;

    interviewList = interviewList.filter(i => i.companyName !== company);
    rejectedList = rejectedList.filter(i => i.companyName !== company);

    card.remove();

    if (activeTab === "interview-filter-btn") renderInterview();
    if (activeTab === "rejected-filter-btn") renderRejected();

    calculateCount();
  }
});

// Rendering the function

function renderInterview() {
  filteredSection.innerHTML = "";

  if (interviewList.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  } else {
    emptyState.classList.add("hidden");
  }

  for (let job of interviewList) {

    const div = document.createElement("div");
    div.className = "card flex justify-between p-8 shadow";

    div.innerHTML = `
    <div class="space-y-6">
      <div>
        <p class="companyName">${job.companyName}</p>
        <p class="skill text-gray-500">${job.skill}</p>
      </div>

      <p class="type text-gray-500">${job.type}</p>

     <p class="status flex justify-center w-30 bg-green-200">INTERVIEW</p>

      <p class="about">${job.about}</p>

      <div class="flex gap-3">
        <button class="interview-btn border-2 border-green-500 px-4 py-2">Interview</button>
        <button class="rejected-btn border-2 border-red-500 px-4 py-2">Rejected</button>
      </div>
    </div>
<div>
    <button class="btn rounded-full bg-gray-100 px-5 py-2">
      <i class=" fa-solid fa-trash-can"></i>
    </button>
    </div>
    `;

    filteredSection.appendChild(div);
  }
}
//   rejected rendering
function renderRejected() {
  filteredSection.innerHTML = "";

  if (rejectedList.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  } else {
    emptyState.classList.add("hidden");
  }

  for (let job of rejectedList) {

    const div = document.createElement("div");
    div.className = "card flex justify-between p-8 shadow";

    div.innerHTML = `
    <div class="space-y-6">
      <div>
        <p class="companyName">${job.companyName}</p>
        <p class="skill text-gray-500">${job.skill}</p>
      </div>

      <p class="type text-gray-500">${job.type}</p>

      <p class="status flex justify-center w-30 bg-red-200">REJECTED</p>

      <p class="about">${job.about}</p>

      <div class="flex gap-3">
        <button class="interview-btn border-2 border-green-500 px-4 py-2">Interview</button>
        <button class="rejected-btn border-2 border-red-500 px-4 py-2">Rejected</button>
      </div>
    </div>
<div>
 <button class="btn rounded-full bg-gray-100 px-5 py-2">
      <i class="fa-solid fa-trash-can"></i>
    </button>
    </div>
    `;

    filteredSection.appendChild(div);
  }
}