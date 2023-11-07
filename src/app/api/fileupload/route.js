import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  const jsonbody = await req.json();
  const data = jsonbody;

  return NextResponse.json(data, {
    status: 200,
  });
};
