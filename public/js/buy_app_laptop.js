$(document).ready(function () {


    let buyLaptop;

    buyLaptop =
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

        .con_search {
            margin-left: 30px;
            margin-right: 10px;
            margin-top: 20px;
            margin-bottom: 20px;
            height: auto;
            width: 25%;
        }


        .con_main {
            margin-left: 5px;
            margin-right: 5px;
            margin-top: 20px;
            margin-bottom: 20px;
            height: auto;
            width: 70%;
        }

        .but1 {
            margin-top: 0;
            margin-bottom: 0;
            margin-left: 0;
        }

        .but2 {
            margin-top: 0;
            margin-bottom: 20px;
            margin-left: 420px;
        }

        label:hover,
        .label:hover {
            cursor: help;
        }

        label:hover::after,
        .label:hover::after {
            content: attr(info);
            position: absolute;
            left: 88px;
            z-index: 1;
            width: 190px;
            background: black;
            color: #fff;
            font-family: Arial, sans-serif;
            font-size: 14px;
            padding: 5px 10px;
            border: 1px solid green;
        }

        #search_panel {
            margin-top: 10px;
        }

        #search_panel:hover {
            margin-top: 10px;
            cursor: pointer;
            text-decoration-line: underline;
        }

        #mainn,
        #memory,
        #pricee,
        #other {
            margin-top: 10px;
            padding-top: 10px;
            cursor: pointer;
            border: 3px green solid;
            border-radius: 20px;
            padding: 0 auto;
            margin: 0 auto;
        }

        #mainn:hover,
        #memory:hover,
        #pricee:hover,
        #other:hover {
            border-color: darkred;
        }

        .product:hover {
            cursor: pointer;
            border-color: #d34d43;
        }

        .product {
            border: 3px solid green;
            border-radius: 20px;
            margin-top: 20px;
            margin-left: 40px;
            margin-bottom: 20px;
            margin-right: 10px;
            width: 27%;
            height: 300px;
            float: left;
        }

        .product_count {
            margin-top: 10px;
            margin-bottom: 5px;
        }

        .but_count {
            margin: 0 7px;
        }

        .page_count {
            background-color: white;
            border: black solid 1.5px;
            border-radius: 12px;
        }

        .page_count:hover {
            background-color: #d34d43;
        }

        .pages {
            margin-top: 20px;
        }

        .product-image {
            height: 128px;
            max-width: 90%;
            margin-top: 10px;
            margin-bottom: 10px;
        }

        #left {
            margin-top: 10px;
            margin-right: 20px;
            cursor: pointer;
        }

        #right {
            margin-top: 10px;

            cursor: pointer;
        }

        #pagebut {
            width: 100%;
            float: left;
        }
    </style>

    <div id="main">

        <section class="containor-fluid" id="">

            <div class="row">

                <div style="text-align:center" style="text-align:center" class="con_search" id="">
                    <div id="search_panel">
                        <h3 id="search_panelq">Пошукова панель</h3>
                    </div><br>

                    <div id="mainn">
                        <h4 id="mainnq">Осноне</h4>
                        <label class="mainn" style="text-align:center" info="HP; ASUS ...">Виробник
                            <input type="text" class="form-control" id="manufacturer"></label>
                        <label class="mainn" style="text-align:center" info="Pavilion Power 15-cb038ur; FX503VM-E4037 ...">Модель
                            <input type="text" class="form-control" id="model"></label>
                            <label class="mainn" style="text-align:center" info="15.6'' (1920x1080) Full HD ...">Діагональ дисплея
                                <input type="text" class="form-control" id="diagonalScreen"></label>
                            <label class="mainn" style="text-align:center" info="Intel Core i5-7300HQ ...">Процесор
                                <input type="text" class="form-control" id="processor"></label>
                    </div><br>

                    <div id="memory">
                        <h4 id="memoryq">Пам'ять</h4>
                        <label class="memory" style="text-align:center" info="1 000; 512 ...(в Гігабайтах)">Влаштована
                            <input type="text" class="form-control" id="driveCapacity"></label>
                        <label class="memory" style="text-align:center" info="16; 8; 4 ...(в Гігабайтах)">Оперативна
                            <input type="text" class="form-control" id="ram"></label>

                    </div><br>

                    <div id="other">
                        <h4 id="otherq">Інше</h4>
                        <label class="other" style="text-align:center" info="nVidia GeForce GTX 1050, 4 ГБ;  nVidia GeForce GTX 1060, 3 ГБ ...">Відеокарта
                            <input type="text" class="form-control" id="graphicAdapter"></label>
                        <label class="other" style="text-align:center" info="Літій-іонна, 4-елементна, 70 Вт*год; 4-елементна, 64 Вт*год">Потужність
                            батареї
                            <input type="text" class="form-control" id="battery"></label>

                    </div><br>
                    <div id="pricee">
                        <h4 id="priceeq">Ціна</h4>
                        <label class="pricee" class="pricee" style="text-align:center" info="10 800;16 000 ...(в гривнях)">Максимальна
                            ціна
                            <input type="number" class="form-control" id="price"></label>
                    </div><br>

                    <button type="submit" class="btn btn-dark but1" id="search">Пошук</button>

                </div>
                <div style="text-align:center" class="con_main" id="">
                    <div class="product_count">
                        <button type="submit" class="btn btn-dark but_count" id="count-3">3</button>
                        <button type="submit" class="btn btn-dark but_count" id="count-6">6</button>
                        <button type="submit" class="btn btn-dark but_count" id="count-9">9</button>
                        <button type="submit" class="btn btn-dark but_count" id="count-12">12</button>
                    </div>

                    <div id="productions">

                    </div>

                    <div id="pagebut">

                        <button type="submit" class="btn btn-dark" id="left">Назад</button>
                        <button type="submit" class="btn btn-dark" id="right">Вперед</button>
                    </div>
                </div>

            </div>

        </section>

    </div>
    <script>



        let rootUrl = "https://murmuring-earth-34683.herokuapp.com/";
        let productCount = null;
        let pageNumber = 0;
        let numberElementsOnPage = 3;
        let maxEl = false;
        let ph = [];
        let laptop = null;

        $(document).ready(function () {
            let pageNumber = 0;
            let numberElementsOnPage = 3;

            $('#left').prop('disabled', true);
            getLaptops(pageNumber, numberElementsOnPage);

            $('.mainn').hide();
            $('.memory').hide();
            $('.other').hide();
            $('.pricee').hide();

            let mai = false;
            let mem = false;
            let pri = false;
            let oth = false;
            let all = false;

            $('#search').on('click', function(){Search()});
            $('label').on('keyup', function (e) {
                if (e.key === 'Enter') {
                    Search();
                }
            });

            function Search() {
                $('#right').hide();
                $('#left').hide();

                let manufacturer = $('#manufacturer').val();
                let model = $('#model').val();
                let diagonalScreen = $('#diagonalScreen').val();
                let processor = $('#processor').val();
                let graphicAdapter = $('#graphicAdapter').val();
                let driveCapacity = $('#driveCapacity').val();
                let ram = $('#ram').val();
                let battery = $('#battery').val();
                let price = $('#price').val();

                if (manufacturer !== '' || model !== '' || diagonalScreen !== ''
                    || processor !== '' || graphicAdapter !== '' || driveCapacity !== '' || price !== ''
                    || ram !== '' || battery !== '') {

                    laptop = {
                        "manufacturer": manufacturer,
                        "model": model,
                        "diagonalScreen": diagonalScreen,
                        "processor": processor,
                        "graphicAdapter": graphicAdapter,
                        "driveCapacity": driveCapacity,
                        "ram": ram,
                        "battery": battery,
                        "price": price
                    };
                }
                $.each(laptop, function (key, value) {

                    if (value !== '') {
                        $('#productions').empty();
                        searchLaptops(key, value);

                    }

                });

            };

            $('#right').on('click', function () {
                console.log(maxEl);
                $('#productions').empty();
                $('#left').prop('disabled', false);
                if (!maxEl) {
                    pageNumber += 1;

                }
                if (maxEl) {
                    $('#right').prop('disabled', true);
                }
                getLaptops(pageNumber, numberElementsOnPage);

            });

            $('#left').on('click', function () {
                $('#productions').empty();
                $('#right').prop('disabled', false);
                if (pageNumber !== 0) {
                    pageNumber -= 1;
                }
                if (pageNumber === 0) {
                    $('#left').prop('disabled', true);
                }
                getLaptops(pageNumber, numberElementsOnPage);

            });

            $('#count-3').on('click', function () {
                $('#productions').empty();
                pageNumber = 0;
                numberElementsOnPage = 3;
                getLaptops(pageNumber, 3);
                $('#left').prop('disabled', true);
                $('#right').prop('disabled', false);
                $('#right').show();
                $('#left').show();
            });

            $('#count-6').on('click', function () {
                $('#productions').empty();
                pageNumber = 0;
                numberElementsOnPage = 6;
                getLaptops(pageNumber, 6);
                $('#left').prop('disabled', true);
                $('#right').prop('disabled', false);
                $('#right').show();
                $('#left').show();
            });

            $('#count-9').on('click', function () {
                $('#productions').empty();
                pageNumber = 0;
                numberElementsOnPage = 9;
                getLaptops(pageNumber, 9);
                $('#right').prop('disabled', false);
                $('#right').show();
                $('#left').show();
            });

            $('#count-12').on('click', function () {
                $('#productions').empty();
                pageNumber = 0;
                numberElementsOnPage = 12;
                getLaptops(pageNumber, 12);
                $('#left').prop('disabled', true);
                $('#right').prop('disabled', false);
                $('#right').show();
                $('#left').show();
            });

            $('#search_panelq').on("click", function () {
                if (all === false) {
                    $('.mainn').show();
                    $('.memory').show();
                    $('.other').show();
                    $('.pricee').show();
                    all = true;
                } else {
                    $('.mainn').hide();
                    $('.memory').hide();
                    $('.other').hide();
                    $('.pricee').hide();
                    all = false;
                }
            });

            $('label').on('click', function () {
                $("input[type=text], textarea").val("");
                $("input[type=number], textarea").val("");
            });

            $('#mainnq').on("click", function () {
                if (mai === false) {
                    $('.mainn').show();
                    mai = true;
                } else {
                    $('.mainn').hide();
                    mai = false;
                }
            });

            $('#memoryq').on("click", function () {
                if (mem === false) {
                    $('.memory').show();
                    mem = true;
                } else {
                    $('.memory').hide();
                    mem = false;
                }
            });

            $('#priceeq').on("click", function () {
                if (pri === false) {
                    $('.pricee').show();
                    pri = true;
                } else {
                    $('.pricee').hide();
                    pri = false;
                }
            });

            $('#otherq').on("click", function () {
                if (oth === false) {
                    $('.other').show();
                    oth = true;
                } else {
                    $('.other').hide();
                    oth = false;
                }
            });

        });

        function searchLaptops(whatSearch, searchValue) {
            $.ajax({
                url: rootUrl + "laptop/" + whatSearch + "/search?search=" + searchValue,
                method: 'GET',
                dataType: 'json',
                success: function (result) {
                    $('#productions').append('<h4 style="color:blue; text-align: right;">Знайдено ноутбуків : ' + result.length + '<h4>');
                    $.each(result, function (key, value) {
                        ph[key] = value;
                        $('#right').hide();
                        $('#left').hide();
                        $('#productions').append(
                            '<div class="product" id="product-' + value.laptopId + '">' +
                            '<img class="product-image" src="' + value.imageUrl1 + '">' +
                            '<h5>' + value.manufacturer + ' ' + value.model + '</h5>' +
                            '<h6>' + value.diagonalScreen + ", Пам\\'ять: " + value.driveCapacity + ', RAM: ' + value.ram + '</h6>' +
                            '<h5 style="color: red">' + 'Ціна: ' + value.price + ' грн.' + '</h5>' +
                            '</div>'
                        );

                    });
                    $('.product').on('click', function (e) {
                        let id = e.currentTarget.id;
                        let laptopId = id.split("-")[1];
                        e.preventDefault();
                        location.href = "laptop.html?" + laptopId + "?rostyk28";
                    });
                },
                error: function () {
                    $('#right').hide();
                    $('#left').hide();
                    $('#productions').append('<br><h4 style="color:red">Вибачте, нічого не знайдено.</h4>');

                }
            })
        }

        function getLaptops(pageNumber, numberElementsOnPage) {
            $.ajax({
                url: rootUrl + "laptop/pages?page=" + pageNumber + "&size=" + numberElementsOnPage,
                method: 'GET',
                dataType: 'json',
                success: function (result) {
                    $('#productions').append('<h4 style="color:blue; text-align: right;">' + result.length + '<h4>');
                    maxEl = result[numberElementsOnPage - 1] === undefined;
                    $.each(result, function (key, value) {
                        $('#productions').append(
                            '<div class="product" id="product-' + value.laptopId + '">' +
                            '<img class="product-image" src="' + value.imageUrl1 + '">' +
                            '<h5>' + value.manufacturer + ' ' + value.model + '</h5>' +
                            '<h6>' + value.diagonalScreen + ", Пам\\'ять: " + value.driveCapacity + ', RAM: ' + value.ram + '</h6>' +
                            '<h5 style="color: red">' + 'Ціна: ' + value.price + ' грн.' + '</h5>' +
                            '</div>'
                        );

                    });
                    $('.product').on('click', function (e) {
                        let id = e.currentTarget.id;
                        let laptopId = id.split("-")[1];
                        e.preventDefault();
                        location.href = "laptop.html?" + laptopId + "?rostyk28";
                    });
                }
            })
        }
    </script>
                    `;

    $('#laptop').on('click', function (e) {
        e.preventDefault();
        $('#main').html(buyLaptop);
    });

    $('#back').on('click', function (e) {
        e.preventDefault();
        let adress = e.currentTarget.baseURI;
        let o = adress.split("?");
        for (i = 0; i < o.length; i++) {
            if (o[i] === 'rostyk2804') {
                location.href = "../../index.html";
            } if (o[i] === 'rostyk28') {
                $('#main').html(buyLaptop);
            } if (o[i] === 'rostykUs') {
                location.href = "user.html";
            }
        }
    });

});