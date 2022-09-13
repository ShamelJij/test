class Someparent {
  constructor(name, age) {
    this.age;
    this.name;
  }
  stateName(someStr) {
    //change feld!!
    $("#feld").text(someStr);
  }
}

class SomeChildClass extends Someparent {
  constructor() {
    super();
  }
}
let child = new SomeChildClass();
child.stateName("this is a test");
//$("#feld").text("sometxt");
//newcontent
//someothercontent
