import { NextResponse } from 'next/server.js';
import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { prisma } from '../../db.js';

export async function GET(request) {}

export async function POST(request) {
  const url = new URL(request.url);
  const query = url.searchParams.get('endpoint');
  const user = await request.json();

  if (query === 'login') {
    const foundUser = await prisma.userBasic.findUnique({
      where: { email: user.email.toLowerCase() },
    });

    if (!foundUser) return NextResponse.json({ message: 'User not found' });

    const validPassword = await bcrypt.compare(
      user.password.toLowerCase(),
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

      const updatedUser = await prisma.userBasic.update({
        where: { email: user.email.toLowerCase() },
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

    const createdUser = await prisma.userBasic.create({
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
  } else if (query === 'message') {
    await prisma.message.create({
      data: {
        id: uuidv4(),
        name: user.name,
        email: user.email,
        message: user.message,
      },
    });

    return NextResponse.json({ messagedCreated: true });
  } else {
    // Invalid endpoint
    return NextResponse.error('Invalid endpoint');
  }
}
