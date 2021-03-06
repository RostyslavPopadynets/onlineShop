$(document).ready(function () {


    let buyMonitor;

    buyMonitor =
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
            #display,
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
            #display:hover,
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
                            <label class="mainn" style="text-align:center" info="LG; Samsung ...">Виробник
                                <input type="text" class="form-control" id="manufacturer"></label>
                            <label class="mainn" style="text-align:center" info="23MP68VQ-P; Curved C24F396F ...">Модель
                                <input type="text" class="form-control" id="model"></label>
                        </div><br>
    
                        <div id="display">
                            <h4 id="displayq">Дисплей</h4>
                            <label class="display" style="text-align:center" info="23; 23.5 ...(в дюймах)">Мінімальна діагональ
                                <input type="number" class="form-control" id="displayDiagonal"></label>
                            <label class="display" style="text-align:center" info="1920 x 1080 ...">Максимальне розширення
                                <input type="text" class="form-control" id="maxResolutionDisplay"></label>
    
                        </div><br>
    
                        <div id="other">
                            <h4 id="otherq">Інше</h4>
                            <label class="other" style="text-align:center" info="IPS; VA ...">Тип матриці
                                <input type="text" class="form-control" id="matrixType"></label>
                            <label class="other" style="text-align:center" info="DVI; HDMI; VGA ...">Інтерфейси
                                <input type="text" class="form-control" id="interfaces"></label>
    
                        </div><br>
                        <div id="pricee">
                            <h4 id="priceeq">Ціна</h4>
                            <label class="pricee" class="pricee" style="text-align:center" info="28 999;16 999 ...(в гривнях)">Максимальна
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
            let monitor = null;
    
            $(document).ready(function () {
                let pageNumber = 0;
                let numberElementsOnPage = 3;
    
                $('#left').prop('disabled', true);
                getMonitors(pageNumber, numberElementsOnPage);
    
                $('.mainn').hide();
                $('.display').hide();
                $('.other').hide();
                $('.pricee').hide();
    
                let mai = false;
                let dis = false;
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
                    let maxResolutionDisplay = $('#maxResolutionDisplay').val();
                    let displayDiagonal = $('#displayDiagonal').val();
                    let matrixType = $('#matrixType').val();
                    let interfaces = $('#interfaces').val();
                    let price = $('#price').val();
    
                    if (manufacturer !== '' || model !== '' || maxResolutionDisplay !== ''
                        || displayDiagonal !== '' || matrixType !== '' || interfaces !== '' || price !== '') {
    
                        monitor = {
                            "manufacturer": manufacturer,
                            "model": model,
                            "maxResolutionDisplay": maxResolutionDisplay,
                            "displayDiagonal": displayDiagonal,
                            "matrixType": matrixType,
                            "interfaces": interfaces,
                            "price": price
                        };
                    }
                    $.each(monitor, function (key, value) {
    
                        if (value !== '') {
                            $('#productions').empty();
                            searchMonitors(key, value);
    
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
                    getMonitors(pageNumber, numberElementsOnPage);
    
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
                    getMonitors(pageNumber, numberElementsOnPage);
    
                });
    
                $('#count-3').on('click', function () {
                    $('#productions').empty();
                    pageNumber = 0;
                    numberElementsOnPage = 3;
                    getMonitors(pageNumber, 3);
                    $('#left').prop('disabled', true);
                    $('#right').prop('disabled', false);
                    $('#right').show();
                    $('#left').show();
                });
    
                $('#count-6').on('click', function () {
                    $('#productions').empty();
                    pageNumber = 0;
                    numberElementsOnPage = 6;
                    getMonitors(pageNumber, 6);
                    $('#left').prop('disabled', true);
                    $('#right').prop('disabled', false);
                    $('#right').show();
                    $('#left').show();
                });
    
                $('#count-9').on('click', function () {
                    $('#productions').empty();
                    pageNumber = 0;
                    numberElementsOnPage = 9;
                    getMonitors(pageNumber, 9);
                    $('#right').prop('disabled', false);
                    $('#right').show();
                    $('#left').show();
                });
    
                $('#count-12').on('click', function () {
                    $('#productions').empty();
                    pageNumber = 0;
                    numberElementsOnPage = 12;
                    getMonitors(pageNumber, 12);
                    $('#left').prop('disabled', true);
                    $('#right').prop('disabled', false);
                    $('#right').show();
                    $('#left').show();
                });
    
                $('#search_panelq').on("click", function () {
                    if (all === false) {
                        $('.mainn').show();
                        $('.display').show();
                        $('.other').show();
                        $('.pricee').show();
                        all = true;
                    } else {
                        $('.mainn').hide();
                        $('.display').hide();
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
    
                $('#displayq').on("click", function () {
                    if (dis === false) {
                        $('.display').show();
                        dis = true;
                    } else {
                        $('.display').hide();
                        dis = false;
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
    
            function searchMonitors(whatSearch, searchValue) {
                $.ajax({
                    url: rootUrl + "monitor/" + whatSearch + "/search?search=" + searchValue,
                    method: 'GET',
                    dataType: 'json',
                    success: function (result) {
                        $('#productions').append('<h4 style="color:blue; text-align: right;">Знайдено моніторів : ' + result.length + '<h4>');
                        $.each(result, function (key, value) {
                            ph[key] = value;
                            $('#right').hide();
                            $('#left').hide();
                            $('#productions').append(
                                '<div class="product" id="product-' + value.monitorId + '">' +
                                '<img class="product-image" src="' + value.imageUrl1 + '">' +
                                '<h5>' + value.manufacturer + ' ' + value.model + '</h5>' +
                                '<h5>' + value.displayDiagonal + '", ' + value.maxResolutionDisplay + '</h5>' +
                                '<h6>' + 'Інтерфейси: ' + value.interfaces + '</h6>' +
                                '<h5 style="color: red">' + 'Ціна: ' + value.price + ' грн.' + '</h5>' +
                                '</div>'
                            );
    
                        });
                        $('.product').on('click', function (e) {
                            let id = e.currentTarget.id;
                            let monitorId = id.split("-")[1];
                            e.preventDefault();
                            location.href = "monitor.html?" + monitorId + "?rostyk28";
                        });
                    },
                    error: function () {
                        $('#right').hide();
                        $('#left').hide();
                        $('#productions').append('<br><h4 style="color:red">Вибачте, нічого не знайдено.</h4>');
    
                    }
                })
            }
    
            function getMonitors(pageNumber, numberElementsOnPage) {
                $.ajax({
                    url: rootUrl + "monitor/pages?page=" + pageNumber + "&size=" + numberElementsOnPage,
                    method: 'GET',
                    dataType: 'json',
                    success: function (result) {
                        $('#productions').append('<h4 style="color:blue; text-align: right;">' + result.length + '<h4>');
                        maxEl = result[numberElementsOnPage - 1] === undefined;
                        $.each(result, function (key, value) {
                            $('#productions').append(
                                '<div class="product" id="product-' + value.monitorId + '">' +
                                '<img class="product-image" src="' + value.imageUrl1 + '">' +
                                '<h5>' + value.manufacturer + ' ' + value.model + '</h5>' +
                                '<h5>' + value.displayDiagonal + '", ' + value.maxResolutionDisplay + '</h5>' +
                                '<h6>' + 'Інтерфейси: ' + value.interfaces + '</h6>' +
                                '<h5 style="color: red">' + 'Ціна: ' + value.price + ' грн.' + '</h5>' +
                                '</div>'
                            );
    
                        });
                        $('.product').on('click', function (e) {
                            let id = e.currentTarget.id;
                            let monitorId = id.split("-")[1];
                            e.preventDefault();
                            location.href = "monitor.html?" + monitorId + "?rostyk28";
                        });
                    }
                })
            }
        </script>
                    `;

    $('#monitor').on('click', function (e) {
        e.preventDefault();
        $('#main').html(buyMonitor);
    });

    $('#back').on('click', function (e) {
        e.preventDefault();
        let adress = e.currentTarget.baseURI;
        let o = adress.split("?");
        for (i = 0; i < o.length; i++) {
            if (o[i] === 'rostyk2804') {
                location.href = "../../index.html";
            } if (o[i] === 'rostyk28') {
                $('#main').html(buyMonitor);
            } if (o[i] === 'rostykUs') {
                location.href = "user.html";
            } 
        }
    });

});