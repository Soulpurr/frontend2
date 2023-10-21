import Results from '@/components/Results'
import React from 'react'
export default async function page({params}) {
    let res= await fetch(`https://hn.algolia.com/api/v1/search?query=${params.slug}`,{
        cache:"no-store"
    })
    let data=await res.json();
    console.log(data.hits[0]._highlightResult.title.value)
  return (
    <div>
        <Results results={data.hits}/>
    </div>
  )
}


