import database from "@/database";

export default async function allUsers(req, res) {
    const db = await database()
    const [knjige] = await db.execute("SELECT * FROM Knjige")
    
    if (req.method === 'POST') {
        await db.execute(`
          INSERT INTO Knjige (naslov, autor, opis, tip, googleDriveLink)
          VALUES ('${req.body.naslov}', '${req.body.autor}', '${req.body.opis}', '${req.body.tip}', '${req.body.googleDriveLink}')
        `);
    }
    if (req.method === 'DELETE') {
        await db.execute(`DELETE FROM Knjige WHERE id = ${req.body.id}`);
    }
    if (req.method === 'PUT') {
        await db.execute(`
          UPDATE Knjige
          SET naslov = '${req.body.naslov}', autor = '${req.body.autor}', opis = '${req.body.opis}',
              tip = '${req.body.tip}', googleDriveLink = '${req.body.googleDriveLink}'
          WHERE id = ${req.body.id}
        `);
    }
    res.json(knjige)
}