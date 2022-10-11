// Summas augšējā robeža: 
var n = 100
// Indeksa mainīgais: 
var k = 1
// Kvadrātu summas sākuma vērtība:
var s = 0
// Teksts, ko rādīt:
var txt ='1<sup>2</sup> + 2<sup>2</sup> +... +' 
txt += n + '<sup>2</sup> ='
// Skaitļu kvadrātu summas aprēķināšana: 
while(k <= n){
s += k * k // Jauna saiskaitāma pievienošana
k ++ // Jauna indeksa mainīgā vērtība
}
// Rezultāts:
 document.write(txt+s)