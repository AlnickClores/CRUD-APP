// this file is responsible for "DELETING" and "UPDATING "user info from database

import Info from "../../../models/schema";
import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  try {
    const { id } = params;
    const foundUser = await Info.findOne({ _id: id });

    return NextResponse.json({ foundUser }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: "Error: ", error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await Info.findByIdAndDelete(id);

    return NextResponse.json({ msg: "User Info Deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: "Error: ", error }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const userData = body.formData;

    const updateUserInfo = await Info.findByIdAndUpdate(id, {
      ...userData,
    });

    return NextResponse.json({ msg: "User Info Updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ msg: "Error: ", error }, { status: 500 });
  }
}
