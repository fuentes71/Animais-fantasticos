const activeClass = "ativo"

function initTabNav() {
  const tabMenu = document.querySelectorAll('[data-menu="suave"] li');
  const tabContent = document.querySelectorAll('.[data-tab="content"] section');
  
  if(tabMenu.length && tabContent.length){
    
    tabContent[0].classList.add('ativo');
    
    function activeTab(index) {
      tabContent.forEach((content) => {
        content.classList.remove('ativo');
      });
      const direcao = tabContent[index].dataset.anime;
      console.log(tabContent[index].dataset.anime)
      tabContent[index].classList.add('ativo', direcao);
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
  
  const accordionList = document.querySelectorAll('[data-anime="accordion"] dt');
  if(accordionList.length) {

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

  const linksInternos = document.querySelectorAll('.[data-menu="suave"] a[href^="#"]');
  
  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
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
  const sections = document.querySelectorAll('[data-anime="scroll"]');

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
