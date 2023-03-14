import createFarm from "../../../server/mongodb/actions/createFarm";

export default async function handler(req, res) {
    try {
        await createFarm(req.body)
    } catch (e) {
        return res.status(500).json({success: false, message: e.message})
    }
    return res.status(201).json({success: true, message: "Successfully created a farm!!!!!!!!!!!"})
}