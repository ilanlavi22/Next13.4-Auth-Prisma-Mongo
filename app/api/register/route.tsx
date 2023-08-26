import bcrypt from 'bcrypt';
import { prisma } from '../../lib/prismadb';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, password } = body;

  if (!name || !email || !password) {
    return new NextResponse('Missing Fields', { status: 400 });
  }
  const exist = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (exist) {
    //return new NextResponse('Email already exists', { status: 400 });
    throw new Error('Email already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const user = await prisma.user.create({
    data: {
      name,
      email,
      hashedPassword,
    },
  });

  //return new NextResponse('User created', {status:200})
  return NextResponse.json(user);
}
