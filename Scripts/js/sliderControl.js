$(function () {

    $(".SlideDelete").click(function () {
        if (confirm("Are you sure you want to delete the slider?")) {
            var btn = $(this);
            var btnId = btn.data("del-id");
            $.ajax({
                method: "POST",
                url: "/GucluAdmin/DeleteSlider",
                data: { "id": btnId }
            }).done(function (data) {
                if (data.hasError) {
                    alert(data.errorMessage);
                } else {
                    alert(data.successMessage);
                    window.location.href = data.result;
                }
            }).fail(function () {
                alert("Could not establish a connection with the server");
            })
        }
        else {
            return false;
        }
    });

    $(".deleteUser").click(function () {
        if (confirm("Are you sure you want to delete the user?")) {
            var btn = $(this);
            var btnId = btn.data("user-id");
            $.ajax({
                method: "POST",
                url: "/GucluAdmin/UserDelete",
                data: { "userId": btnId }
            }).done(function (data) {
                if (data.hasError) {
                    alert(data.errorMessage);
                } else {
                    alert(data.successMessage);
                    window.location.href = data.result;
                }
            }).fail(function () {
                alert("Could not establish a connection with the server");
            })
        }
        else {
            return false;
        }
    });
    $(".deleteProduct").click(function () {
        if (confirm("Are you sure you want to delete the product?")) {
            var btn = $(this);
            var btnId = btn.data("product-id");
            $.ajax({
                method: "POST",
                url: "/GucluAdmin/DeleteProduct",
                data: { "productId": btnId }
            }).done(function (data) {
                if (data.hasError) {
                    alert(data.errorMessage);
                } else {
                    alert(data.successMessage);
                    window.location.href = data.result;
                }
            }).fail(function () {
                alert("Could not establish a connection with the server");
            })
        }
        else {
            return false;
        }
    });

    $(".sizeDelete").click(function () {
        if (confirm("Are you sure you want to delete the size?")) {
            var btn = $(this);
            var btnId = btn.data("product-id");
            var sizeId = btn.data("size-id");
            $.ajax({
                method: "POST",
                url: "/GucluAdmin/DeleteSizeFromProduct",
                data: { "productId": btnId ,"sizeId":sizeId}
            }).done(function (data) {
                if (data.hasError) {
                    alert(data.errorMessage);
                } else {
                    alert(data.successMessage);
                    window.location.href = data.result;
                }
            }).fail(function () {
                alert("Could not establish a connection with the server");
            })
        }
        else {
            return false;
        }
    });

    $(".addSize").click(function () {
        var btn = $(this);
        var btnId = btn.data("product-id");
        var productCode = document.getElementById("productCode").value;
        var width = document.getElementById("with").value;
        var Lenght = document.getElementById("Length").value;
        var height = document.getElementById("height").value;
        $.ajax({
            method: "POST",
            url: "/GucluAdmin/AddSizeToProduct",
            data: { "productId": btnId, "ProductCode": productCode, "With": width, "Lenght": Lenght,"Height":height }
        }).done(function (data) {
            if (data.hasError) {
                alert(data.errorMessage);
            } else {
                alert(data.successMessage);
                window.location.href = data.result;
            }
        }).fail(function () {
            alert("Could not establish a connection with the server");
        })
    });

    $(".deleteSlide").click(function () {
        var btn = $(this);
        var btnId = btn.data("slide-id");
        var productId = btn.data("product-id");
        $.ajax({
            method: "POST",
            url: "/GucluAdmin/DeleteSlideFromProduct",
            data: { "slideId": btnId,"productId":productId }
        }).done(function (data) {
            if (data.hasError) {
                alert(data.errorMessage);
            } else {
                alert(data.successMessage);
                window.location.href = data.result;
            }
        }).fail(function () {
            alert("Could not establish a connection with the server");
        })
    });


});