function CSSDebugger(options) {
    if (typeof options.selector === "undefined" && typeof options.not === "undefined") {
        var selector = document.querySelectorAll("*");
    }

    else if (typeof options.selector === "undefined") {
        var selector = document.querySelectorAll(`*:not(${options.not}) > *`);
    }

    else if (typeof options.selector != "undefined" && typeof options.not === "undefined") {
        var selector = document.querySelectorAll(`${options.selector}, ${options.selector} *`);
    }

    else {
        var selector = document.querySelectorAll(`${options.selector}:not(${options.not}), ${options.selector} > :not(${options.not}) > *`);
    }

    function randomColor() {
        var letters = '0123456789ABCDEF'.split('');
        var color = "#";
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    selector.forEach(function (el) {
        el.style.outline = `1px solid ${randomColor()}`;
    });

}