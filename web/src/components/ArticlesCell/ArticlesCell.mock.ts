// Define your own mock data here:
export const standard = (/* vars, { ctx, req } */) => ({
  articles: [
    {
      id: '42',
      title: 'freegan',
      body: "schlitz mlkshk polaroid. sustainable heirloom pok meh. Twee praxis synth hella. Godard 90's venmo direct trade",
      createdAt: new Date().toISOString(),
    },
    {
      id: '43',
      title: 'mixtape',
      body: 'stumptown hell of poutine. leggings skateboard listicle you probably',
      createdAt: new Date().toISOString(),
    },
    {
      id: '44',
      title: 'Authentic',
      body: 'yuccie umami mumblecore artisan pork belly butcher helvetica humblebrag',
      createdAt: new Date().toISOString(),
    },
  ],
})
