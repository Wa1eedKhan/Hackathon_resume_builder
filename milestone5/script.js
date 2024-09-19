var _a, _b, _c;
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form submission
    var form = event.target;
    var formData = new FormData(form);
    var resumeData = {
        username: formData.get('username'),
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        education: formData.get('education'),
        experience: formData.get('experience'),
        skills: formData.get('skills')
    };
    generateResume(resumeData);
    generateShareableLink(resumeData.username);
}
function generateResume(data) {
    var resumeContainer = document.getElementById('resume');
    if (resumeContainer) {
        resumeContainer.innerHTML = "\n        <h2>Personal Information</h2>\n        <p>Name:<span contenteditable=\"true\">".concat(data.name, "</span></p>\n        <p>Email:<span contenteditable=\"true\">").concat(data.email, "</span></p>   \n        <p>Phone:<span contenteditable=\"true\">").concat(data.phone, "</span></p>\n        <h3>Education</h3> \n        <p contenteditable=\"true\">").concat(data.education, "</p> \n        <h3>Work Experience</h3>  \n        <p contenteditable=\"true\">").concat(data.experience, "</p>  \n        <h3>Skills</h3>\n        <p contenteditable=\"true\">").concat(data.skills, "</p>\n        ");
    }
}
function generateShareableLink(username) {
    var shareableLinkInput = document.getElementById('shareableLink');
    var baseURL = window.location.origin; // Get current domain
    var uniqueURL = "".concat(baseURL, "/").concat(username, "/resume");
    shareableLinkInput.value = uniqueURL;
}
// Copy link to clipboard
(_a = document.getElementById('copyLinkButton')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', function () {
    var shareableLinkInput = document.getElementById('shareableLink');
    shareableLinkInput.select();
    document.execCommand('copy');
    alert('Link copied to clipboard!');
});
// Open the resume link in a new window
(_b = document.getElementById('openLinkButton')) === null || _b === void 0 ? void 0 : _b.addEventListener('click', function () {
    var shareableLinkInput = document.getElementById('shareableLink');
    var resumeURL = shareableLinkInput.value;
    if (resumeURL) {
        window.open(resumeURL, '_blank'); // Open the link in a new tab
    }
    else {
        alert('No resume link generated yet!');
    }
});
// Download resume as PDF
(_c = document.getElementById('downloadPdfButton')) === null || _c === void 0 ? void 0 : _c.addEventListener('click', function () {
    var resumeElement = document.getElementById('resume');
    if (resumeElement) {
        var opt = {
            margin: 1,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };
        html2pdf().from(resumeElement).set(opt).save();
    }
});
// Set up event listener for form submission
document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});
