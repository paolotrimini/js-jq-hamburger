
// Creare un hamburger menu con l'utilizzo di Html, Css e JavaScript.
// Scrivere solo la parte con jQuery senza modiﬁcare HTML e CSS.



// Visualizzo il menu

$('.fas').click(function() { // azione (click)

    $(".hamburger-menu").addClass('active'); // "aggiungo" classe 'active'
});


// Nascondo il menu

$('.close').click(function() {  // azione (click)

    $('.hamburger-menu').removeClass('active'); // "rimuovo" classe 'active'
});