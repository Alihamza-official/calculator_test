
module.exports.calculator = (function() {
    
    var add = function (a, b) {
        return a+b;
    }

    var subtract = function (a, b) {
        return a - b;
    }

    var multiply = function (a, b) {
        return a * b;
    }

    var divide = function (a, b) {
        return a / b;
    }
    
    return {
        add,
        multiply,
        subtract,
        divide
    }; 
}) ();
