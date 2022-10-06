class Someparent {
  constructor(name, age) {
    this.age;
    this.name;
  }

  stateName(someStr) {
    //change feld!!
    $('#feld').text(someStr);
  }

  showTimer(endTimePoint) {
    let theEnd = endTimePoint;
    let ndx = 0;
    $(document).ready(function () {
      var d = document.getElementById('col1');
      setInterval(function () {
        if (ndx > theEnd) {
          return;
        } else {
          ndx++;
          let theEndHex = ndx.toString(16);
          //   d.style.display = d.style.display == 'none' ? '' : 'none';
          $('#col1').append(
            `<p class="text-center round bg-info small text-white">Decimal = ${ndx} | Hexadecimal = ${theEndHex}</p>`
          );
          console.log(theEnd);
        }
      }, 200);
    });
  }

  showMatrix(first, second, third) {
    let i = first;
    let j = second;
    let k = third;
    $(document).ready(function () {
      var f = document.getElementById('col2');
      setInterval(function () {
        if (i > 900) {
          return;
        } else {
          f.style.display = f.style.display == 'none' ? '' : 'none';
          i++;
          j++;
          k++;
          $('#col2').append(
            `<p class="text-center bg-danger h4 text-white p-3">i = ${i} | j = ${j} | k = ${k}</p>`
          );
          setTimeout(function () {
            $('#col2').empty();
          }, 350);
          console.log(f.text);
        }
      }, 600);
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
// child.showMatrix(1, 2, 3);
child.showTimer(15);
//$("#feld").text("sometxt");
