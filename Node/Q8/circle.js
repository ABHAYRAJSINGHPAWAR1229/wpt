// circle.js
module.exports = {
    calculateArea: function(radius) {
        return Math.PI * Math.pow(radius, 2);
    },
    calculateCircumference: function(radius) {
        return 2 * Math.PI * radius;
    }
};
