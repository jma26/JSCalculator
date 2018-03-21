$(document).ready(function() {
    var value;
    var total = 0;
    var operator;
    // Default total is 0 on display
    $('#display').text(total);
    
    // All Clear function
    $('#ac').click(function() {
        total = 0;
        $('#display').text(total);
    })

    // Operator function
    $('.operator').click(function() {

        if ($(this).attr('id') == '/') {
            operator = '/';
            total += operator;
            $('#display').text(total);
            console.log(total);
            console.log($(this).text() + 'was chosen');
        } else if ($(this).attr('id') == 'x') {
            operator = '*';
            total += operator;
            $('#display').text(total);
            console.log(total);
            console.log($(this).text() + 'was chosen');
        } else if ($(this).attr('id') == 'minus') {
            operator = '-';
            total += operator;
            $('#display').text(total);
            console.log(total);
            console.log($(this).text() + 'was chosen');
        } else if ($(this).attr('id') == 'plus') {
            operator = '+';
            total += operator;
            $('#display').text(total);
            console.log(total);
            console.log($(this).text() + 'was chosen');
        } else if ($(this).attr('id') == '%') {
            operator = '%';
            total += operator;
            $('#display').text(total);
            console.log(total);
            console.log($(this).text() + 'was chosen');
            // Evaluating expression
        } else if ($(this).attr('id') == '=') {
            // Regex goes here, split expression into binary expression
            $('#display').text(total);
            console.log(total);
            console.log($(this).text() + 'was chosen');
            
        }



    })

    $('.number').click(function() {
        value = $(this).text();
        if (total === 0) {
            total = value;
            $('#display').text(total);
        } else {
            total += value;
            $('#display').text(total);
        }
    })
})