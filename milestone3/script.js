function handleFormSubmit(event) {
    event.preventDefault(); // 
    var form = event.target;
    var formData = new FormData(form);
    var resumeData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        education: formData.get('education'),
        experience: formData.get('experience'),
        skills: formData.get('skills')
    };
    generateResume(resumeData);
}
function generateResume(data) {
    var resumeContainer = document.getElementById('resume');
    if (resumeContainer) {
        resumeContainer.innerHTML = "\n\n        <h2>Personal Information</h2>\n        <p>Name:".concat(data.name, "</p>\n        <p>Email: ").concat(data.email, "</p>   \n        <p>Phone: ").concat(data.phone, "</p>\n        <h3>Education</h3> \n        <p>").concat(data.education, "</p>  \n        <h3>Work Experience</h3>  \n        <p>").concat(data.experience, "</p>    \n        <h3>Skills</h3>\n        <p>").concat(data.skills, "</p>\n        ");
    }
}
// Set up event listener for form submission
document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});
