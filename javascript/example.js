var foo = [1, 2, 3];

var bar = 'foobar';

var baaz = {
    foo: bar,
    quux: foo + bar
};

function foobar() {
    return bar;
}

let quux = () => {
    foobar;
};
