// heroSelectionTL.from(heroTextTitle, {
//     duration: 1.2,
//     opacity: 0,
//     ease: "power4.out",
//     transform: "translateY(100%)",
//     stagger: 0.1,
// });



const letters = document.querySelectorAll('#creed-text span');
letters.forEach((letter, index) => {
    setTimeout(() => {
        letter.style.opacity = 1; // Torna visível
    }, index * 300); // Ajuste o tempo conforme necessário
});