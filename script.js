document.getElementById('vacancy-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const vacancy = document.getElementById('vacancy').value.toLowerCase();
    const vacancyLink = document.getElementById('vacancy-link').value;
    const resumeOutput = document.getElementById('resume-output');
    let personalizedResume = '';

    // Если введено название вакансии, используем шаблонное резюме
    fetch('resume_template_ua.html')
        .then(response => response.text())
        .then(data => {
            personalizedResume = data.replace('{{vacancy}}', vacancy);
            resumeOutput.innerHTML = personalizedResume;
        });

    // Если введена ссылка на вакансию, анализируем данные по ссылке
    if (vacancyLink) {
        fetch(vacancyLink)
            .then(response => response.text())
            .then(data => {
                // Парсим HTML страницы вакансии
                const parser = new DOMParser();
                const doc = parser.parseFromString(data, 'text/html');

                // Пример извлечения данных (заголовок вакансии и описание)
                const jobTitle = doc.querySelector('h1').innerText;
                const jobDescription = doc.querySelector('.job-description').innerText;

                // Вставляем извлеченные данные в шаблон резюме
                personalizedResume = personalizedResume.replace('{{vacancy}}', jobTitle);
                personalizedResume += `<p>${jobDescription}</p>`;
                resumeOutput.innerHTML = personalizedResume;
            })
            .catch(error => {
                console.error('Error fetching the vacancy link:', error);
            });
    }
});
