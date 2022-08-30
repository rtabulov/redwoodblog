import type { Prisma } from '@prisma/client'
import { db } from 'api/src/lib/db'

export default async () => {
  try {
    //
    // Manually seed via `yarn rw prisma db seed`
    // Seeds automatically with `yarn rw prisma migrate dev` and `yarn rw prisma migrate reset`
    //
    // Update "const data = []" to match your data model and seeding needs
    //
    const data: {
      users: Prisma.UserCreateArgs['data'][]
      posts: Prisma.PostCreateArgs['data'][]
    } = {
      users: [
        {
          email: 'rtabulov',
          hashedPassword:
            '8c2c6f3caedf657a2d833bbd59589581a0552bbfc074b921520129d1dd80e72e',
          salt: 'eb7aaf3fd784b3cb57e937681911692b',
        },
      ],
      posts: [
        {
          title: "I'm baby you",
          body: "I'm baby you probably haven't heard of them squid DIY, glossier letterpress butcher asymmetrical sriracha. Cold-pressed mixtape DSA tattooed waistcoat shaman enamel pin slow-carb gentrify. Church-key vibecession shoreditch, mumblecore sustainable chillwave meh. Authentic kale chips gatekeep drinking vinegar cloud bread ascot yr next level woke. Snackwave shaman wolf, microdosing slow-carb poke trust fund plaid praxis YOLO pop-up.",
        },
        {
          title: "I'm baby wolf",
          body: "I'm baby wolf messenger bag pickled vexillologist. Listicle plaid letterpress, polaroid sustainable iceland knausgaard kale chips gentrify everyday carry XOXO tacos migas cronut green juice. Church-key tilde chicharrones single-origin coffee fashion axe, brunch williamsburg semiotics poke lyft typewriter art party actually 90's. Helvetica art party tofu man braid ramps skateboard slow-carb, actually 90's leggings tilde four loko yr YOLO gluten-free. Pabst lyft palo santo you probably haven't heard of them, kombucha vaporware craft beer whatever kogi put a bird on it. You probably haven't heard of them wolf skateboard tattooed fingerstache. XOXO hella fixie swag, snackwave mlkshk franzen kinfolk praxis flannel.",
        },
        {
          title: "I'm baby jOMO",
          body: "I'm baby jOMO pickled hoodie actually selfies wolf. Vice single-origin coffee 90's, mukbang typewriter activated charcoal slow-carb aesthetic ethical hexagon chartreuse hella kinfolk art party. Austin gastropub migas yr four dollar toast same drinking vinegar tilde +1 yuccie. Lomo DIY Brooklyn poutine iceland. Cred chia cliche hammock single-origin coffee kitsch kinfolk yuccie leggings. Banjo 3 wolf moon bushwick vice glossier etsy, distillery fanny pack drinking vinegar lumbersexual.",
        },
      ],
    }

    console.log(
      "\nUsing the default './scripts/seed.{js,ts}' template\nEdit the file to add seed data\n"
    )

    // Note: if using PostgreSQL, using `createMany` to insert multiple records is much faster
    // @see: https://www.prisma.io/docs/reference/api-reference/prisma-client-reference#createmany
    Promise.all(
      //
      // Change to match your data model and seeding needs
      //
      [
        ...data.users.map(async (data) => {
          const record = await db.user.upsert({
            where: { email: data.email },
            update: data,
            create: data,
          })
          console.log(record)
        }),
        ...data.posts.map(async (data) => {
          const record = await db.post.create({ data })
          console.log(record)
        }),
      ]
    )
  } catch (error) {
    console.warn('Please define your seed data.')
    console.error(error)
  }
}
