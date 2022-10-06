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
    $(document).ready(function () {
      let firstCol = new Promise((resolve, reject) => {});
      let secondCol = new Promise((resolve, reject) => {});
      function thirdCol() {}
      firstCol();
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
  async promiseAllDemo(endTimePoint) {
    try {
      let theEnd = endTimePoint;
      let ndx1 = 0;
      let ndx2 = 0;
      let ndx3 = 0;
      const promise1 = await new Promise((resolve, reject) => {
        setInterval(function () {
          if (ndx1 > theEnd) {
            resolve();
          } else {
            ndx1++;
            let theEndHex1 = ndx1.toString(16);
            //   d.style.display = d.style.display == 'none' ? '' : 'none';
            $('#col1').append(
              `<p class="text-center round bg-info small text-white">Decimal = ${ndx1} | Hexadecimal = ${theEndHex1}</p>`
            );
            console.log(ndx1);
          }
        }, 200);
        console.log('fi');
      });
      const promise2 = await new Promise((resolve, reject) => {
        setInterval(function () {
          if (ndx2 > theEnd) {
            resolve();
          } else {
            ndx2++;
            let theEndHex2 = ndx2.toString(16);
            //   d.style.display = d.style.display == 'none' ? '' : 'none';
            $('#col2').append(
              `<p class="text-center round bg-info small text-white">Decimal = ${ndx2} | Hexadecimal = ${theEndHex2}</p>`
            );
            console.log(ndx2);
          }
        }, 200);
        console.log('sec');
      });
      const promise3 = await new Promise((resolve, reject) => {
        setInterval(function () {
          if (ndx3 > theEnd) {
            return;
          } else {
            ndx3++;
            let theEndHex3 = ndx3.toString(16);
            //   d.style.display = d.style.display == 'none' ? '' : 'none';
            $('#col3').append(
              `<p class="text-center round bg-info small text-white">Decimal = ${ndx3} | Hexadecimal = ${theEndHex3}</p>`
            );
            console.log(ndx3);
          }
        }, 200);
        console.log('thir');
      });
      const resolvedPromises = await Promise.all([
        promise1,
        promise2,
        promise3,
      ]);
    } catch (err) {
      console.log(err);
    }
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
// child.showTimer(14);
child.promiseAllDemo(14);
//$("#feld").text("sometxt");
