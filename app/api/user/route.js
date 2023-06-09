import { NextResponse } from 'next/server.js';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import { prisma } from '@/app/db.js';
import jwt from 'jsonwebtoken';

export async function GET(request) {}

export async function POST(request) {
  const url = new URL(request.url);
  const query = url.searchParams.get('endpoint');
  const user = await request.json();

  if (query === 'login') {
    const foundUser = await prisma.user.findUnique({
      where: { email: user.email },
    });

    if (!foundUser) return NextResponse.json({ message: 'User not found' });

    const validPassword = await bcrypt.compare(
      user.password,
      foundUser.password
    );

    if (validPassword) {
      const token = jwt.sign(
        {
          email: user.email,
        },
        'secret_key',
        { expiresIn: '7d' }
      );

      const updatedUser = await prisma.user.update({
        where: { email: user.email },
        data: { token },
      });
      return NextResponse.json(updatedUser);
    }

    return NextResponse.json({ message: 'Invalid Password' });
  } else if (query === 'register') {
    const salt = 10;
    const hashedPassword = await bcrypt.hash(user.password, salt);

    const token = jwt.sign(
      {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      },
      'secret_key',
      { expiresIn: '7d' }
    );

    const createdUser = await prisma.user.create({
      data: {
        id: uuidv4(),
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: hashedPassword,
        token,
      },
    });

    return NextResponse.json(createdUser);
  } else {
    // Invalid endpoint
    return NextResponse.error('Invalid endpoint');
  }
}
