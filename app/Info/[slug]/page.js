import React from "react";

export default async function page({ params }) {
  let res = await fetch(`http://hn.algolia.com/api/v1/items/${params.slug}`);
  let data = await res.json();
  function renderHTMLAsText(html) {
    return { __html: html };
  }

  return (
    <div className="max-w-md mx-auto p-4  shadow-lg rounded-lg md:max-w-2xl lg:max-w-4xl">
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">
        {data.title}
      </h1>
      <p className="text-gray-600 text-sm md:text-base lg:text-lg mb-4">
        Points: {data.points}
      </p>

      <div className="mt-4">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mb-2">
          Comments:
        </h2>
        <ul className="flex flex-col space-y-8">
          {data.children.map((comment, index) => (
            <div key={index} className="bg-gray-900 p-4 rounded-xl">
              <li className="text-sm md:text-base lg:text-lg mb-2">
                <div dangerouslySetInnerHTML={renderHTMLAsText(comment.text)} />
                
              </li>
              <p className="text-end font-bold text-green-400">User:{comment.id}</p>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
}
