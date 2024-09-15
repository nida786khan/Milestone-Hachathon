// Get form and output div
const form = document.getElementById("resume-form") as HTMLFormElement;
const outputDiv = document.getElementById("resume-output") as HTMLElement;

// Listen to form submission
form.addEventListener("submit", function (event) {
  event.preventDefault();  // Prevent default form submission

  // Capture form data
  const name = (document.getElementById("name") as HTMLInputElement).value;
  const email = (document.getElementById("email") as HTMLInputElement).value;
  const phone = (document.getElementById("phone") as HTMLInputElement).value;

  const degree = (document.getElementById("degree") as HTMLInputElement).value;
  const university = (document.getElementById("university") as HTMLInputElement).value;
  const gradYear = (document.getElementById("gradYear") as HTMLInputElement).value;

  const jobTitle = (document.getElementById("jobTitle") as HTMLInputElement).value;
  const company = (document.getElementById("company") as HTMLInputElement).value;
  const startDate = (document.getElementById("startDate") as HTMLInputElement).value;
  const endDate = (document.getElementById("endDate") as HTMLInputElement).value;

  const skills = (document.getElementById("skills") as HTMLInputElement).value;

  // Generate resume content
  const resumeHtml = `
    <h2>${name}</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    
    <h3>Education</h3>
    <p>${degree}, ${university}, Graduated: ${gradYear}</p>

    <h3>Work Experience</h3>
    <p><strong>Job Title:</strong> ${jobTitle}</p>
    <p><strong>Company:</strong> ${company}</p>
    <p><strong>From:</strong> ${startDate} <strong>To:</strong> ${endDate}</p>

    <h3>Skills</h3>
    <p>${skills.split(",").map(skill => `<span>${skill.trim()}</span>`).join(", ")}</p>
  `;

  // Output the generated resume
  outputDiv.innerHTML = resumeHtml;
  outputDiv.style.display = "block";
});
