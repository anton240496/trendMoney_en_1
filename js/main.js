


const op2s = document.querySelectorAll('.apply_wrap')//это класс обозначает где должны находится все последующие блоки

for (op2 of op2s) {
op2.addEventListener('click', e => {
    const curb = e.target.closest('.apply_item_block')
    if (!curb) return;
    const onli = op2.querySelector('.on');
    onli?.classList.remove('on')//--это строка позволяет блокам удалять класс у соседних блоков
    const curli = curb.closest('.apply_item');
    curli.classList.toggle('on', curli !== onli)
})}


$(function () {
    let btns = document.querySelectorAll('.ask_que');

    for (btn of btns) {
        btn.addEventListener('click', function () {
            let card = this.closest('.ask_list li');
            let arr = card.querySelector('.ask_otvet');
            if (arr.style.opacity === "0") {
                card.classList.add("on")
                arr.style.opacity = ".5"


            } else {
                card.classList.remove("on")
                arr.style.opacity = "0"


            }

        });
    }
});



$(function () {
    let btns = document.querySelectorAll('.learn_questions');
    for (btn of btns) {
        btn.addEventListener('click', function () {
            let card = this.closest('.learn_item');
            let arr = card.querySelector('.otvet');
            if (arr.style.opacity === "0") {
                card.classList.add("on")
                arr.style.opacity = "1"


            } else {
                card.classList.remove("on")
                arr.style.opacity = "0"


            }

        });
    }
});

var $page = $('html, body');
$('a[href*="#"]').click(function() {
    $page.animate({
        scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
});


