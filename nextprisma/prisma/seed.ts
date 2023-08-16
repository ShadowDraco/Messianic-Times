import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// seed the database by upserting a user when database is initialized!
async function main() {
  const user = await prisma.user.upsert({
    //? Upsert instead of create because it
    where: { email: 'test@test.com' }, //? checks if the user doesn't exist then create it
    update: {},
    create: {
      email: 'test@test.com',
      name: 'Test User',
      password: `testPassword!`,
    },
  })

  console.log('user created during seed process! : ', user.name)
}

// call the seed function and disconnect
main()
  .then(() => {
    prisma.$disconnect()
  })
  .catch(async e => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })
