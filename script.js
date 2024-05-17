document.getElementById('vacancy-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const vacancy = document.getElementById('vacancy').value.toLowerCase();
    const resumeOutput = document.getElementById('resume-output');
    let personalizedResume = '';

    if (vacancy.includes('военный штаб')) {
        personalizedResume = `
            <h2>Опыт работы</h2>
            <p>Ведение делопроизводства в условиях военной службы.</p>
            <p>Работа с конфиденциальной информацией и секретными документами.</p>
            <p>Знание военных нормативных актов и владение специальными программами.</p>
        `;
    } else if (vacancy.includes('коммерческая организация')) {
        personalizedResume = `
            <h2>Опыт работы</h2>
            <p>Организация документооборота в офисе.</p>
            <p>Работа с корпоративными документами и деловая переписка.</p>
            <p>Знание CRM систем и работа с клиентами и партнерами.</p>
        `;
    } else {
        personalizedResume = `
            <h2>Опыт работы</h2>
            <p>Ведение делопроизводства и организация документооборота.</p>
            <p>Знание нормативных документов и внимательность к деталям.</p>
            <p>Владение офисными программами.</p>
        `;
    }

    resumeOutput.innerHTML = personalizedResume;
});
