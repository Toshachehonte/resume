document.getElementById('vacancy-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const vacancy = document.getElementById('vacancy').value.toLowerCase();
    const vacancyLink = document.getElementById('vacancy-link').value;
    const resumeOutput = document.getElementById('resume-output');
    let personalizedResume = '';

    fetch('resume_template_ua.html')
        .then(response => response.text())
        .then(data => {
            personalizedResume = data.replace('{{vacancy}}', vacancy);
            resumeOutput.innerHTML = personalizedResume;
        });

    if (vacancyLink) {
        fetch(vacancyLink)
            .then(response => response.text())
            .then(data => {
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');
                const jobTitle = doc.querySelector('h1')?.innerText || 'Не удалось получить заголовок';
                const jobDescription = doc.querySelector('.job-description')?.innerText || 'Не удалось получить описание';

                personalizedResume = personalizedResume.replace('{{vacancy}}', jobTitle);
                personalizedResume += `<p>${jobDescription}</p>`;
                resumeOutput.innerHTML = personalizedResume;
            })
            .catch(error => {
                console.error('Error fetching the vacancy link:', error);
            });
    }
});
