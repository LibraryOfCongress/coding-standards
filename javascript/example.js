var foo = [1, 2, 3];

var bar = "foobar";

var baaz = {
    foo: bar,
    quux: foo + bar
};

let quux = { foo: 1, bar: 2 };

function foobar() {
    return bar;
}

let quuxFunction = () => {
    foobar;
};

// Add a multi-line declaration to demonstrate ESLint rules:
var dupFoo = 1,
    dupBar = baaz,
    dupBaaz = quuxFunction(quux);

class Foo {
    bar(x) {
        return "Called with x=" + x;
    }
}

let f = new Foo();
f.bar(dupFoo + dupBar + dupBaaz);
