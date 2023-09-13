import database from "@/database";

export default async function allUsers(req, res) {
    const db = await database()
    const [knjige] = await db.execute("SELECT * FROM Knjige")
    res.json(knjige)
}