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
  async anotherPromise(someParam) {
    let theEnd = someParam;
    let nndx1 = 0;
    let nndx2 = 0;
    let nndx3 = 0;
    const somePromise = await new Promise((resolve, reject) => {
      setInterval(function () {
        if (nndx1 > theEnd) {
          resolve();
        } else {
          nndx1++;
          //   d.style.display = d.style.display == 'none' ? '' : 'none';
          $('#col11').append(
            `<p class="text-center round bg-success small text-white">result = ${nndx1}</p>`
          );
          console.log(nndx1);
        }
      }, 200);
      console.log('nndx1');
    });
    const somePromise1 = await new Promise((resolve, reject) => {
      async function nestedPromise() {
        let theEnd1 = 6;
        let nndx23 = 0;
        if (nndx23 > theEnd1) {
          resolve();
          console.log('resolved');
        } else {
          //   d.style.display = d.style.display == 'none' ? '' : 'none';
          let nndx12 = 0;
          let nndx22 = 0;
          const somePromise21 = await new Promise((resolve, reject) => {
            setInterval(function () {
              if (nndx12 > theEnd1) {
                resolve();
              } else {
                nndx12++;
                //   d.style.display = d.style.display == 'none' ? '' : 'none';
                $('#col21').append(
                  `<p class="text-center round bg-success small text-white">col21 = ${nndx12}</p>`
                );
                console.log(nndx12);
              }
            }, 200);
            console.log('nndx12');
          });
          const somePromise22 = await new Promise((resolve, reject) => {
            setInterval(function () {
              if (nndx22 > theEnd1) {
                resolve();
              } else {
                nndx22++;
                //   d.style.display = d.style.display == 'none' ? '' : 'none';
                $('#col22').append(
                  `<p class="text-center round bg-success small text-white">col22 = ${nndx22}</p>`
                );
                console.log(nndx22);
              }
            }, 200);
            console.log('nndx22');
          });
          const somePromise23 = await new Promise((resolve, reject) => {
            setInterval(function () {
              if (nndx23 > theEnd1) {
                resolve();
              } else {
                nndx23++;
                //   d.style.display = d.style.display == 'none' ? '' : 'none';
                $('#col23').append(
                  `<p class="text-center round bg-success small text-white">col23 = ${nndx23}</p>`
                );
                console.log(nndx23);
              }
            }, 200);
          });
          //   $('#col12').append(
          //     `<p class="text-center round bg-success small text-white">result = ${nndx2}</p>`
          //   );
          resolve();
          console.log('resolve after the third nested nndx23');
          console.log(nndx23);
        }
      }
      nestedPromise();
      console.log('nndx2');
    });
    const somePromise2 = await new Promise((resolve, reject) => {
      setInterval(function () {
        if (nndx3 > theEnd) {
          resolve();
        } else {
          nndx3++;
          //   d.style.display = d.style.display == 'none' ? '' : 'none';
          $('#col13').append(
            `<p class="text-center round bg-success small text-white">result = ${nndx3}</p>`
          );
          console.log(nndx3);
        }
      }, 200);
      console.log('nndx3');
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
              `<p class="text-center round bg-success small text-white">Decimal = ${ndx1} | Hexadecimal = ${theEndHex1}</p>`
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
              `<p class="text-center rounded bg-info py-2 small text-white">Decimal = ${ndx2} | Hexadecimal = ${theEndHex2}</p>`
            );
            console.log(ndx2);
          }
        }, 600);
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
              `<p class="text-center round bg-danger small text-white">Decimal = ${ndx3} | Hexadecimal = ${theEndHex3}</p>`
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
child.anotherPromise(4);
//$("#feld").text("sometxt");
