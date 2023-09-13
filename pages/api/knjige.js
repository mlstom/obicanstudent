import database from "@/database";

export default async function allUsers(req, res) {
    const db = await database()
    const [knjige] = await db.execute("SELECT * FROM Knjige")
    
    if (req.method === 'POST') {
        let izmenjeniString= req.body.googleDriveLink;
        const re = /(view|edit)/i;
        const poklapanja = req.body.googleDriveLink.match(re);
        if (poklapanja) {
            const nizPoklapanja = poklapanja.map(p => p.toLowerCase());
            const prvoPoklapanje = nizPoklapanja[0];
            izmenjeniString = req.body.googleDriveLink.slice(0, req.body.googleDriveLink.indexOf(prvoPoklapanje) + prvoPoklapanje.length);
        }
        await db.execute(`
          INSERT INTO Knjige (naslov, autor, opis, tip, googleDriveLink)
          VALUES ('${req.body.naslov}', '${req.body.autor}', '${req.body.opis}', '${req.body.tip}', '${izmenjeniString}')
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