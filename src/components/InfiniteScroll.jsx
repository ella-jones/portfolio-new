import React from 'react'

const InfiniteScroll = () => {
  return (
    <div className="bg-apricot w-full inline-flex flex-nowrap overflow-hidden h-16 font-bold text-white">
        <ul class="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll">
            <li>
                <h1>Text here</h1>
            </li>
            <li>
                <h2> . </h2>
            </li>
            <li>
                <h1>Text here</h1>
            </li>
            <li>
                <h2> . </h2>
            </li>
            <li>
                <h1>Text here</h1>
            </li>
            <li>
                <h2> . </h2>
            </li>
            <li>
                <h1>Text here</h1>
            </li>
            <li>
                <h2> . </h2>
            </li>
            <li>
                <h1>Text here</h1>
            </li>
            <li>
                <h2> . </h2>
            </li>
            <li>
                <h1>Text here</h1>
            </li>
            <li>
                <h2> . </h2>
            </li>
        </ul>
        <ul class="flex items-center justify-center md:justify-start [&_li]:mx-2 [&_img]:max-w-none animate-infinite-scroll" aria-hidden="true">
        <li>
                <h1>Text here</h1>
            </li>
            <li>
                <h2> . </h2>
            </li>
            <li>
                <h1>Text here</h1>
            </li>
            <li>
                <h2> . </h2>
            </li>
            <li>
                <h1>Text here</h1>
            </li>
            <li>
                <h2> . </h2>
            </li>
            <li>
                <h1>Text here</h1>
            </li>
            <li>
                <h2> . </h2>
            </li>
            <li>
                <h1>Text here</h1>
            </li>
            <li>
                <h2> . </h2>
            </li>
            <li>
                <h1>Text here</h1>
            </li>
            <li>
                <h2> . </h2>
            </li>
        </ul>              
    </div>
  )
}

export default InfiniteScroll