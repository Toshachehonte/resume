document.getElementById('vacancy-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const vacancy = document.getElementById('vacancy').value.toLowerCase();
    const vacancyLink = document.getElementById('vacancy-link').value;
    const resumeOutput = document.getElementById('resume-output');
    let personalizedResume = '';

    // Здесь можно добавить логику для подстановки данных в резюме на основе введенной вакансии
    // В текущей версии будем просто загружать готовые шаблоны резюме

    fetch('resume_template_ua.html')
        .then(response => response.text())
        .then(data => {
            // Пример использования данных шаблона для персонализации
            personalizedResume = data.replace('{{vacancy}}', vacancy);
            resumeOutput.innerHTML = personalizedResume;
        });

    // Если есть ссылка на вакансию, можно использовать её для дополнительного анализа
    if (vacancyLink) {
        // Логика для обработки ссылки на вакансию
        // Например, можно использовать fetch для получения данных по ссылке и анализа их
        fetch(vacancyLink)
            .then(response => response.text())
            .then(data => {
                // Пример использования данных по ссылке
                // Здесь можно добавить парсинг и анализ данных по ссылке
                console.log(data);
            });
    }
});
