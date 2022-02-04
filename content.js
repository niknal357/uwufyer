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
        } else if (currentChar == 'O') {
            if (previousChar == 'N' || previousChar == 'M') {
                replacedText += 'YO';
            } else if (previousChar == 'n' || previousChar == 'm') {
                replacedText += 'yO';
            } else {
                replacedText += currentChar;
            }
        } else if (currentChar == 'o') {
            if (previousChar == 'N' || previousChar == 'M') {
                replacedText += 'yo';
            } else if (previousChar == 'n' || previousChar == 'm') {
                replacedText += 'yo';
            } else {
                replacedText += currentChar;
            }
        } else if (currentChar == 'A') {
            if (previousChar == 'N' || previousChar == 'M') {
                replacedText += 'YA';
            } else if (previousChar == 'n' || previousChar == 'm') {
                replacedText += 'yA';
            } else {
                replacedText += currentChar;
            }
        } else if (currentChar == 'a') {
            if (previousChar == 'N' || previousChar == 'M') {
                replacedText += 'ya';
            } else if (previousChar == 'n' || previousChar == 'm') {
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
    return replacedText;
}

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
                if (element.tagName == "STYLE" || element.tagName == "SCRIPT" || element.tagName == "DIV") {
                    continue;
                }
                for (var j = 0; j < element.childNodes.length; j++) {
                    var node = element.childNodes[j];
                    if (node.nodeType === 3) {
                        var text = node.nodeValue;
                        node.nodeValue = uwuafy(text);
                    }
                }
            }
        }, 100)
    }
})