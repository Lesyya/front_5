const body = document.querySelector('body');
let isValid = 1;
let errorFields = [];
let answers = [];
const VARIANT = 9;
const answerDiv = document.createElement('div');
const Result = document.getElementById('Result');

function confirm() {
    clearInfo();
    check('name', 'ПІБ', /^[A-ZА-Я][a-zA-ZА-Яа-я]+ [A-ZА-Я]\.[A-ZА-Я]\.$/);
    check('ID', 'ID-card', /^[A-Z]{2} №\d{6}$/);
    check('faculty', 'Факультет', /^[А-ЯІ|A-Z]{4}$/);
    check('birthday', 'Дата народження', /^(?:0[1-9]|[12]\d|3[01])([\/.-])(?:0[1-9]|1[012])\1(?:19|20)\d\d$/)
    check('Adress', 'Адреса', /^[м]\. [A-ZА-ЯІЇЄ][a-zA-ZА-Яа-яіїє]+$/);
    if (isValid) {
        answers.forEach(answer => answerDiv.appendChild(answer));
        Result.appendChild(answerDiv);
    } else {
        errorFields.forEach(errorField => {
          const field = document.getElementById(errorField);
          field.style.border = '2px red solid';
          field.style.backgroundColor = '#ffcbc7';
        });
    }
}

function clearInfo() {
    errorFields.forEach(id => {
        let element = document.getElementById(id)
        element.style.border = '2px rgb(55, 8, 8) solid';
        element.style.backgroundColor = 'white';
    });
    while(answerDiv.firstChild) {
        answerDiv.removeChild(answerDiv.firstChild)
    }
    isValid = 1;
    errorFields = [];
    answers = [];
}

function check(type, text, regex, additionalCheck = () => true) {
    const valueFromElement = document.getElementById(type).value;
    if (regex.test(valueFromElement) && additionalCheck(valueFromElement)) {
        const answer = document.createElement('p');
        answer.innerHTML = `${text}: ` + valueFromElement;
        answers.push(answer);
    } else {
        isValid *= 0;
        errorFields.push(type);
    }
}
