

function UpcomingEvent() {
    const data = [
        {
            img: "https://i.pinimg.com/564x/59/62/a1/5962a10ec960a3dd9980617ffdf932b8.jpg",
            title: "Exhibition",
            subtitle: "Experience the Architectural Event Scene",
            description: "Discover exciting events happening in your community and get inspired."
        },
        {
            img: "https://i.pinimg.com/564x/fb/29/a5/fb29a550b7d5475c2f05ae6ef0fc2caf.jpg",
            title: "movie night",
            subtitle: "Movie Night Cermoni",
            description: "Discover the best concerts in town and immerse yourself in live music."
        },
        {
            img: "https://i.pinimg.com/564x/71/36/72/7136721d260db686f84abb6b32811c4b.jpg",
            title: "concert",
            subtitle: "music and dance concert",
            description: "Lorem Ipsum is simply dummy text of the printing"
        },
    ]


    return (
        <section className="container mx-auto mt-4  md:px-12 lg:px-44 mb-32">
            <div className="text-center">
                <h2 className="font-semibold text-4xl md:text-5xl">Discover <br /> Upcoming Event</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">

                {data.map(item => (
                    <div key={item.img} className="border border-blue-800 rounded-lg overflow-hidden">
                        <img className="w-full h-48 md:h-56 object-cover" src={item.img} alt="" />
                        <div className="p-4">
                            <p className="bg-green-50 inline-block px-2 py-1 rounded-full mb-2">{item.title}</p>
                            <h4 className="font-bold text-lg mb-2">{item.subtitle}</h4>
                            <p className="text-sm">{item.description}</p>
                        </div>
                    </div>

                ))}
            </div>
            <div className="flex justify-center items-center mt-5">
                <button className="bg-slate-400 px-4 py-2">View more</button>
            </div>
        </section>
    );
}

export default UpcomingEvent;
