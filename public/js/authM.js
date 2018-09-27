$(document).ready(function () {

    $('#ex').on('click', function () {
        window.localStorage.removeItem('auth_token');
        window.localStorage.removeItem('auth_role');
        window.localStorage.removeItem('userId');
        window.localStorage.removeItem('userFirstName');
        window.localStorage.removeItem('userLastName');
        window.localStorage.removeItem('userEmail');
        window.localStorage.removeItem('userPassword');
        location.href = "signin.html";
    });

    let token = window.localStorage.getItem('auth_token');
    if (token) {
        $.ajaxSetup({
            headers: {
                'Authorization': 'Bearer ' + token
            }
        });
        if (window.localStorage.getItem('auth_role') === 'ROLE_USER') {
            $('.menu-ul').append('<li class="menu-ul-li-admin"><a href="public/html/user.html"' +
                'class="auth-green" style="color:green"><b>' + window.localStorage.getItem('userFirstName') + '</b></a></li>');
        }
        if (window.localStorage.getItem('auth_role') === 'ROLE_ADMIN') {
            $('.menu-ul').append('<li class="menu-ul-li-admin"><a href="public/html/admin.html"' +
                'class="auth-red" style="color:red"><b>' + window.localStorage.getItem('userFirstName') + '</b></a></li>');
        }
    } else {
        $('.menu-ul').append('<li class="menu-ul-li-admin"><a href="public/html/signin.html"' +
            'class="menu-ul-li-a">Авторизація</a></li>');
    }
});