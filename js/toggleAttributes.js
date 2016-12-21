var z = function (selector) {
    this.node = document.querySelectorAll(selector);
    this.toggleAttr = function (attr, value) {
        this.value = value || '';
        this.node.forEach(function (node) {
            this._tgA(node, attr)
        });
        return this;
    };
    this._tgA = function (node, attr) {
        if (node.getAttribute(attr) || node.getAttribute(attr) === '') {
            node.removeAttribute(attr);
        } else {
            node.setAttribute(attr, this.value);
        }
    };
    return this;
};