const activeClass = "ativo"

function initTabNav() {
  const tabMenu = document.querySelectorAll('.js-tabmenu li');
  const tabContent = document.querySelectorAll('.js-tabcontent section');
  
  if(tabMenu.length && tabContent.length){
    
    tabContent[0].classList.add(activeClass);
    
    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove(activeClass);
      });
      tabContent[index].classList.add(activeClass);
    }
    
    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener('click', () => {
        activeTab(index);
      });
    });
  
  }
}
initTabNav()

function initAccordion() {

  if(activeAccordion.length) {

    const accordionList = document.querySelectorAll('.js-accordion dt');
    accordionList[0].classList.add(activeClass)
    accordionList[0].nextElementSibling.classList.add(activeClass)
    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }
    
    accordionList.forEach((item) => {
      item.addEventListener('click', activeAccordion);
    })
  };
};

initAccordion()

function initScrtrollSuave() {

  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');
  
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribut('href');
    const section = document.querySelector(href);
  section.scrollIntoView({
   behavior: 'smooth',
   block: 'start',
  })
  }
  
  linksInternos.forEach((link) =>{
    link.addEventListener('click', scrollToSection);
  })

}

initScrtrollSuave()

function initAnimacaoScroll(){
  const sections = document.querySelectorAll('.js-scroll');

  const windowMetade = window.innerHeight * 0.6
  function animaScroll() {
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top ;
    const isSectionVisible = (sectionTop - windowMetade) < 0
    if(isSectionVisible){
      section.classList.add('ativo');
    }else
    section.classList.remove('ativo');
  })
  }
  animaScroll();
  
  window.addEventListener('scroll', animaScroll)
}

initAnimacaoScroll()
