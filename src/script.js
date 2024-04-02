var nomeJogador = prompt ('Digite Seu Nome')

alert( nomeJogador + '  Esse Game Foi Elaborado junto com a Imersão Dev_ Alura.')

alert( nomeJogador + " Vamos testar se você consegue descubrir o número correto??")

var numeroAle = parseInt(Math.random(1) * 1001)
while (chute != numeroAle) {
var chute = prompt ('Digite Numero entre 1 e 1000')
if (chute == numeroAle) {
alert ('Numero Correto! Você Venceu!')
} else if (chute > numeroAle) {
  alert('Numero Incorreto, O Numero Secreto é Menor! Tente Novamente.')
} else if (chute < numeroAle) {
  alert('Numero Incorreto, o Numero Secreto é Maior! Tente Novamente.')
}
}