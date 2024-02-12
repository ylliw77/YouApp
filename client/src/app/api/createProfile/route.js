import { NextRequest, NextResponse } from "next/server";

export default async function createUserProfile(NextRequest) {
  const createProfile = {
    name: "",
    birthDay: "",
    height: 0,
    weight: 0,
    interest: [""],
  };

  const responseProfile = await fetch(
    "https://techtest.youapp.ai/api/createProfile",
    {
      method: "POST",
      body: JSON.stringify(createProfile),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  return NextResponse.json(responseProfile);
}
