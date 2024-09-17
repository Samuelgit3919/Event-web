import React from "react";

const blogs = [
    {
        id: 1,
        title: "Upcoming Music Festivals 2024",
        excerpt:
            "Discover the most anticipated music festivals of 2024. Get your tickets and don't miss out on the fun!",
        imgUrl:
            "https://i.pinimg.com/564x/8c/d3/79/8cd379feb761b6411014b178e7061a97.jpg",
        link: "#",
    },
    {
        id: 2,
        title: "How to Make the Most of Your Event Experience",
        excerpt:
            "Here are some tips to ensure you have the best time at your next event, from arriving early to interacting with performers.",
        imgUrl:
            "https://i.pinimg.com/564x/71/36/72/7136721d260db686f84abb6b32811c4b.jpg",
        link: "#",
    },
    {
        id: 3,
        title: "Top 5 Conferences to Attend for Networking",
        excerpt:
            "Explore the top conferences that offer excellent networking opportunities and industry insights.",
        imgUrl:
            "https://i.pinimg.com/564x/4a/4d/2c/4a4d2c0a0784fadc63c557202e1436c6.jpg",
        link: "#",
    },
];

const Blog = () => {
    return (
        <section className="pt-12 lg:mx-24 mx-4">
            <div className="container mx-auto px-4 py-8">
                {/* Introductory Text */}
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-4xl font-bold text-gray-800 mb-4">
                        Stay Updated with Our Latest Blogs
                    </h2>
                    <p className="text-lg text-gray-600">
                        Explore our latest articles on upcoming events, event tips, and
                        networking opportunities. Stay informed and get the most out of your
                        event experience by following our expert guides and recommendations.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid gap-12 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                    {blogs.map((blog) => (
                        <article
                            key={blog.id}
                            className="group rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl transition-shadow duration-300"
                            aria-labelledby={`blog-${blog.id}-title`}
                        >
                            {/* Image */}
                            <img
                                src={blog.imgUrl}
                                alt={blog.title}
                                className="w-full h-52 object-cover group-hover:scale-105 transition-transform duration-300"
                                loading="lazy"
                            />
                            {/* Content */}
                            <div className="p-6">
                                <h3
                                    id={`blog-${blog.id}-title`}
                                    className="text-2xl font-semibold mb-3 text-gray-900"
                                >
                                    {blog.title}
                                </h3>
                                <p className="text-gray-600 mb-4">{blog.excerpt}</p>
                                <a
                                    href={blog.link}
                                    className="text-blue-600 hover:text-blue-800 font-medium underline transition-colors duration-200"
                                    aria-label={`Read more about ${blog.title}`}
                                >
                                    Read More →
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;
