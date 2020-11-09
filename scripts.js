// 토글버튼 눌렀을 시 메뉴 활성화

const toggleBtn = document.querySelector('.nav__toggle');
const navList = document.querySelector('.nav__list');

toggleBtn.addEventListener('click', () => {
    navList.classList.toggle('active');
});


// 네비게이션 메뉴 이동

const nav = document.querySelector('#nav');
nav.addEventListener('click', (event) => {
    const target = event.target;
    const src = target.dataset.src;

    if (src == null) {
        return;
    }

    const scroll = document.querySelector(src);
    scroll.scrollIntoView({ behavior: 'smooth' });

});

// Q&A 더보기 버튼 활성화

const title = document.querySelectorAll('.question__title');

function handler() {
    title.forEach(el => el.classList.remove('show'));
    this.classList.add('show')
}


title.forEach(elem => elem.addEventListener('click', handler))


