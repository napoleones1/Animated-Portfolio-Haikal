'use client'

export default function myImageLoader({ src, width, quality }) {
    if(src.startsWith('https://media.discordapp.net')) return src
    return `http://haikal.freewebhostmost.com/${src}?w=${width}&q=${quality || 75}`
}