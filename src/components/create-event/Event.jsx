import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function Event() {
    const [date, setDate] = useState(new Date());
    const [formData, setFormData] = useState({
        title: '',
        time: '',
        venue: '',
        eventType: '',
        prohibitedThings: '',
        amenities: '',
        description: '',
    });

    const options = [
        { value: "", label: "Select category" },
        { value: "Sport", label: "Sport" },
        { value: "Seminar", label: "Seminar" },
        { value: "Cinema", label: "Cinema" },
        { value: "Theatre", label: "Theatre" },
        { value: "Exhibition", label: "Exhibition" },
        { value: "Concert", label: "Concert" },
        { value: "Other", label: "Other" },
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData, date);
        // handle form submission logic here
    };

    return (
        <div className="flex flex-col pt-12 mb-10 px-4 md:px-8">
            <div className="flex justify-center mt-12">
                <h1 className="text-2xl md:text-3xl font-extrabold text-center">
                    Create and Manage Your Community Events
                </h1>
            </div>
            <div className="flex justify-center text-xl md:text-2xl mb-6 font-extrabold">
                Events
            </div>
            <p className="flex justify-center mb-7 text-center">
                Provide the necessary information in the provided space below.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center">
                <div className="bg-gray-200 m-2 md:m-7 p-5 rounded-md">
                    <div className="md:flex">
                        <div className="flex flex-col md:w-1/2 mb-4 md:mb-0 md:pr-4">
                            <label htmlFor="title" className="font-bold pb-2">
                                Event Title
                            </label>
                            <input
                                onChange={handleInputChange}
                                type="text"
                                id="title"
                                name="title"
                                required
                                placeholder="Type here"
                                className="p-4 w-full bg-white rounded-md border-none focus:outline-none"
                            />
                        </div>
                        <div className="flex flex-col md:w-1/2">
                            <label htmlFor="time" className="font-bold pb-2">
                                Time
                            </label>
                            <input
                                onChange={handleInputChange}
                                type="text"
                                id="time"
                                name="time"
                                required
                                placeholder="e.g., 2:00 PM"
                                className="p-4 w-full bg-white rounded-md border-none focus:outline-none"
                            />
                        </div>
                    </div>
                    <div className="md:flex mt-4">
                        <div className="md:w-1/2">
                            <label htmlFor="date" className="font-bold pb-2">
                                Select Date
                            </label>
                            <Calendar
                                className="mb-4 mt-3 rounded-md border-none p-2"
                                onChange={setDate}
                                value={date}
                            />
                        </div>
                        <div className="md:w-1/2 md:pl-4">
                            <div className="flex flex-col mb-4">
                                <label htmlFor="venue" className="font-bold pb-2">
                                    Venue
                                </label>
                                <input
                                    onChange={handleInputChange}
                                    type="text"
                                    id="venue"
                                    name="venue"
                                    required
                                    placeholder="Type here"
                                    className="p-4 w-full bg-white rounded-md border-none focus:outline-none"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label htmlFor="eventType" className="font-bold pb-2">
                                    What type of event are you posting?
                                </label>
                                <select
                                    className="p-4 bg-white rounded-md focus:outline-none"
                                    value={formData.eventType}
                                    name="eventType"
                                    onChange={handleInputChange}
                                >
                                    {options.map((option) => (
                                        <option key={option.value} value={option.value}>
                                            {option.label}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="prohibitedThings" className="font-bold pb-2">
                            Prohibited Things
                        </label>
                        <input
                            onChange={handleInputChange}
                            type="text"
                            id="prohibitedThings"
                            name="prohibitedThings"
                            required
                            placeholder="Type here"
                            className="p-4 w-full bg-white rounded-md border-none focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="amenities" className="font-bold pb-2">
                            Amenities
                        </label>
                        <input
                            onChange={handleInputChange}
                            type="text"
                            id="amenities"
                            name="amenities"
                            required
                            placeholder="Type here"
                            className="p-4 w-full bg-white rounded-md border-none focus:outline-none"
                        />
                    </div>
                    <div className="flex flex-col mt-4">
                        <label htmlFor="description" className="font-bold pb-2">
                            Description
                        </label>
                        <textarea
                            onChange={handleInputChange}
                            className="border-none focus:outline-none p-4 rounded-md bg-white"
                            name="description"
                            id="description"
                            cols="30"
                            rows="5"
                            placeholder="Provide a detailed description"
                        ></textarea>
                    </div>
                </div>
                <div className="flex justify-center mt-6">
                    <button className="border border-black w-28 md:w-32 p-2 rounded-md hover:bg-black hover:text-white transition-colors duration-200" type="submit">
                        DONE!
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Event;
