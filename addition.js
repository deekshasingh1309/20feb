function Additionoftwonumbers() {

    var sum = Array.from(arguments).reduce(function (a, b) {
        return a + b;
    });
    console.log(sum);
}
Additionoftwonumbers(5, 6);