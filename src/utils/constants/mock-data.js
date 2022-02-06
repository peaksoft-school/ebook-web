export const userlist = [
    {
      id:1,
      first_name:'Dima',
      email: 'ieye7531@gmail.com',
      data_redistration:"03.06.2005"
    },
    {
      id:2,
      first_name:'Eldiyar',
      email: 'ieye7531@gmail.com',
      data_redistration:"03.06.2005"
    },
    {
      id:3,
      first_name:'Baybolot',
      email: 'ieye7531@gmail.com',
      data_redistration:"03.06.2005"
    },
    {
      id:4,
      first_name:'Baybolot',
      email: 'ieye7531@gmail.com',
      data_redistration:"03.06.2005"
    },
    {
      id:5,
      first_name:'Baybolot',
      email: 'ieye7531@gmail.com',
      data_redistration:"03.06.2005"
    }
  ]

  export function getUsers() {
    return userlist;
  }
  export function getUser(userId) {
    return userlist.find(
      userlist => userlist.id === userId
    );
  }

  export const sellerlist = [
    {
      id:1,
      first_name:'Dima',
      last_name:'Babkin',
      phone_number:'+996 705 889 125',
      email: 'ieye7531@gmail.com',
      booksum:18,
      number:+996705889125,
      data_redistration:"03.06.2005"
    },
    {
      id:2,
      first_name:'Eldiyar',
      last_name:'Maksutov',
      phone_number:'+996 705 889 125',
      email: 'ieye7531@gmail.com',
      booksum:18,
      number:+996705889125,
      data_redistration:"03.06.2005"
    },
    {
      id:3,
      first_name:'Baybolot',
      last_name:'Janybekov',
      phone_number:'+996 705 889 125',
      email: 'ieye7531@gmail.com',
      booksum:18,
      number:+996705889125,
      data_redistration:"03.06.2005"
    },
    {
      id:4,
      first_name:'Baybolot',
      last_name:'Janybekov',
      phone_number:'+996 705 889 125',
      email: 'ieye7531@gmail.com',
      booksum:18,
      number:+996705889125,
      data_redistration:"03.06.2005"
    },
    {
      id:5,
      first_name:'Baybolot',
      last_name:'Janybekov',
      phone_number:'+996 705 889 125',
      email: 'ieye7531@gmail.com',
      booksum:18,
      number:+996705889125,
      data_redistration:"03.06.2005"
    }
  ]

  export function getSellers() {
    return sellerlist;
  }
  export function getSeller(userId) {
    return sellerlist.find(
      sellerlist => sellerlist.id === userId
    );
  }