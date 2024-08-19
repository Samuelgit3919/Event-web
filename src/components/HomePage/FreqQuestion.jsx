import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

function FreqQuestion() {
    const [expandedIndex, setExpandedIndex] = useState(null);

    const handleToggle = (index) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="shadow-lg rounded border-gray-400 border-t-0 m-auto w-1/1 mb-5 mt-16 md:w-1/2">
            <h2 className="text-center font-bold text-2xl">Frequently Asked Questions</h2>
            <div>
                {data.map((item, i) => {
                    const isExpanded = expandedIndex === i;
                    const expandClass = isExpanded ? 'display' : 'hidden';
                    const ansClass = `${expandClass} p-4`;

                    return (
                        <div key={i}>
                            <div className="p-4 text-xl relative font-medium">
                                <div className="w-5/6 ">
                                    {item.question}
                                    <hr className="p-1 mb-0 font-bold" />
                                </div>
                                <button
                                    aria-label="question-expanded"
                                    className="text-xl absolute top-0 right-0 p-4 focus-outline-none"
                                    onClick={() => handleToggle(i)}
                                >
                                    {isExpanded ?
                                        <FaChevronUp className='w-5' />
                                        :
                                        <FaChevronDown className='w-5' />
                                    }
                                </button>
                            </div>
                            <div className={ansClass}>
                                {item.answer}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

const data = [
    {
        question: 'How do I use the website?',
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quidem tenetur voluptate quae necessitatibus qui perferendis ea suscipit quam."
    },
    {
        question: 'How do I RSVP for an event?',
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quidem tenetur voluptate quae necessitatibus qui perferendis ea suscipit quam."
    },
    {
        question: 'How can I submit event recommendations?',
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quidem tenetur voluptate quae necessitatibus qui perferendis ea suscipit quam."
    },
    {
        question: 'Can I recommend multiple events?',
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quidem tenetur voluptate quae necessitatibus qui perferendis ea suscipit quam."
    },
    {
        question: 'How can I contact support?',
        answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga quidem tenetur voluptate quae necessitatibus qui perferendis ea suscipit quam."
    },
];

export default FreqQuestion;
