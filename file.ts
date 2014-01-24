class Foo {
	
	public quack() {
		window.alert("quack2");
	}
	
	public foo(testing:Testing) {
		console.log(testing);
	}
}

interface Testing {
	foo:string;
}