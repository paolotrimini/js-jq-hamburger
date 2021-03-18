
// Creare un hamburger menu con l'utilizzo di Html, Css e JavaScript.
// Scrivere solo la parte con jQuery senza modiﬁcare HTML e CSS.


// VERSIONE 1

// Visualizzo il menu

$('.fas').click(function() { // azione (click)

    $('.hamburger-menu').addClass('active'); // "aggiungo" classe 'active'
});

// Nascondo il menu

$('.close').click(function() {  // azione (click)

    $('.hamburger-menu').removeClass('active'); // "rimuovo" classe 'active'
});


// VERSIONE 2

// Visualizzo il menu

$('.fa-times').click(function() { // hide x

    $('.hamburger-menu').hide();
});

// Nascondo il menu

$('.fa-bars').click(function() {   // show lines

    $('.hamburger-menu').show();
});