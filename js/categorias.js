function redirectToShow(category) {
    sessionStorage.setItem('selectedCategory', category);
    window.location.href = 'funciones.html';
}