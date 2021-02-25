export const initialState = {
  posts: {
    data: [
      {
        id: '1',
        title: 'Advertise1',
        text: 'Content-text-one',
        publicationDate: '2021.02.13',
        lastUpdate: '2021.02.16',
        email: 'testone@test.com',
        status: 'published',
        price: 10,
        phone: 111111000,
        location: 'Lodz',
      },
      {
        id: '2',
        title: 'Advertise2',
        text: 'Content-text-two',
        publicationDate: '2021.02.17',
        lastUpdate: '2021.02.17',
        email: 'testtwo@test.com',
        status: 'published',
        price: 20,
        phone: 211111000,
        location: 'Lodz',
      },
    ],
    loading: {
      active: false,
      error: false,
    },
  },
  users: {
    data: [ 
      {
        id: '1',
        name: 'admin',
        role: 'admin',
        active: true,
      },
      {
        id: '2',
        name: 'logged user1',
        role: 'logged',
        active: true,
      },
      {
        id: '3',
        name: 'not logged user',
        role: 'not logged',
        active: false,
      },
    ],
  },
};
