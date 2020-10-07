$(function () {

    $(".send").click(function () {
        var fullname = document.getElementById("fullname").value;
        var mailadres = document.getElementById("mailadres").value;
        var message = document.getElementById("footer-message").value;
        $.ajax({
            method: "POST",
            url: "/Home/FooterContact",
            data: { "fullname": fullname, "mailadres": mailadres, "message":message}
        }).done(function (data) {
            if (data.hasError) {
                alert(data.errorMessage);
            } else {
                alert(data.successMessage);
                
            }
        }).fail(function () {
            alert("Could not establish a connection with the server");
        })
    });
})