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
    