$(function () {

    $("#username_error_message").hide();
    $("#surname_error_message").hide();
    $("#email_error_message").hide();
    $("#tickets_error_message").hide();

    var error_username = false;
    var error_surname = false;
    var error_email = false;
    var error_tickets = false;

    $("#form_username").focusout(function () {

        check_username();

    });

    $("#form_surname").focusout(function () {

        check_surname();

    });


    $("#form_email").focusout(function () {

        check_email();

    });

    $("#form_tickets").focusout(function () {

        check_tickets();

    });

    function check_username() {

        var username_length = $("#form_username").val().length;

        if (username_length < 5 || username_length > 20) {
            $("#username_error_message").html("Should be between 5-20 characters");
            $("#username_error_message").show();
            error_username = true;
        } else {
            $("#username_error_message").hide();
        }

    }

    function check_surname() {

        var username_length = $("#form_surname").val().length;

        if (username_length < 5 || username_length > 20) {
            $("#surname_error_message").html("Should be between 5-20 characters");
            $("#surname_error_message").show();
            error_surname = true;
        } else {
            $("#surname_error_message").hide();
        }

    }


    function check_email() {

        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);

        if (pattern.test($("#form_email").val())) {
            $("#email_error_message").hide();
        } else {
            $("#email_error_message").html("Invalid email address");
            $("#email_error_message").show();
            error_email = true;
        }

    }

    function check_tickets() {
    	if($("#form_tickets").val() < 1) {
			$("#tickets_error_message").html("Should be more than one");
			$("#tickets_error_message").show();
			error_tickets = true;
		} else {
			$("#tickets_error_message").hide();
		}
	}
    $("#registration_form").submit(function () {

        error_username = false;
        error_surname = false;
        error_email = false;

        check_username();
        check_surname()
        check_email();

        if (error_username == false && error_surname == false && error_email == false) {
            return true;
        } else {
            return false;
        }

    });

});