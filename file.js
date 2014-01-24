var Foo = (function () {
    function Foo() {
    }
    Foo.prototype.quack = function () {
        window.alert("quack2");
    };

    Foo.prototype.foo = function (testing) {
        console.log(testing);
    };
    return Foo;
})();
