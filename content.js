function uwuafy(text) {
    var replacedText = "";
    const uwus = ['uwu', 'owo'];
    for (var k = 0; k < text.length; k++) {
        var currentChar = text.charAt(k);
        var previousChar = "";
        if (k > 0) {
            previousChar = text.charAt(k - 1);
        }
        if (currentChar == 'L' || currentChar == 'R' || currentChar == 'V') {
            replacedText += 'W';
        } else if (currentChar == 'l' || currentChar == 'r' || currentChar == 'v') {
            replacedText += 'w';
        } else if (currentChar == 'O' || currentChar == 'o') {
            if (previousChar == 'N' || previousChar == 'n' || previousChar == 'M' || previousChar == 'm') {
                replacedText += 'yo';
            } else {
                replacedText += currentChar;
            }
        } else if (currentChar == 'A' || currentChar == 'a') {
            if (previousChar == 'N' || previousChar == 'n' || previousChar == 'M' || previousChar == 'm') {
                replacedText += 'ya';
            } else {
                replacedText += currentChar;
            }
        } else if (currentChar == '.') {
            a = 0;
        } else if (currentChar == ' ' && previousChar == '.') {
            replacedText += ' ' + uwus[Math.floor(Math.random() * uwus.length)] + '. ';
        } else if (currentChar != ' ' && previousChar == '.') {
            replacedText += '.' + currentChar;
        } else {
            replacedText += currentChar;
        }
    }
    //if (previousChar == '.') {
    //    replacedText += '.';
    //}
    return replacedText;
}

//const ignore = ["www.google.com", "google.com", "www.youtube.com", "youtube.com"];
const ignore = [];
var passing = false;
chrome.storage.sync.get(["toggled"], function(res) {
    var passing = res.toggled;
    if (ignore.includes(window.location.hostname)) {
        passing = false;
    }
    if (passing) {
        setInterval(() => {
            var elements = document.body.getElementsByTagName('*');

            for (var i = 0; i < elements.length; i++) {
                var element = elements[i];
                if (element.tagName == "STYLE") {
                    //console.log("style");
                    continue;
                }
                //setTimeout(() => {
                document.title = uwuafy(document.title);
                for (var j = 0; j < element.childNodes.length; j++) {
                    var node = element.childNodes[j];
                    if (node.nodeType === 3) {
                        var text = node.nodeValue;
                        node.nodeValue = uwuafy(text);
                        //var replacedText = text;

                        //replacedText = replacedText.replace(/r/, 'w');
                        //replacedText = replacedText.replace(/R/, 'W');
                        //replacedText = replacedText.replace(/l/, 'w');
                        //replacedText = replacedText.replace(/L/, 'W');
                        //replacedText = replacedText.replace(/v/, 'w');
                        //replacedText = replacedText.replace(/V/, 'W');
                        //replacedText = replacedText.replace(/no/, 'nyo');
                        //replacedText = replacedText.replace(/na/, 'nya');
                        //replacedText = replacedText.replace(/No/, 'Nyo');
                        //replacedText = replacedText.replace(/Na/, 'Nya');
                        //replacedText = replacedText.replace(/NO/, 'NYO');
                        //replacedText = replacedText.replace(/NA/, 'NYA');
                        //replacedText = replacedText.replace(/mo/, 'myo');
                        //replacedText = replacedText.replace(/ma/, 'mya');
                        //replacedText = replacedText.replace(/Mo/, 'Myo');
                        //replacedText = replacedText.replace(/Ma/, 'Mya');
                        //replacedText = replacedText.replace(/MO/, 'MYO');
                        //replacedText = replacedText.replace(/MA/, 'MYA');
                        //replacedText = replacedText.replace(/q\./, 'q uwu.');
                        //replacedText = replacedText.replace(/w\./, 'w uwu.');
                        //replacedText = replacedText.replace(/e\./, 'e uwu.');
                        //replacedText = replacedText.replace(/r\./, 'r uwu.');
                        //replacedText = replacedText.replace(/t\./, 't uwu.');
                        //replacedText = replacedText.replace(/y\./, 'y uwu.');
                        //replacedText = replacedText.replace(/i\./, 'i uwu.');
                        //replacedText = replacedText.replace(/o\./, 'o uwu.');
                        //replacedText = replacedText.replace(/p\./, 'p uwu.');
                        //replacedText = replacedText.replace(/a\./, 'a uwu.');
                        //replacedText = replacedText.replace(/s\./, 's uwu.');
                        //replacedText = replacedText.replace(/d\./, 'd uwu.');
                        //replacedText = replacedText.replace(/f\./, 'f uwu.');
                        //replacedText = replacedText.replace(/g\./, 'g uwu.');
                        //replacedText = replacedText.replace(/h\./, 'h uwu.');
                        //replacedText = replacedText.replace(/j\./, 'j uwu.');
                        //replacedText = replacedText.replace(/k\./, 'k uwu.');
                        //replacedText = replacedText.replace(/l\./, 'l uwu.');
                        //replacedText = replacedText.replace(/z\./, 'z uwu.');
                        //replacedText = replacedText.replace(/x\./, 'x uwu.');
                        //replacedText = replacedText.replace(/c\./, 'c uwu.');
                        //replacedText = replacedText.replace(/v\./, 'v uwu.');
                        //replacedText = replacedText.replace(/b\./, 'b uwu.');
                        //replacedText = replacedText.replace(/n\./, 'n uwu.');
                        //replacedText = replacedText.replace(/m\./, 'm uwu.');
                        //replacedText = replacedText.replace(/\. /, ' uwu. ')

                        //alert(text);
                        //if (text !== replacedText) {
                        //    element.replaceChild(document.createTextNode(replacedText), node);
                        //}
                    }
                }
                //}, 1 * i)
            }
        }, 100)
    }
})