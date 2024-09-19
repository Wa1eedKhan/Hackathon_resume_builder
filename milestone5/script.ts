interface ResumeData {
    username: string;
    name: string;
    email: string;
    phone: string;
    education: string;
    experience: string;
    skills: string;
}

function handleFormSubmit(event: Event) {
    event.preventDefault(); // Prevent form submission

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const resumeData: ResumeData = {
        username: formData.get('username') as string,
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        education: formData.get('education') as string,
        experience: formData.get('experience') as string,
        skills: formData.get('skills') as string
    };

    generateResume(resumeData);
    generateShareableLink(resumeData.username);
}

function generateResume(data: ResumeData) {
    const resumeContainer = document.getElementById('resume');

    if (resumeContainer) {
        resumeContainer.innerHTML = `
        <h2>Personal Information</h2>
        <p>Name:<span contenteditable="true">${data.name}</span></p>
        <p>Email:<span contenteditable="true">${data.email}</span></p>   
        <p>Phone:<span contenteditable="true">${data.phone}</span></p>
        <h3>Education</h3> 
        <p contenteditable="true">${data.education}</p> 
        <h3>Work Experience</h3>  
        <p contenteditable="true">${data.experience}</p>  
        <h3>Skills</h3>
        <p contenteditable="true">${data.skills}</p>
        `;
    }
}

function generateShareableLink(username: string) {
    const shareableLinkInput = document.getElementById('shareableLink') as HTMLInputElement;
    const baseURL = window.location.origin; // Get current domain
    const uniqueURL = `${baseURL}/${username}/resume`;

    shareableLinkInput.value = uniqueURL;
}

// Copy link to clipboard
document.getElementById('copyLinkButton')?.addEventListener('click', () => {
    const shareableLinkInput = document.getElementById('shareableLink') as HTMLInputElement;
    shareableLinkInput.select();
    document.execCommand('copy');
    alert('Link copied to clipboard!');
});

document.getElementById('openLinkButton')?.addEventListener('click', () => {
    const shareableLinkInput = document.getElementById('shareableLink') as HTMLInputElement;
    const resumeURL = shareableLinkInput.value;

    if (resumeURL) {
        window.open(resumeURL, '_blank'); 
    } else {
        alert('No resume link generated yet!');
    }
});

// Download resume as PDF
document.getElementById('downloadPdfButton')?.addEventListener('click', () => {
    const resumeElement = document.getElementById('resume');
    if (resumeElement) {
        const opt = {
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
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});
