function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];;

  function createDaysOfDecember() {
      let getDaysList = document.getElementById('days')
      for (let i = 0; i < dezDaysList.length; i += 1) {
        const DaysListIt = document.createElement('li');
       
        if (dezDaysList[i] === 24 || dezDaysList[i] === 31) {
            DaysListIt.className = 'day holiday';
            DaysListIt.innerHTML =  dezDaysList[i];
            getDaysList.appendChild(DaysListIt);

        } else if (dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18) {
            DaysListIt.className = 'day friday';
            DaysListIt.innerHTML =  dezDaysList[i];
            getDaysList.appendChild(DaysListIt);

        } else if (dezDaysList[i] === 25) {
            DaysListIt.className = 'day friday holiday';
            DaysListIt.innerHTML =  dezDaysList[i];
            getDaysList.appendChild(DaysListIt);

        } else {
            DaysListIt.className = 'day';
            DaysListIt.innerHTML =  dezDaysList[i];
            getDaysList.appendChild(DaysListIt);

        }
      }
  }

  createDaysOfDecember();

  //ex 2

  function createsHolidaysButton(buttonName) {
    let criaBotao = document.createElement('button');
    

    criaBotao.innerHTML = buttonName;
    criaBotao.id = "btn-holiday";
    document.querySelector('.buttons-container').appendChild(criaBotao);
  }
  createsHolidaysButton('Feriados');

  //ex 3
  
   function mudaCorButton() {
    let button = document.querySelector('#btn-holiday');
    let feriadosColor = document.querySelector('.holiday');
    let backgroundColor = 'rgb(238,238,238)';
    let setNewColor = 'blue';

    button.addEventListener('click', function() {
        for (let contador = 0; contador < feriadosColor.length; contador += 1) {
        if (feriadosColor[contador].style.backgroundColor === setNewColor)  {
            feriadosColor[contador].style.backgroundColor = backgroundColor;} else {
          feriadosColor[contador].style.backgroundColor = setNewColor;}}
         })
        }

    mudaCorButton();
    //ex 4

function criaBotaoSexta (botaoNome) {
    let getCointainer = document.querySelector('.buttons-container')
    let criaBotao = document.createElement('button')
    let botaoID = 'btn-friday'
    
    criaBotao.innerHTML = botaoNome;
    criaBotao.id = botaoID;
    getCointainer.appendChild(criaBotao)
}

criaBotaoSexta('Sexta-feira');

//ex5

function mudaCorSexta (fridaysArray) {
    let getButton = document.querySelector('.btn-friday');
    let getFriday = document.querySelector('.friday');
    let newFridayText = 'Sextou';

    getButton.addEventListener('click', function() {
        for (i = 0; i < getFriday.length; i += 1) {
            if (getFriday[i].innerHTML !== newFridayText) {
                getFriday[i].innerHTML = newFridayText;
            } else {
                getFriday[i].innerHTML = fridaysArray[index];
            }
        }
    })
}
let dezFridays = [ 4, 11, 18, 25 ];
mudaCorSexta(dezFridays);

//ex6

function magnifyText () {
    let dias = document.querySelector('.day')

    dias.addEventListener('mouseover', function(evento) {
        evento.target.style.fontSize = 'xx-large';
    })
}

function deMagnifyText () {
    let dias = document.querySelector('.day');

    dias.addEventListener('mousout', function(evento) {
        evento.target.style.fontSize = 'normal'
    })
}

magnifyText();
deMagnifyText();

//ex 7

function adiocionaTarefa (nomeTarefa) {
    let getTasks = document.querySelector('.my-tasks');
    let criaTask = document.createElement('span');
    criaTask.innerHTML = nomeTarefa;
    getTasks.appendChild(criaTask);
}

adiocionaTarefa('cozinhar')

//ex 8

function adcCor (cor) {
    let getTasks = document.querySelector('.my-tasks');
    let criaLegenda = document.createElement('div');

    criaLegenda.className = 'task';
    criaLegenda.style.backgroundColor = cor;
    getTasks.appendChild(criaLegenda);
}

adcCor('green');

//ex 9

function select () {
let getTask = document.querySelector('.task');
let newClass = 'task selected'

getTask.addEventListener('click', function(event){
    if (getTask.className !== newClass) {
        event.target.className = newClass;
    } else {
        event.target.className = 'task'
    }
})
}

select();
