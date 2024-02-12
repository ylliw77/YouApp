import { NextRequest, NextResponse } from "next/server";
import createUserProfile from "../createProfile/route";

export default async function createUser(user) {
  console.log(user, "<<<<");
  try {
    const response = await fetch("https://techtest.youapp.ai/api/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    return NextResponse.redirect('http://localhost:3000/profile')
  } catch (error) {
    console.log(error, "<<<<");
  }

  //   createUserProfile();
}
