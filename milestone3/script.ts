
interface ResumeData {
    name: string;
    email: string;
    phone: string;
    education: string;
    experience: string;
    skills: string;
}

function handleFormSubmit(event: Event) {
    event.preventDefault(); // 

    
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    const resumeData: ResumeData = {
        name: formData.get('name') as string,
        email: formData.get('email') as string,
        phone: formData.get('phone') as string,
        education: formData.get('education') as string,
        experience: formData.get('experience') as string,
        skills: formData.get('skills') as string
    };

    
    generateResume(resumeData);
}


function generateResume(data: ResumeData) {
    const resumeContainer = document.getElementById('resume');

    if (resumeContainer) {
        resumeContainer.innerHTML = `

        <h2>Personal Information</h2>
        <p>Name:${data.name}</p>
        <p>Email: ${data.email}</p>   
        <p>Phone: ${data.phone}</p>
        <h3>Education</h3> 
        <p>${data.education}</p>  
        <h3>Work Experience</h3>  
        <p>${data.experience}</p>    
        <h3>Skills</h3>
        <p>${data.skills}</p>
        `;
    }
}

// Set up event listener for form submission
document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});

