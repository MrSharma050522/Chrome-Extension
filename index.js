// let cursor = document.getElementById('blob');

// document.addEventListener('mousemove', function(e){
//     console.log("Mouse moving", cursor)
//   var x = e.clientX;
//   var y = e.clientY;
//   cursor.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`
// });
let cursor = document.getElementsByClassName('blob');

if (cursor) {
  document.addEventListener('mousemove', function(e) {
    console.log("Mouse moving", cursor);
    var x = e.clientX;
    var y = e.clientY;
    cursor[0].style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
  });
} else {
  console.error("Element with ID 'blob' not found!");
}