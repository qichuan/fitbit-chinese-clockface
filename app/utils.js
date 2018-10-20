// A utility method to return the image path from given number
var numToImage = function(num, bold) {
    if (bold) {
        return "img/bold_num_" + num + ".png";
    } else {
        return "img/light_num_" + num + ".png";
    }
}

export { numToImage };