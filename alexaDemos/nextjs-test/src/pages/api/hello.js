// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method == "POST") {
    const { name } = req.body
    res.status(200).json({ name })

  } else {
    res.status(200).json({ name: "Alexa Fazio" })
  }
}
