import { Card } from "@/components/ui/card";
import Image from "next/image";
import { IoCloudUploadSharp } from "react-icons/io5";
import { MdArticle } from "react-icons/md";
import PostImage from "../../../../public/assets/post.webp"
import { FaRegCircleUser } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";
import { FaComment } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";


export default function Home() {
  return (
    <div className="flex flex-col w-full lg:w-[30rem] lg:mx-auto">
      <Card className="px-4 flex-row justify-between">
        <h1 className="font-bold">Create Post</h1>
        <div className="flex gap-2 cursor-pointer">
            <IoCloudUploadSharp color="blue" size={24}/>
            <p>Post</p>
        </div>
        <div className="flex gap-2 cursor-pointer">
            <MdArticle color="red" size={24}/>
            <p>Article</p>
        </div>
      </Card>
      <section className="mt-4">
        <Card className="py-0">
            <div className="flex gap-2 items-center p-2">
                <FaRegCircleUser size={30}/>
                <h1>Realsoumyadey</h1>
            </div>
            <div className="px-2">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, temporibus.</p>
            </div>
            <Image src={PostImage} alt="Post Image" className="w-full"/>
            <div className="flex justify-around px-2 pb-2">
                <div className="flex flex-col justify-center items-center">
                    <AiFillLike color="white" size={20}/>
                    <p>Like</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <FaComment size={20} color="white"/>
                    <p>Comment</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                    <IoIosShareAlt size={24} color="white"/>
                    <p>Share</p>
                </div>
            </div>
        </Card>
      </section>
    </div>
  );
}
