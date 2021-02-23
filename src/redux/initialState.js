export const initialState = {
  posts: {
    data: [
      {
        id: '1',
        title: 'Advertise1',
        advert: 'Content-text-one',
        publicationDate: '2021.02.13',
        lastUpdate: '2021.02.16',
        email: 'testone@test.com',
        status: 'published',
        photo: '',
        price: 10,
        phone: 111111000,
        location: 'Lodz',
      },
      {
        id: '2',
        title: 'Advertise2',
        advert: 'Content-text-two',
        publicationDate: '2021.02.17',
        lastUpdate: '2021.02.17',
        email: 'testtwo@test.com',
        status: 'published',
        photo: '',
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
};
