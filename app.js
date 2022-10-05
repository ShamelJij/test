class Someparent {
  constructor(name, age) {
    this.age;
    this.name;
  }
  stateName(someStr) {
    //change feld!!
    $('#feld').text(someStr);
  }
  showMatrix(first, second, third) {
    let i = first;
    let j = second;
    let k = third;
    $(document).ready(function () {
      var f = document.getElementById('col2');
      setInterval(function () {
        if (i > 99990) {
          return;
        } else {
          f.style.display = f.style.display == 'none' ? '' : 'none';
          i *= 2;
          j *= 3;
          k *= 4;
          $('#col2').append(
            `<p class="text-center bg-danger h4 text-white p-3">i = ${i} | j = ${j} | k = ${k}</p>`
          );
          setTimeout(function () {
            $('#col2').empty();
          }, 600);
          console.log(f.text);
        }
      }, 800);
    });
  }
}

class SomeChildClass extends Someparent {
  constructor() {
    super();
  }
}
let child = new SomeChildClass();
child.stateName('this is a test');
child.showMatrix(1, 2, 3);
//$("#feld").text("sometxt");
