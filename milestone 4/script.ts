// Get form and output elements
const form = document.getElementById("resume-form") as HTMLFormElement;
const outputDiv = document.getElementById("resume-output") as HTMLElement;

// Function to make sections editable
function makeEditable() {
  const editableSections = document.querySelectorAll('.editable');
  editableSections.forEach(section => {
    section.addEventListener('click', () => {
      section.setAttribute('contenteditable', 'true');
      section.focus();
    });
    section.addEventListener('blur', () => {
      section.setAttribute('contenteditable', 'false');
    });
  });
}

// Handle form submission
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  // Collect form data
  const name = (document.getElementById("name") as HTMLInputElement).value.trim();
  const email = (document.getElementById("email") as HTMLInputElement).value.trim();
  const phone = (document.getElementById("phone") as HTMLInputElement).value.trim();

  const degree = (document.getElementById("degree") as HTMLInputElement).value.trim();
  const university = (document.getElementById("university") as HTMLInputElement).value.trim();
  const gradYear = (document.getElementById("gradYear") as HTMLInputElement).value.trim();

  const jobTitle = (document.getElementById("jobTitle") as HTMLInputElement).value.trim();
  const company = (document.getElementById("company") as HTMLInputElement).value.trim();
  const startDate = (document.getElementById("startDate") as HTMLInputElement).value.trim();
  const endDate = (document.getElementById("endDate") as HTMLInputElement).value.trim() || "Present";

  const skills = (document.getElementById("skills") as HTMLInputElement).value.trim();

  // Generate the resume
  outputDiv.innerHTML = `
    <div class="resume-section editable" contenteditable="false">
      <h2>${name || "Your Name"}</h2>
      <p><strong>Email:</strong> ${email || "Your Email"}</p>
      <p><strong>Phone:</strong> ${phone || "Your Phone"}</p>
    </div>

    <div class="resume-section editable" contenteditable="false">
      <h3>Education</h3>
      <p>${degree || "Degree"}, ${university || "University"}, Graduated: ${gradYear || "Year"}</p>
    </div>

    <div class="resume-section editable" contenteditable="false">
      <h3>Work Experience</h3>
      <p><strong>Job Title:</strong> ${jobTitle || "Job Title"}</p>
      <p><strong>Company:</strong> ${company || "Company"}</p>
      <p><strong>From:</strong> ${startDate || "Start Date"} <strong>To:</strong> ${endDate}</p>
    </div>

    <div class="resume-section editable" contenteditable="false">
      <h3>Skills</h3>
      <p>${skills.split(",").map(skill => `<span>${skill.trim()}</span>`).join(", ") || "Skills"}</p>
    </div>
  `;

  // Initialize editable functionality
  makeEditable();
});








