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