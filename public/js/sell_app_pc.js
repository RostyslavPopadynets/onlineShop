$(document).ready(function () {


    var sellPC;

    sellPC =
        `
        <style>
        .menu {
            width: 960px;
            margin: 0 auto;
            margin-right: 0;
        }

        .menu:before {
            content: '';
            display: block;
            height: 50px;
            width: 100%;
            background: #000;
            position: absolute;
            left: 0;
            z-index: -1;
            top: 0;
        }

        .menu-ul {
            margin: 0;
            padding: 0;
            list-style: none;
            height: 50px;
        }

        .menu-ul-li {
            float: left;
        }

        .menu-ul-li-admin {
            float: right;
        }

        .menu-ul-li-a {
            color: #fff;
            display: block;
            height: 50px;
            padding: 0 30px;
            text-transform: uppercase;
            text-decoration: none;
            line-height: 50px;
        }

        .menu-ul-li-a:hover {
            background: #d34d43;
            text-decoration: none;
            color: black;
        }

        .row {
            width: 100%;
        }

        .containet {
            margin-top: 5px;
        }

        .col-4 {
            height: 860px;
        }

        .col-3 {
            height: 860px;
        }

        .con_start {
            margin-left: 20px;
            margin-right: 5px;
            margin-top: 20px;
            margin-bottom: 20px;
        }


        .con_center {
            margin-left: 5px;
            margin-right: 5px;
            margin-top: 20px;
            margin-bottom: 20px;
        }

        .con_end {
            margin-left: 5px;
            margin-right: 0;
            margin-top: 20px;
            margin-bottom: 20px;
            float: right;
        }

        .but {
            margin-top: 0;
            margin-bottom: 20px;
            margin-left: 50px;
        }

        .but2 {
            margin-top: 0;
            margin-bottom: 20px;
            margin-left: 420px;
        }

        .but3 {
            margin-top: 0;
            margin-bottom: 20px;
            margin-left: 450px;
        }

        label:hover,
        .label:hover {
            cursor: help;
        }

        label:hover::after,
        .label:hover::after {
            content: attr(info);
            position: absolute;
            left: 32px;
            z-index: 1;
            width: 386px;
            background: black;
            color: #fff;
            font-family: Arial, sans-serif;
            font-size: 14px;
            padding: 5px 10px;
            border: 1px solid green;
        }
    </style>

    <div id="main">
        <div class="containet text-center" id="pcForm">
            <h2>Продаж персонального комп'ютера</h2>
        </div>

        <section class="containor-fluid">
            <div class="row">
                <div style="text-align:center" style="text-align:center" class="col-4 con_start" id="">
                    <h4>Комп\'ютер</h4>
                    <label style="text-align:center" info="Acer; ARTLINE ...">Виробник*
                        <input type="text" class="form-control" id="manufacturer"></label>
                    <label style="text-align:center" info="Veriton N2510G (DT.VNRME.010); Gaming X79 v20 (X79v20) ...">Модель*
                        <input type="text" class="form-control" id="model"></label>
                    <label style="text-align:center" info="Intel Core i7-7700 (3.6 - 4.2 ГГц); Intel Celeron J3060 ...">Процесор*
                        <input type="text" class="form-control" id="processor"></label>
                    <label style="text-align:center" info="Intel HD Graphics 400;  nVidia GeForce GTX 1080 Ti, 11 ГБ ...">Відеокарта*
                        <input type="text" class="form-control" id="graphicAdapter"></label>
                    <h4>Пам'ять</h4>
                    <label style="text-align:center" info="2 000; 512 ...(в Гігабайтах)">Влаштована*
                        <input type="text" class="form-control" id="driveCapacity"></label>
                    <label style="text-align:center" info="16; 8; 4 ...(в Гігабайтах)">Оперативна*
                        <input type="text" class="form-control" id="ram"></label>

                    <h4>Інше</h4>

                    <label style="text-align:center" info="без ОС; Windows 7 ...">Операційна система*
                        <input type="text" class="form-control" id="os"></label>
                    <label style="text-align:center" info="MSI CORE FROZR L; BOX; 3 x 120-мм RGB куллера ...">Охолодження*
                        <input type="text" class="form-control" id="cooling"></label>
                        <hr>
                        <div id="photoPC">
                            
                            <img style='width: 305px' src="../image/tvphoto.png" alt="smartphone.png">
                            <br><br>
                        </div>
                        <hr>
                </div>
                <div style="text-align:center" class="col-4 con_center" id="">

                    <h4>Вигляд</h4>
                    <label style="text-align:center" info="black; блакитний; красный ...">Коляр*
                        <input type="text" class="form-control" id="color"></label>
                    <label style="text-align:center" info="14 000; 1 500 ...(в грамах)">Вага
                        <input type="number" class="form-control" id="weight"></label>
                    <h4>Розміри</h4>
                    <label style="text-align:center" info="211 ; 232  ...(в міліметрах)">Ширина
                        <input type="number" class="form-control" id="dimensionsWidth"></label>
                    <label style="text-align:center" info="465; 452 ...(в міліметрах)">Висота
                        <input type="number" class="form-control" id="dimensionsHeight"></label>
                    <label style="text-align:center" info="459; 430 ...(в міліметрах)">Товщина
                        <input type="number" class="form-control" id="dimensionsLength"></label>
                    <h4 class="label" info="68 970; 7 315 ...(в гривнях)">Ціна*</h4>
                    <label style="text-align:center" info="68 970; 7 315 ...(в гривнях)">
                        <input type="number" class="form-control" id="price"></label>
                    <h4 class="label" info="HDD 2 ТБ + SSD 250 ГБ; На передній панелі: 2 x USB 3.0, 1 x выход для навушників, 1 x вхід для мікрофона ...">Доповнення</h4>
                    <label style="text-align:center" info="HDD 2 ТБ + SSD 250 ГБ; На передній панелі: 2 x USB 3.0, 1 x выход для навушників, 1 x вхід для мікрофона ...">
                        <textarea class="form-control" cols="50" rows="6" id="additional"></textarea></label>
                    <h4 class="label" info="Користувався 7 місяців...; Поцарапаний корпус ...">Опис</h4>
                    <label style="text-align:center" info="Користувався 7 місяців...; Поцарапаний корпус ...">
                        <textarea class="form-control" cols="50" rows="6" id="description"></textarea></label></label>

                    <div class="sell">
                    </div>
                </div>
                <div style="text-align:center" class="col-3 con_end" id="">
                <h4>Дані про продавця:</h4>
                <hr>Ви уже додавали товари на нашому сайті?
                <input type="radio" name='us' value="yes" id="rady">Так
                <input type="radio" name='us' value="no" checked id="radn">Ні
                <hr>
                <label style="text-align:center" info="Дмитро; Андрій ...">Ім'я*
                    <input type="text" class="form-control" id="firstName"></label>
                <label style="text-align:center" info="Рубльовський; Василишин ...">Прізвище*
                    <input type="text" class="form-control" id="lastName"></label>
                <label style="text-align:center" info="dima.rublovskiy@gmail.com ...">Електронний адрес*
                    <input type="text" class="form-control" id="email">
                    <span id="emailError1" class="error text-danger">Email зайнятий</span>
                    <span id="emailSucces1" style="color:green" class="succes text-succes">Email вільний</span>
                    <span id="emailError2" class="error text-danger">Email не знайдено</span>
                    <span id="emailSucces2" style="color:green" class="succes text-succes">Email знайдено</span>
                </label>
                <label style="text-align:center" info="0639914556 ...">Пароль*
                        <input type="password" class="form-control" id="password">
                        <span id="phoneError1" class="error text-danger">Пароль зайнятий</span>
                        <span id="phoneSucces1" style="color:green" class="succes text-succes">Пароль вільний</span>
                        <span id="phoneError2" class="error text-danger">Пароль не знайдено</span>
                        <span id="phoneSucces2" style="color:green" class="succes text-succes">Пароль знайдено</span>
                    </label>
                <br><br><br>
                    <img style='width: 250px' src="../image/p.png" alt="pc.png">
                    

                </div>
            </div>
            <button type="submit" class="btn btn-dark but" id="clear">Очистити все</button>
            <button type="submit" class="btn btn-dark but2" id="send">Виставити на продаж</button>
            <button type="submit" class="btn btn-dark but3" id="back">Назад</button>
        </section>

    </div>
    <script>

        const rootUrl = 'https://murmuring-earth-34683.herokuapp.com/';

        $(document).ready(function () {
            $("#emailError1").hide();
            $('#emailSucces1').hide();
            $("#emailError2").hide();
            $('#emailSucces2').hide();

            $("#phoneError1").hide();
            $('#phoneSucces1').hide();
            $("#phoneError2").hide();
            $('#phoneSucces2').hide();

            let token = window.localStorage.getItem('auth_token');
            if(token) {
                $.ajaxSetup({
                    headers : {
                        'Authorization': 'Bearer ' + token
                    }
                });
                $("#firstName").prop('disabled', true);
                $("#lastName").prop('disabled', true);
                $("#email").prop('disabled', true);
                $("#password").prop('disabled', true);
                $("#firstName").val(window.localStorage.getItem('userFirstName'));
                $("#lastName").val(window.localStorage.getItem('userLastName'));
                $("#email").val(window.localStorage.getItem('userEmail'));
                $("#password").val(window.localStorage.getItem('userPassword'));  
                $('#rady').prop('checked', true);
                $('#rady').prop('disabled', true);
                $('#radn').prop('disabled', true); 

            }
                $('input[type="radio"]').on('change', function (e) {
                    if (e.delegateTarget.defaultValue === 'yes') {    
                            $("#firstName").prop('disabled', true);
                            $("#lastName").prop('disabled', true);
                            $("#firstName").val("-");
                            $("#lastName").val("-");
                            $("#email").val("");
                            $("#password").val("");
                            $("#emailError1").hide();
                            $('#emailSucces1').hide();
                            $("#emailError2").hide();
                            $('#emailSucces2').hide();
                            $("#phoneError1").hide();
                            $('#phoneSucces1').hide();
                            $("#phoneError2").hide();
                            $('#phoneSucces2').hide();      
                    }
                    if (e.delegateTarget.defaultValue === 'no') {
                        $("#firstName").prop('disabled', false);
                        $("#lastName").prop('disabled', false);
                        $("#firstName").val("");
                        $("#lastName").val("");
                        $("#email").val("");
                        $("#password").val("");
                        $("#emailError1").hide();
                        $('#emailSucces1').hide();
                        $("#emailError2").hide();
                        $('#emailSucces2').hide();
                        $("#phoneError1").hide();
                        $('#phoneSucces1').hide();
                        $("#phoneError2").hide();
                        $('#phoneSucces2').hide();
                    }
                });
            
            let pcId = null;
            let m = null;
            let p = null;

                $('#email').keyup(function (e) {
                    console.log($(this).val());
                    let email = $(this).val();

                    $.get(rootUrl + 'users/check-email?email=' + email, function (data, status) {
                        console.log(data);
                        console.log(status);
                        if (data && $('input[name=us]:checked').val() === 'no') {
                            $("#emailError1").show();
                            $('#emailSucces1').hide();
                            $("#emailError2").hide();
                            $('#emailSucces2').hide();
                            m = true;
                            if (p || p === null) {
                                $('#send').prop('disabled', true); 
                            } else {
                                $('#send').prop('disabled', true); 
                            }
                        } else if (data && $('input[name=us]:checked').val() === 'yes') {
                            $("#emailError2").hide();
                            $('#emailSucces2').show();
                            $("#emailError1").hide();
                            $('#emailSucces1').hide();
                            m = false;
                            if (p || p === null) {
                                $('#send').prop('disabled', true); 
                            } else {
                                $('#send').prop('disabled', false); 
                            }
                        } else if (!data && $('input[name=us]:checked').val() === 'no'){
                            $("#emailError1").hide();
                            $('#emailSucces1').show();
                            $("#emailError2").hide();
                            $('#emailSucces2').hide();
                            m = false;
                            if (p || p === null) {
                                $('#send').prop('disabled', true); 
                            } else {
                                $('#send').prop('disabled', false); 
                            }
                        } else {
                            $("#emailError2").show();
                            $('#emailSucces2').hide();
                            $("#emailError1").hide();
                            $('#emailSucces1').hide();
                            m = true;
                            if (p || p === null) {
                                $('#send').prop('disabled', true); 
                            } else {
                                $('#send').prop('disabled', true); 
                            }
                        }
                    });
                });

                $('#password').keyup(function (e) {
                    console.log($(this).val());
                    let phone = $(this).val();

                    $.get(rootUrl + 'users/check-password?password=' + phone, function (data, status) {
                        console.log(data);
                        console.log(status);
                        if (data && $('input[name=us]:checked').val() === 'no') {
                            $("#phoneError1").show();
                            $('#phoneSucces1').hide();
                            $("#phoneError2").hide();
                            $('#phoneSucces2').hide();
                            p = true;
                            if (m || m === null){
                                $('#send').prop('disabled', true);
                            } else {
                                $('#send').prop('disabled', true);
                            }
                        } else if (data && $('input[name=us]:checked').val() === 'yes') {
                            $("#phoneError2").hide();
                            $('#phoneSucces2').show();
                            $("#phoneError1").hide();
                            $('#phoneSucces1').hide();
                            p = false;
                            if (m || m === null){
                                $('#send').prop('disabled', true);
                            } else {
                                $('#send').prop('disabled', false);
                            }
                        } else if (!data && $('input[name=us]:checked').val() === 'no'){
                            $("#phoneError1").hide();
                            $('#phoneSucces1').show();
                            $("#phoneError2").hide();
                            $('#phoneSucces2').hide();
                            p = false;
                            if (m || m === null){
                                $('#send').prop('disabled', true);
                            } else {
                                $('#send').prop('disabled', false);
                            }
                        } else {
                            $("#phoneError2").show();
                            $('#phoneSucces2').hide();
                            $("#phoneError1").hide();
                            $('#phoneSucces1').hide();
                            p = true;
                            if (m || m === null){
                                $('#send').prop('disabled', true);
                            } else {
                                $('#send').prop('disabled', true);
                            }
                        }
                    });
                });

                $(document).on('change', '#photo1', function (e) {
                console.log("зчитано фото");
                uploadFile1(pcId, 1);
                $(this).prop('disabled', true);
                $('#photo2').prop('disabled', false);
            });

            $(document).on('change', '#photo2', function (e) {
                console.log("зчитано фото");
                uploadFile1(pcId, 2);
                $(this).prop('disabled', true);
                $('#photo3').prop('disabled', false);
            });

            $(document).on('change', '#photo3', function (e) {
                console.log("зчитано фото");
                uploadFile1(pcId, 3);
                $(this).prop('disabled', true);
                $('#photo4').prop('disabled', false);
            });

            $(document).on('change', '#photo4', function (e) {
                console.log("зчитано фото");
                uploadFile1(pcId, 4);
                $(this).prop('disabled', true);
                $('#photo5').prop('disabled', false);
            });

            $(document).on('change', '#photo5', function (e) {
                console.log("зчитано фото");
                uploadFile1(pcId, 5);
                $(this).prop('disabled', true);
            });

            function uploadFile1(pcId, photoNumber) {
                let formData = new FormData();
                formData.append('image', $('#photo' + photoNumber)[0].files[0]);

                $.ajax({
                    url: rootUrl + 'pc/image/' + photoNumber + '/' + pcId,
                    method: 'POST',
                    contentType: false,
                    data: formData,
                    processData: false,
                    complete: function (data) {
                        console.log(data);
                        if (data.status === 500) {
                            $('.sell').html(err);
                            console.log("Server error! Status 500 !");
                        }
                        if (data.status === 202) {
                            $("#send").prop('disabled', false);
                            switch (photoNumber) {
                                case 1:
                                if(data.responseText === "bad") {
                                    $('.sell').html('<h5 style="color: red">Помилка з\\'єднання. Фото №1 не додано!</h5>');
                                    break;
                                } else {
                                    $('.sell').html(add1);
                                    break;
                                }
                                case 2:
                                if(data.responseText === "bad") {
                                    $('.sell').html('<h5 style="color: red">Помилка з\\'єднання. Фото №2 не додано!</h5>');
                                    break;
                                } else {
                                    $('.sell').html(add2);
                                    break;
                                }
                                case 3:
                                if(data.responseText === "bad") {
                                    $('.sell').html('<h5 style="color: red">Помилка з\\'єднання. Фото №3 не додано!</h5>');
                                    break;
                                } else {
                                    $('.sell').html(add3);
                                    break;
                                }
                                case 4:
                                if(data.responseText === "bad") {
                                    $('.sell').html('<h5 style="color: red">Помилка з\\'єднання. Фото №4 не додано!</h5>');
                                    break;
                                } else {
                                    $('.sell').html(add4);
                                    break;
                                }
                                case 5:
                                if(data.responseText === "bad") {
                                    $('.sell').html('<h5 style="color: red">Помилка з\\'єднання. Фото №5 не додано!</h5>');
                                    break;
                                } else {
                                    $('.sell').html(add5);
                                    break;
                                }
                            }

                        }
                    }
                });

            }

            let err = '<p style="color: red">Заповніть всі поля зі знаком ' + "'*' та перегляньте правельність введених даних !</p>";

            let nice = '<h4 style="color: green">Вітаємо! Ваш товар у продажі !</h4>';

            let add = '<h5 style="color: green">Додайте фото товару у меню, яке появилося зліва.</h5>';

            let next = '<h4 class="label" info="jpeg; png (бажаний розмір 500х500px). Оберіть хоча б 1 фото.">Фото комп\\'ютера*</h4>'+
                    '<br><input type="file" accept="image/jpeg,image/png" class="form-control" id="photo1"><br>'+
                    '<input type="file" accept="image/jpeg,image/png" class="form-control" id="photo2"><br>'+
                    '<input type="file" accept="image/jpeg,image/png" class="form-control" id="photo3"><br>'+
                    '<input type="file" accept="image/jpeg,image/png" class="form-control" id="photo4"><br>'+
                    '<input type="file" accept="image/jpeg,image/png" class="form-control" id="photo5">';

            let add1 = '<h4 style="color: green">Фото №1 додано.</h4>';
            let add2 = '<h4 style="color: green">Фото №2 додано.</h4>';
            let add3 = '<h4 style="color: green">Фото №3 додано.</h4>';
            let add4 = '<h4 style="color: green">Фото №4 додано.</h4>';
            let add5 = '<h4 style="color: green">Фото №5 додано.</h4>';

            $("#clear").bind("click", function () {
                $("input[type=text], textarea").val("");
                $("input[type=number], textarea").val("");
                $("input[type=file], textarea").val("");
                $('.sell').html('');
                $('#emailError1').hide();
                                $('#emailSucces1').hide();
                                $("#phoneError1").hide();
                                $('#phoneSucces1').hide();
                                $('#emailError2').hide();
                                $('#emailSucces2').hide();
                                $("#phoneError2").hide();
                                $('#phoneSucces2').hide();
            });

            $("#back").bind("click", function (e) {
                e.preventDefault();
                location.href = "sell.html";
             });

            $("#send").bind("click", function (e) {
                e.preventDefault();
                if (pcId === null) {
                    createPC();
                } else {
                    signin();
                }
            });

            function createPC() {
                
                let firstName = $('#firstName').val();
                let lastName = $('#lastName').val();
                let email = $('#email').val();
                let password = $('#password').val();

                let manufacturer = $('#manufacturer').val();
                let model = $('#model').val();
                let processor = $('#processor').val();
                let driveCapacity = $('#driveCapacity').val();
                let ram = $('#ram').val();
                let graphicAdapter = $('#graphicAdapter').val();
                let os = $('#os').val();
                let cooling = $('#cooling').val();
                let color = $('#color').val();
                let weight = $('#weight').val();
                let dimensionsWidth = $('#dimensionsWidth').val();
                let dimensionsHeight = $('#dimensionsHeight').val();
                let dimensionsLength = $('#dimensionsLength').val();
                let price = $('#price').val();
                let additional = $('#additional').val();
                let description = $('#description').val();

                if (firstName === '' || lastName === '' || email === '' || password === ''
                    || manufacturer === '' || model === '' || processor === '' || driveCapacity === ''
                    || ram === '' || graphicAdapter === '' || cooling === '' || color === '' || os === ''
                    || price === '' || weight > 99999.99 ||
                    price > 9999999.99 || dimensionsLength > 9999.99 || dimensionsWidth > 9999.99 ||
                    dimensionsHeight > 9999.99 || driveCapacity > 10000 || ram > 64) {
                    $('.sell').html(err);
                } else {
                    let user = {
                        "firstName": firstName,
                        "lastName": lastName,
                        "email": email,
                        "password": password
                    };
                    let pc = {
                        "manufacturer": manufacturer,
                        "model": model,
                        "cooling": cooling,
                        "driveCapacity": driveCapacity,
                        "ram": ram,
                        "os": os,
                        "processor": processor,
                        "graphicAdapter": graphicAdapter,
                        "color": color,
                        "weight": weight,
                        "dimensionsWidth": dimensionsWidth,
                        "dimensionsHeight": dimensionsHeight,
                        "dimensionsLength": dimensionsLength,
                        "price": price,
                        "additional": additional,
                        "description": description,
                        "pcUser": user
                    };

                    $.ajax({
                        url: rootUrl + "pc",
                        method: 'POST',
                        dataType: 'json',
                        contentType: 'application/json',
                        data: JSON.stringify(pc),
                        complete: function (data) {
                            if (data.status === 500) {
                                $('.sell').html(err);
                                console.log("Server error! Status 500 !");
                                console.log(pc);
                            }
                            if (data.status === 201) {
                                $('#emailError1').hide();
                                $('#emailSucces1').hide();
                                $("#phoneError1").hide();
                                $('#phoneSucces1').hide();
                                $('#emailError2').hide();
                                $('#emailSucces2').hide();
                                $("#phoneError2").hide();
                                $('#phoneSucces2').hide();
                                $('#photoPC').html(next);
                                $('#photo2').prop('disabled',true);
                                $('#photo3').prop('disabled',true);
                                $('#photo4').prop('disabled',true);
                                $('#photo5').prop('disabled',true);
                                
                                pcId = data.responseText;

                                $('.sell').html(add);

                                $('#manufacturer').prop('disabled', true);
                                $('#model').prop('disabled', true);
                                $('#processor').prop('disabled', true);
                                $('#driveCapacity').prop('disabled', true);
                                $('#ram').prop('disabled', true);
                                $('#graphicAdapter').prop('disabled', true);
                                $('#os').prop('disabled', true);
                                $('#cooling').prop('disabled', true);
                                $('#color').prop('disabled', true);
                                $('#weight').prop('disabled', true);
                                $('#dimensionsWidth').prop('disabled', true);
                                $('#dimensionsHeight').prop('disabled', true);
                                $('#dimensionsLength').prop('disabled', true);
                                $('#price').prop('disabled', true);
                                $('#additional').prop('disabled', true);
                                $('#description').prop('disabled', true);
                                $('#firstName').prop('disabled', true);
                                $('#lastName').prop('disabled', true);
                                $('#email').prop('disabled', true);
                                $('#password').prop('disabled', true);
                                $('#clear').prop('disabled', true);
                                $('#back').prop('disabled', true);
                                $('#rady').prop('disabled', true);
                                $('#radn').prop('disabled', true);
                                $("#send").prop('disabled', true);
                                
                            }
                        }
                    });

                }
            }

        });

        function signin() {
            let loginData = {
                email: $('#email').val(),
                password: $('#password').val()
            };
            $.ajax({
                url: rootUrl + 'auth/signin',
                method: 'POST',
                data: JSON.stringify(loginData),
                contentType: 'application/json',
                complete: function(data) {
                    console.log(data);
                    if(data.status == 200) {
                        $('#err').hide();
                        console.log(data.responseJSON.token);
                        window.localStorage.setItem('auth_token', data.responseJSON.token);
                        window.localStorage.setItem('auth_role', data.responseJSON.role);
                        window.localStorage.setItem('userId', data.responseJSON.user.userId);
                        window.localStorage.setItem('userFirstName', data.responseJSON.user.firstName);
                        window.localStorage.setItem('userLastName', data.responseJSON.user.lastName);
                        window.localStorage.setItem('userEmail', data.responseJSON.user.email);
                        window.localStorage.setItem('userPassword', loginData.password);
                        console.log(data.responseJSON);
                        if(data.responseJSON.role == 'ROLE_ADMIN') {
                            $(location).attr('href', 'admin.html');
                        }
                        if(data.responseJSON.role == 'ROLE_USER') {
                            $(location).attr('href', 'user.html?');
                        }
                        //$(location).attr('href', '../../index.html');
                    } else {
                        $('#err').show();
                    }
                }
            })
        }

    </script>
                    `;

    $('#pc').on('click', function (e) {
        e.preventDefault();
        $('#main').html(sellPC);
    });

});