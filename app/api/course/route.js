import { NextResponse } from "next/server";
import course from './data.json'
import { v4 as uuidv4 } from 'uuid';


export async function GET() {
    return NextResponse.json(course)
  }

  // export async function POST(request) {
  //   const {title,description,id,level,link}=await request.json()
  //   console.log(title,description,id,level,link)
  //   const newCourse={
  //     id:uuidv4(),
  //     title,
  //     description,
  //     level,
  //     link
  //   }
  //   course.push(newCourse);

  //   return NextResponse.json(course);
  // }

  