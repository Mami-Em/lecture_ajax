function change(val) {
    var aj = new XMLHttpRequest();
    aj.onreadystatechange = function () {
        $('#mother').html(aj.responseText);
    };
    aj.open('GET', val, true);
    aj.send();
}