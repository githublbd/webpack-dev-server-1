var markup = '<div class="note">This is webpack loaders for css, scss, bootstrap css, etc...</div>';

module.exports = $('#center').html('<div class="bear">' + markup + '<button class="btn btn-danger">Bootstrap</button></div>');

$('button').on('click', function () {
    alert('clicked');
});
