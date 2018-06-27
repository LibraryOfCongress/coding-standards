var foo = [1, 2, 3];

var bar = "foobar";

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

// Add a multi-line declaration to demonstrate ESLint rules:
var dupFoo = 1,
    dupBar = baaz,
    dupBaaz = quux;

class Foo {
    bar(x) {
        return "Called with x=" + x;
    }
}

let f = new Foo();
f.bar(dupFoo + dupBar + dupBaaz);
