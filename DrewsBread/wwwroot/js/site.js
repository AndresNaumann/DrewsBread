// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

// JQuery Code to show an alert when the user clicks a button.
$(document).ready(function () {
    $("#submitbtn").click(function () {
        var inputValue = $("#breadQuantity").val();

        // Check if the input is a valid number
        if (!isNaN(inputValue)) {
            // Multiply the value by 67.89
            var result = inputValue * 67.89;

            // Show the result in an alert
            alert("You owe me $" + result + ". This bread will be soooo good.\nDon't wash your hands before. We need the extra yeast.");
        } else {
            // Show an alert if the input is not a valid number
            alert("Please enter a valid number");
        }
    });
});

