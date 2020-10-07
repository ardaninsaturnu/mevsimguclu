
function dropdownProduct() {

    $('.dropdown-products').toggle()
    $('.dropdown-header').hide()

}

function dropdownHeader() {

    $('.dropdown-header').toggle()
    $('.dropdown-products').hide()

}

$(document).ready(function () {

    $('[data-toggle="tooltip"]').tooltip();
}
);


/*------------------------------LOGİN-VERİFY-------------------------------------*/


function validation() {

    var username = $("#usernameLogin").val()
    var password = $("#passwordLogin").val()



    if (username == "") {

        $("#errorUsername").html("enter username" + " " + '<i class="fas fa-skull-crossbones aria-hidden="true"></i>')

    } else {
        $("#errorUsername").html("")
    }

    if (password == "") {

        $("#errorPassword").html("enter password" + " " + '<i class="fas fa-skull-crossbones aria-hidden="true"></i>')

    } else {
        $("#errorPassword").html("")

    }


    if (username == 'admin' && password == 1234) {

        $("#submitLink").attr('href', './pages/header.html')
    }


}


$(document).ready(function () {
    $('#dtBasicExample').DataTable();
    $('.dataTables_length').addClass('bs-select');



    //--------------------------hamburger button-----------------------------------------------//


});


//--------------------------add new user---------------------------------//



$(function () {

    $("#userForm").on("submit", function (e) {

        e.preventDefault();

        var name = $("#adminName").val();
        var mail = $("#userEmail").val();
        var username = $("#adminUsername").val();

        $("#user-table").append('<tr><td>' + name + '</td><td>' + mail + '</td><td>' + username + '</td><td><button type="button" class="btn btn-warning edit-button"><i class="fas fa-user-edit"></i></button> <button type="button" class="btn btn-danger delete-button"><i class="far fa-trash-alt"></i></button></td></tr>');
    });

    $("#userlist").on("click", ".delete-button", function () {

        $(this).closest("tr").remove();

    })


})



//--------------------------hamburger button-----------------------------------------------//









    $("#hamburger-button").on('click', function () {

        $(".hamburger-menu").css('height', '60%')

    })


    $("#exit-button").on('click', function () {

        $(".hamburger-menu").css('height', '0%')

    })






