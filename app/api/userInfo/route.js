// this file is responsible to "POST" the data from registration form to database
// and to "GET" the data from MongoDB

import Info from "../../models/schema";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const userData = body.userInfo;
    await Info.create(userData); //mongoose function to create

    return NextResponse.json({ message: "Info Added" }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function GET() {
  try {
    const userInfo = await Info.find(); // mongoose function to find
    return NextResponse.json({ userInfo }, { status: 200 });
  } catch (error) {
    console.error("Error in GET request:", error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
