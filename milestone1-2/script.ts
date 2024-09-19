let toggleSkillsButton: HTMLElement = document.getElementById('toggle-skills')!;
let skillsSection: HTMLElement = document.getElementById('skills')!;

toggleSkillsButton.addEventListener('click', () => {
    if (skillsSection.style.display === 'none' || skillsSection.style.display === '') {
        skillsSection.style.display = 'block';
    } else {
        skillsSection.style.display = 'none';
    }
});
