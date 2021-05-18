const INITIAL_STATE = {
  sections: [
    {
      title: 'hats',
      imageUrl: 'https://64.media.tumblr.com/d4ccaf68785087d18f54ae4d63f5ad51/tumblr_nn3e00EguV1r59r9fo1_500.jpg',
      id: 1,
      linkUrl: 'shop/hats'
    },
    {
      title: 'jackets',
      imageUrl: 'https://trnds.co/wp-content/uploads/2019/11/EIFKTgTWkAAc8DL.jpg',
      id: 2,
      linkUrl: 'shop/jackets'
    },
    {
      title: 'sneakers',
      imageUrl: 'https://64.media.tumblr.com/7f123e27c62703576a1ab447c721f004/tumblr_op0ld1gtAE1vayf5lo1_500.jpg',
      id: 3,
      linkUrl: 'shop/sneakers'
    },
    {
      title: 'womens',
      imageUrl: 'https://64.media.tumblr.com/474e248b1c87786da922a465aeb8863d/tumblr_nqwitlELPD1t3fd6go1_500.jpg',
      size: 'large',
      id: 4,
      linkUrl: 'shop/womens'
    },
    {
      title: 'mens',
      imageUrl: 'https://64.media.tumblr.com/7802f05f19932a85db50d49a42b90b7a/tumblr_ms25ucuOxe1rhu4loo1_500.jpg',
      size: 'large',
      id: 5,
      linkUrl: 'shop/mens'
    }]
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default directoryReducer;

