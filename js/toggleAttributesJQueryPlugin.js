$.fn.toggleAttr = function (attr, value) {
    value = value || '';
    this.each(function () {
        if (this.getAttribute(attr) || this.getAttribute(attr) === '') {
            this.removeAttribute(attr);
        } else {
            this.setAttribute(attr, value);
        }
    });
};