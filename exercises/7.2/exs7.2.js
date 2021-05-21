const order = {
    name: 'Rafael Andrade',
    phoneNumber: '11-98763-1416',
    address: {
      street: 'Rua das Flores',
      number: '389',
      apartment: '701',
    },
    order: {
      pizza: {
        margherita: {
          amount: 1,
          price: 25,
        },
        pepperoni: {
          amount: 1,
          price: 20,
        }
      },
      drinks: {
        coke: {
          type: 'Coca-Cola Zero',
          price: 10,
          amount: 1,
        }
      },
      delivery: {
        deliveryPerson: 'Ana Silveira',
        price: 5,
      }
    },
    payment: {
      total: 60,
    },
  };
  
  const customerInfo = (order) => {
      const address = order.address.street;
      const deliveryPerson = order.order.delivery.deliveryPerson;
      const cliente = order.name;
      const telefone = order.phoneNumber;
      const numRua = order.address.number;
      const apartment = order.address.apartment;

    console.log(`Olá ${deliveryPerson}, entrega para: ${cliente}, Telefone: ${telefone}, R. ${address}, Nº:${numRua}, AP: ${apartment}`)
  }
  
  customerInfo(order);
  
  const orderModifier = (order) => {
    order.name = 'Luiz Silva';
    const cliente = order.name;
    order.payment.total = 50;
    const valor = order.payment.total;
    const food = Object.keys(order.order.pizza);
    const drink = order.order.drinks.coke.type;
    
    console.log(`Olá ${cliente}, o total do seu pedido de ${food} e ${drink} é R$ ${valor},00.`)
  }
  
  orderModifier(order);


  // EXS PARTE 2

//   ex1

  const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

  const adiocionaTurno = (lesson, chave, valor) => {
    lesson[chave] = valor;
    console.log(lesson2)
  }

//   adiocionaTurno(lesson2, 'turno', 'manhã');

//   ex 2

const listsKeys = objeto => {
   console.log(Object.keys(objeto))
}

// listsKeys(lesson3);

// ex 3

const objectSize = objeto => {
    console.log(Object.keys(objeto).length)
}

// objectSize(lesson3)

// ex 4

const listValues = objeto => {
    console.log(Object.values(objeto))
}

// listValues(lesson3);

// ex 5

const allLessons = [];

Object.assign(allLessons, {lesson1, lesson2, lesson3});

console.log(allLessons)

// ex 6

const numTotalStudents = lessons => {
    const class1 = lessons.lesson1.numeroEstudantes;
    const class2 = lessons.lesson2.numeroEstudantes;
    const class3 = lessons.lesson3.numeroEstudantes;

    const totalNum = class1 + class2 + class3;

    console.log(totalNum);
}

numTotalStudents(allLessons);