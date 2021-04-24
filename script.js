//Função JS chamada dentro do HTML para validação dos dados
function check() {
    var date = new Date()
    var year = date.getFullYear()
    var fyear = document.getElementById('txtyear')
    var res = document.getElementById('res')

    //Checagem para colocação dos dados
    if (fyear.value.length == 0 || fyear.value > year) {
        alert(`Verifique os dados e tente novamente!`)

    } else {

        var fsex = document.getElementsByName('radsex')
        var age = year - Number(fyear.value)
        var gender = ''
        var img = document.createElement('img')

        //Criando um atributo para inserir imagem pelo próprio JS
        img.setAttribute('id', 'photo')

        //Checando o sexo e idade para imagem a ser colocada
        if(fsex[0].checked) {
            gender = `Homem`

            if (age >= 0 && age < 12) {
                img.setAttribute('src', './images/child_boy.png')
            } else if (age < 21) {
                img.setAttribute('src', './images/teen_boy.png')
            }else if (age < 60) {
                img.setAttribute('src', './images/adult_man.png')
            } else {
                img.setAttribute('src', './images/old_man.png')
            }

        } else if (fsex[1].checked){
            gender = `Mulher`

            if (age >= 0 && age < 12) {
                img.setAttribute('src', './images/child_girl.png')
            } else if (age < 21) {
                img.setAttribute('src', './images/teen_girl.png')
            }else if (age < 60) {
                img.setAttribute('src', './images/adult_woman.png')
            } else {
                img.setAttribute('src', './images/old_woman.png')
            }
        }

        //Saída dos dados
        res.style.textAlign = 'center'
        res.innerHTML = `${gender} de ${age} anos.`
        res.appendChild(img)
    }
}