const faqContentItems = document.querySelectorAll('.faq-content-item');
const faqAnswers = document.querySelectorAll('.faq-answer');
const faqInfo = document.querySelectorAll('.faq-info');


function selectQuestion(e) {

    const faqAnswer = document.querySelector(`#${this.id}-answer`);
    const faqInfo = document.querySelector(`#${this.id}-info`);
    faqAnswer.classList.toggle('show')
    faqInfo.classList.toggle('show')

}


faqContentItems.forEach(faqContentItem => faqContentItem.addEventListener('click', selectQuestion))


