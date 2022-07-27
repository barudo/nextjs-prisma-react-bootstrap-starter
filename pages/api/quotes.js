// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const quotes = [
    'The way to get started is to quit talking and begin doing.',
    'If life were predictable it would cease to be life, and be without flavor.',
    'Always remember that you are absolutely unique. Just like everyone else.',
    'Tell me and I forget. Teach me and I remember. Involve me and I learn.',
    'It is during our darkest moments that we must focus to see the light.',
    'Whoever is happy will make others happy too.',
    'The future belongs to those who believe in the beauty of their dreams.',
    `In the end, it's not the years in your life that count. It's the life in your years.`,
    'Life is either a daring adventure or nothing at all.',
  ]

  res.status(200).json({ quote: quotes[(Math.random() * quotes.length) | 0] })
}
