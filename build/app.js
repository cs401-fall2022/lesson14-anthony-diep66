/**
 * This returns the string hello
 * @returns the String hello
 */
function hello() {
    return "Hello World";
}
;
/**
 * turns demo red
 */
function turnRed() {
    if (document != null) {
        var c = document.getElementById("demo").style.color;
        if (c === 'red') {
            document.getElementById("demo").style.color = "black";
        }
        else {
            document.getElementById("demo").style.color = "red";
        }
    }
}
function buttonsHandler() {
    var ts_tag = document.getElementById("ts-tag");
    var js_tag = document.getElementById("js-tag");
    //set button functionality for ts button
    ts_tag.addEventListener("mouseover", function () {
        document.getElementById("tsbtn").style.backgroundColor = "#b77219d2";
    });
    ts_tag.addEventListener("mouseout", function () {
        document.getElementById("tsbtn").style.backgroundColor = "#4d5fd7b7";
    });
    //set button functionalnonality for js button
    js_tag.addEventListener("mouseover", function () {
        document.getElementById("jsbtn").style.backgroundColor = "#b77219d2";
    });
    js_tag.addEventListener("mouseout", function () {
        document.getElementById("jsbtn").style.backgroundColor = "#4d5fd7b7";
    });
}
export { hello, turnRed, buttonsHandler };
//# sourceMappingURL=app.js.map