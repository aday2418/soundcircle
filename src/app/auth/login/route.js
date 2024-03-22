"use server"

import { mongoClient } from "../../../clients/mongo"
import setAuthCookie from '../../../lib/setAuthCookie'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'



export async function POST(req){
    const body = await req.json()
    const username = body.username
    const password = body.password

    const db = mongoClient()
    const collection = db.collection('users');
    const user = await collection.findOne({ username })

    if(user && await bcrypt.compare(password, user.password)){
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
        setAuthCookie(token)
        return Response.json({ token })
    }

    return Response.json({ error: "Username or Password is incorrect"})
}

