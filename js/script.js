// Add Record
function addRecord() {
    // get values
    var name = $("#name").val();
    var phone = $("#phone").val();
    var email = $("#email").val();
    var description = $("#description").val();

    // Add record
    $.post("ajax/addRecord.php", {
        name: name,
        phone: phone,
        email: email,
        description: description
    }, function (data, status) {
        // close the popup
        $("#add_new_record_modal").modal("hide");

        // read records again
        readRecords();

        // clear fields from the popup
        $("#name").val("");
        $("#phone").val("");
        $("#email").val("");
		$("#description").val("");
    });
}

// READ records
function readRecords() {
    $.get("ajax/readRecords.php", {}, function (data, status) {
        $(".records_content").html(data);
    });
}


function DeleteUser(id) {
    var conf = confirm("Are you sure, do you really want to delete User?");
    if (conf == true) {
        $.post("ajax/deleteUser.php", {
                id: id
            },
            function (data, status) {
                // reload Users by using readRecords();
                readRecords();
            }
        );
    }
}

function GetUserDetails(id) {
    // Add User ID to the hidden field for furture usage
    $("#hidden_user_id").val(id);
    $.post("ajax/readUserDetails.php", {
            id: id
        },
        function (data, status) {
            // PARSE json data
            var user = JSON.parse(data);
            // Assing existing values to the modal popup fields
            $("#update_name").val(user.name);
            $("#update_phone").val(user.phone);
            $("#update_email").val(user.email);
            $("#update_description").val(user.description);
        }
    );
    // Open modal popup
    $("#update_user_modal").modal("show");
}

function UpdateUserDetails() {
    // get values
    var name = $("#update_name").val();
    var phone = $("#update_phone").val();
    var email = $("#update_email").val();
    var description = $("#update_description").val();

    // get hidden field value
    var id = $("#hidden_user_id").val();

    // Update the details by requesting to the server using ajax
    $.post("ajax/updateUserDetails.php", {
            id: id,
            name: name,
            phone: phone,
            email: email,
            description: description
        },
        function (data, status) {
            // hide modal popup
            $("#update_user_modal").modal("hide");
            // reload Users by using readRecords();
            readRecords();
        }
    );
}

$(document).ready(function () {
    // READ recods on page load
    readRecords(); // calling function
});