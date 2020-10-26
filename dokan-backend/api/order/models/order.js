const getRandomNumber = (min = 1, max = 10) => {
  return Math.ceil(Math.random() * (max - min + 1));
};

module.exports = {
  /**
   * Triggered before user creation.
   */
  lifecycles: {
    async beforeCreate(data) {
      const date = new Date();
      const code = `${date.getFullYear()}${
        date.getMonth() + 1
      }${date.getDate()}-${getRandomNumber()}${getRandomNumber()}${getRandomNumber()}`;

      data.code = code;
    },
  },
};
