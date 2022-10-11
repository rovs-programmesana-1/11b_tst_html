//Funkcijas apraksts: 
function f(x){
// Ja х<0
if (x < 0) {
  return 0
}
// Ja х>=0
else {
  // Ja х<2
  if (x < 2) {
    return х * х
  }
  // Ja х>=2
  else {
    // Ja х<5
    if (x < 5) {
      return 6 - х
    }
    // Ja х>=5
    else {
      return 1
    }
  }
}
} // Funkcijas apraksta beigas

document.write('<h4>Funkcija</h4>')
//Attēla pievienošana dokumentā:
document.write('<img src="function.jpg" width="500" height="300"><br>')
// Mainigais argumentam: 
var z
// Argumernta vērtība - gadījumskaitlis (no -2 līdz 7):
z = 9 * Math.random() - 2
document.write("arguments: <b>" + z + "</b><br>")
// Funkcijas izsaukums:
document.write("Funkcijas vērtība: <b>" + f(z) + "</b>")