import React, { useContext } from "react";
import Spinner from "./Spinners";
import { AppContext } from "../Context/Appcontext";

const Blogs = () => {
    // Consume
    const {loading,posts} = useContext(AppContext);
    console.log(posts);
    return (
        <div className="max-w-[620px] w-11/12 py-3 flex flex-col gap-y-7 my-[100px]">
            {loading ? (
                <Spinner />
            ) : posts.length === 0 ? (
                <div className="">
                    <p className="">No Post Found</p>
                </div>
            ) : (
                posts.map((post) => {
                    return <div key={post.id} className="">
                        <p className="font-bold text-2xl ">{post.title}</p>
                        <p className="text-[14px]">
                             <span className="italic text-xl">By {post.author}</span>{" "}
                            <span className="underline font-bold text-xl">{post.category}</span>
                        </p>
                        <p className="text-lg font-bold">Posted on {post.date}</p>
                        <p className="text-[16px] mt-[13px]">{post.content}</p>
                        <div className="flex flex-wrap gap-x-2 items-center">
                            {post.tags.map((tag, index) => {
                                return <span key={index} className="text-xs font-semibold underline text-blue-700 cursor-pointer">#{tag}</span>;
                            })}
                        </div>
                    </div>;
                })
            )}
        </div>
    );
};

export default Blogs;
