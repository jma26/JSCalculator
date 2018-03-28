$(document).ready(function() {
    var value;
    var total = '';
    var display = '';
    var operator;
    var evaluation;
    // Default total is 0 on display
    $('#display').text(total);
    
    // All Clear function
    $('#ac').click(function() {
        total = '';
        display = '';
        $('#display').text(total);
    })

    // Clear Input function
    $('#ce').click(function() {
        display = '';
        $('#display').text(display);
    })

    // Operator function
    $('.operator').click(function() {

        if ($(this).attr('id') == '/') {
            operator = '/';
            total = eval(total) + operator;
            $('#display').text(total);
            console.log(total);
            console.log($(this).text() + 'was chosen');
        } else if ($(this).attr('id') == 'x') {
            operator = '*';
            total = eval(total) + operator;
            $('#display').text(total);
            console.log(total);
            console.log($(this).text() + 'was chosen');
        } else if ($(this).attr('id') == 'minus') {
            operator = '-';
            total = eval(total) + operator;
            $('#display').text(total);
            console.log(total);
            console.log($(this).text() + 'was chosen');
        } else if ($(this).attr('id') == 'plus') {
            operator = '+';
            total = eval(total) + operator;
            $('#display').text(total);
            console.log(total);
            console.log($(this).text() + 'was chosen');
        } else if ($(this).attr('id') == '=') {
            // Evaluate
            total = eval(total)
            $('#display').text(total);
            console.log(total);
            console.log($(this).text() + 'was chosen');
        }
    })

    $('.number').click(function() {

        if (typeof total === 'number') {

            // Concatenate the decimal
            if ($(this).attr('id') === '.') {
                total += '.';
                console.log(total);
                $('#display').text(total);
            } else {
                value = parseInt($(this).text());
                // Parse the total from Number to a String for concatenation
                // String + Number enables easy concatenation '3' + 5 = '35'
                total = String(total);
                total += value;
                $('#display').text(total);
            }

        } else {
            
            // Concatenate the decimal if total is a string
            if ($(this).attr('id') === '.') {
                value = '.';
                total += value;
                $('#display').text(total);
                console.log(total);
            } else {
                value = parseInt($(this).text());
                total += value;
                $('#display').text(total);
                console.log(total);
            }
        }
    })
})