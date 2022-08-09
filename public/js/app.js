
let rootUrl = "https://murmuring-earth-34683.herokuapp.com/";
let elements = 0;

$(document).ready(function () {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'UA-233513543-1');
    getLaptops();
});

function getLaptops() {
    $.ajax({
        url: rootUrl + "laptop",
        method: 'GET',
        dataType: 'json',
        success: function (result) {
            $.each(result, function (key, value) {
                elements += 1;
                $('#productions').append(
                    '<div class="laptop" id="laptop-' + value.laptopId + '">' +
                    '<img class="product-image" src="' + value.imageUrl1 + '">' +
                    '<h5>' + value.manufacturer + ' ' + value.model + '</h5>' +
                    '<h6>' + value.diagonalScreen + ", Пам\'ять: " + value.driveCapacity + ', RAM: ' + value.ram + '</h6>' +
                    '<h5 style="color: red">' + 'Ціна: ' + value.price + ' грн.' + '</h5>' +
                    '</div>'
                );

            });
            $('#productions').append('<div class="laptopp" id="laptop">'
                + '<img style="margin-top:18px;width:256px" class="add1-image" src="public/image/add.png">'
                + '<img style="margin-top:18px;width:256px" class="add2-image" src="public/image/add2.png">'
                + '</div>');
            $('.add2-image').hide();
            $('.add1-image').on('mouseover', function () {
                $('.add1-image').hide();
                $('.add2-image').show();
            });
            $('.add2-image').on('mouseleave', function () {
                $('.add1-image').show();
                $('.add2-image').hide();
            });
            $('.laptopp').on('click', function () {
                $('.laptopp').hide();
                getMonitors();
            });
            $('.laptop').on('click', function (e) {
                let id = e.currentTarget.id;
                let laptopId = id.split("-")[1];
                e.preventDefault();
                location.href = "public/html/laptop.html?" + laptopId + '?rostyk2804';
            });
        }
    })
}

function getMonitors() {
    $.ajax({
        url: rootUrl + "monitor",
        method: 'GET',
        dataType: 'json',
        success: function (result) {
            $.each(result, function (key, value) {
                elements += 1;
                $('#productions').append(
                    '<div class="monitor" id="monitor-' + value.monitorId + '">' +
                    '<img class="product-image" src="' + value.imageUrl1 + '">' +
                    '<h5>' + value.manufacturer + ' ' + value.model + '</h5>' +
                    '<h5>' + value.displayDiagonal + '", ' + value.maxResolutionDisplay + '</h5>' +
                    '<h6>' + 'Інтерфейси: ' + value.interfaces + '</h6>' +
                    '<h5 style="color: red">' + 'Ціна: ' + value.price + ' грн.' + '</h5>' +
                    '</div>'
                );

            });
            $('#productions').append('<div class="monitorr" id="monitor">'
                + '<img style="margin-top:18px;width:256px" class="add1-image" src="public/image/add.png">'
                + '<img style="margin-top:18px;width:256px" class="add2-image" src="public/image/add2.png">'
                + '</div>');
            $('.add2-image').hide();
            $('.add1-image').on('mouseover', function () {
                $('.add1-image').hide();
                $('.add2-image').show();
            });
            $('.add2-image').on('mouseleave', function () {
                $('.add1-image').show();
                $('.add2-image').hide();
            });
            $('.monitorr').on('click', function () {
                $('.monitorr').hide();
                getPCs();
            });
            $('.monitor').on('click', function (e) {
                let id = e.currentTarget.id;
                let monitorId = id.split("-")[1];
                e.preventDefault();
                location.href = "public/html/monitor.html?" + monitorId + '?rostyk2804';
            });
        }
    })
}

function getPCs() {
    $.ajax({
        url: rootUrl + "pc",
        method: 'GET',
        dataType: 'json',
        success: function (result) {
            $.each(result, function (key, value) {
                elements += 1;
                $('#productions').append(
                    '<div class="pc" id="pc-' + value.pcid + '">' +
                    '<img class="product-image" src="' + value.imageUrl1 + '">' +
                    '<h5>' + value.manufacturer + ' ' + value.model + '</h5>' +
                    '<h6>' + value.processor + ', RAM: ' + value.ram + '</h6>' +
                    '<h6>' + 'Пам\'ять: ' + value.driveCapacity + '</h6>' +
                    '<h5 style="color: red">' + 'Ціна: ' + value.price + ' грн.' + '</h5>' +
                    '</div>'
                );

            });
            $('#productions').append('<div class="pcc" id="pc">'
                + '<img style="margin-top:18px;width:256px" class="add1-image" src="public/image/add.png">'
                + '<img style="margin-top:18px;width:256px" class="add2-image" src="public/image/add2.png">'
                + '</div>');
            $('.add2-image').hide();
            $('.add1-image').on('mouseover', function () {
                $('.add1-image').hide();
                $('.add2-image').show();
            });
            $('.add2-image').on('mouseleave', function () {
                $('.add1-image').show();
                $('.add2-image').hide();
            });
            $('.pcc').on('click', function () {
                $('.pcc').hide();
                getSmartphones();
            });
            $('.pc').on('click', function (e) {
                let id = e.currentTarget.id;
                let pcId = id.split("-")[1];
                e.preventDefault();
                location.href = "public/html/pc.html?" + pcId + '?rostyk2804';
            });

        }
    })
}

function getSmartphones() {
    $.ajax({
        url: rootUrl + "smartphone",
        method: 'GET',
        dataType: 'json',
        success: function (result) {
            $.each(result, function (key, value) {
                elements += 1;
                $('#productions').append(
                    '<div class="smartphone" id="smartphone-' + value.phoneId + '">' +
                    '<img class="product-image" src="' + value.imageUrl1 + '">' +
                    '<h5>' + value.manufacturer + ' ' + value.model + '</h5>' +
                    '<h6>' + 'RAM: ' + value.ram + '</h6>' +
                    '<h6>' + ' OS: ' + value.os + '</h6>' +
                    '<h6>' + 'Пам\'ять: ' + value.driveCapacity + '</h6>' +
                    '<h5 style="color: red">' + 'Ціна: ' + value.price + ' грн.' + '</h5>' +
                    '</div>'
                );

            });
            $('#productions').append('<div class="smartphonee" id="smartphone">'
                + '<img style="margin-top:18px;width:256px" class="add1-image" src="public/image/add.png">'
                + '<img style="margin-top:18px;width:256px" class="add2-image" src="public/image/add2.png">'
                + '</div>');
            $('.add2-image').hide();
            $('.add1-image').on('mouseover', function () {
                $('.add1-image').hide();
                $('.add2-image').show();
            });
            $('.add2-image').on('mouseleave', function () {
                $('.add1-image').show();
                $('.add2-image').hide();
            });
            $('.smartphonee').on('click', function () {
                $('.smartphonee').hide();
                getTablets();
            });
            $('.smartphone').on('click', function (e) {
                let id = e.currentTarget.id;
                let phoneId = id.split("-")[1];
                e.preventDefault();
                location.href = "public/html/smartphone.html?" + phoneId + '?rostyk2804';
            });
        }
    })
}

function getTablets() {
    $.ajax({
        url: rootUrl + "tablet",
        method: 'GET',
        dataType: 'json',
        success: function (result) {
            elements += 1;
            $.each(result, function (key, value) {
                $('#productions').append(
                    '<div class="tablet" id="tablet-' + value.tabletId + '">' +
                    '<img class="product-image" src="' + value.imageUrl1 + '">' +
                    '<h5>' + value.manufacturer + ' ' + value.model + '</h5>' +
                    '<h6>' + 'RAM: ' + value.ram + '</h6>' +
                    '<h6>' + ' OS: ' + value.os + '</h6>' +
                    '<h6>' + 'Пам\'ять: ' + value.driveCapacity + '</h6>' +
                    '<h5 style="color: red">' + 'Ціна: ' + value.price + ' грн.' + '</h5>' +
                    '</div>'
                );

            });
            $('#productions').append('<div class="tablett" id="tablet">'
                + '<img style="margin-top:18px;width:256px" class="add1-image" src="public/image/add.png">'
                + '<img style="margin-top:18px;width:256px" class="add2-image" src="public/image/add2.png">'
                + '</div>');
            $('.add2-image').hide();
            $('.add1-image').on('mouseover', function () {
                $('.add1-image').hide();
                $('.add2-image').show();
            });
            $('.add2-image').on('mouseleave', function () {
                $('.add1-image').show();
                $('.add2-image').hide();
            });
            $('.tablett').on('click', function () {
                $('.tablett').hide();
                getTVs();
            });
            $('.tablet').on('click', function (e) {
                let id = e.currentTarget.id;
                let tabletId = id.split("-")[1];
                e.preventDefault();
                location.href = "public/html/tablet.html?" + tabletId + '?rostyk2804';
            });
        }
    })
}

function getTVs() {
    $.ajax({
        url: rootUrl + "tv",
        method: 'GET',
        dataType: 'json',
        success: function (result) {
            $.each(result, function (key, value) {
                elements += 1;
                $('#productions').append(
                    '<div class="tv" id="tv-' + value.tvid + '">' +
                    '<img class="product-image" src="' + value.imageUrl1 + '">' +
                    '<h5>' + value.manufacturer + ' ' + value.model + '</h5>' +
                    '<h6>' + value.displayDiagonal + '" ' + value.resolutionDisplay + '</h6>' +
                    '<h6>' + value.smartPlatform + ', HDR: ' + value.hdr + '</h6>' +
                    '<h5 style="color: red">' + 'Ціна: ' + value.price + ' грн.' + '</h5>' +
                    '</div>'
                );

            });
            $('.tv').on('click', function (e) {
                let id = e.currentTarget.id;
                let tvId = id.split("-")[1];
                e.preventDefault();
                location.href = "public/html/tv.html?" + tvId + '?rostyk2804';
            });
        }

    })
}
