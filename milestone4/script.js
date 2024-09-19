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
        resumeContainer.innerHTML = "\n\n        <h2>Personal Information</h2>\n        <p>Name:<span contenteditable=\"true\">".concat(data.name, "</span></p>\n        <p>Email: <span contenteditable=\"true\">").concat(data.email, "</span></p>   \n        <p>Phone: <span contenteditable=\"true\">").concat(data.phone, "</span></p>\n        <h3>Education</h3> \n        <pcontenteditable=\"true\">").concat(data.education, "</p>  \n        <h3>Work Experience</h3>  \n        <pcontenteditable=\"true\">").concat(data.experience, "</p>    \n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(data.skills, "</p>\n        ");
    }
}
// Set up event listener for form submission
document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});
