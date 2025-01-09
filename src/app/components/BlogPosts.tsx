import Image from "next/image";
import Link from "next/link";
import React from "react";




const BlogPosts = () => {
    const posts = [
        {
            image: "/blog-1.png",
            title: "10 Reasons To Do A Digital Detox Challenge",
            date: "June 28, 2023",
            comments: 15,
            author: "Admin",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            
        },
        {
            image:  "/blog-2.png",
            title: "Traditional Soft Pizzas with Soft drinks Cheese",
            date: "June 27, 2023",
            comments: 20,
            author: "Admin",
            description: "Discover the best recipes for sweet beer cheese pizzas.",
            link: "/post/2",
        },
        {
            image:  "/blog-3.png",
            title: "The Ultimate Hangover Burger: Egg in a Hole Burger",
            date: "June 26, 2023",
            comments: 10,
            author: "Admin",
            description:
                "A perfect recipe for recovering after a long night—easy to make and delicious.",
            link: "/post/3",
        },
        {
            image:  "/blog-4.png",
            title: "My Favorite Easy Avocado Pizza Toast Recipe",
            date: "June 25, 2023",
            comments: 8,
            author: "Admin",
            description:
                "This avocado pizza toast recipe is healthy, easy, and perfect for breakfast.",
            link: "/post/4",
        },
    ];


    return (
        <div className="space-y-6 ">
            {posts.map((post, index) => (
                <div
                    key={index}
                    className="flex flex-col   bg-white border border-gray-400 rounded-lg overflow-hidden shadow-sm"
                >
                    {/* Image */}
                    <Image
                        src={post.image}
                        alt={post.title}
                        width={871}
                        height={520}
                        className="object-cover"
                    />

                    {/* Content */}
                    <div className="p-4 flex flex-col space-y-4">
                        {/* Metadata */}
                        <div className="flex items-center text-gray-500  text-sm space-x-4">
                            <span className="hover:cursor-pointer hover:text-gray-950">{post.date}</span>
                            <span>•</span>
                            <span className="hover:cursor-pointer hover:text-gray-950">{post.comments} Comments</span>
                            <span>•</span>
                            <span className="hover:cursor-pointer hover:text-gray-950">{post.author}</span>
                        </div>

                        {/* Title */}
                        <h2 className="text-lg font-semibold">{post.title}</h2>

                        {/* Description */}
                        <p className="text-gray-900 text-sm">{post.description}</p>

                        {/* Read More */}
                        <Link
                            href={`/BlogDetails`}
                            className="self-start px-4 py-2 bg-[#FF9F0D] hover:bg-yellow-400 text-white rounded hover:bg-primary_color"
                            key={index}
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            ))}

            {/* Pagination */}
            <div className="flex justify-center space-x-2 mt-6">
                {[1, 2, 3].map((page) => (
                    <button
                        key={page}
                        className="px-4 py-2 bg-gray-200 hover:bg-[#FF9F0D] rounded"
                    >
                        {page}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default BlogPosts;