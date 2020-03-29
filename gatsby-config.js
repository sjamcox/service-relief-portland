require(`dotenv`).config({ silent: true })

module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-service-relief`,
      options: {
        authorName: `Sam Cox`,
        authorLink: `https://coxdesign.co/`,
      },
    },
    {
		 resolve: `gatsby-plugin-google-analytics`,
      options: {
			trackingId: `UA-132052018-2`,
      },
    },
  ],
}
