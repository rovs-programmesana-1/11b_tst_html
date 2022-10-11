var txt, name
txt = 'Kā Jūs sauc?'
name = prompt(txt)
if (name==''){
  document.write('Diemžēl Jūs nenosaucāt savu vārdu...')
}
else{
  document.write('Prieks iepazīties, '+ name +'!')
}

