import { PrismaClient } from '@prisma/client'
import { PRODUCION } from '@/constant/const'

const client = global?.prismadb || new PrismaClient()
if (process.env.NODE_ENV !== PRODUCION) global.prismadb = client

export default client