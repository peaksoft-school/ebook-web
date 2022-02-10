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
      first_name:'Baybologfhfgt',
      email: 'ieye7531@gmail.com',
      data_redistration:"03.06.2005"
    },
    {
      id:4,
      first_name:'Baygfhfgbolot',
      email: 'ieye7531@gmail.com',
      data_redistration:"03.06.2005"
    },
    {
      id:5,
      first_name:'Baybortertlot',
      email: 'ieye7531@gmail.com',
      data_redistration:"03.06.2005"
    }
  ]

  export function getUsers() {
    return userlist;
  }

  export function findUserById(userId) {
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
      first_name:'fghfg',
      last_name:'Janybekov',
      phone_number:'+996 705 889 125',
      email: 'ieye7531@gmail.com',
      booksum:18,
      number:+996705889125,
      data_redistration:"03.06.2005"
    },
    {
      id:5,
      first_name:'Baytrrwolot',
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
  
  export function findSellerById(userId) {
    return sellerlist.find(
      sellerlist => sellerlist.id === userId
    );
  }