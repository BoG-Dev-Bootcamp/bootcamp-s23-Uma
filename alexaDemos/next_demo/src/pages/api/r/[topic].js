export default async function handler(req, res) {
    console.log(req.query)
    res.status(200).json({ name: req.query.name })
}