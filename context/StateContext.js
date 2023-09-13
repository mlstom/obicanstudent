import React, { createContext, useContext, useEffect, useState } from 'react';

const Context = createContext();

export const StateContext = ({ children }) => {
  const [knjige, setknjige] = useState()

  const [knjigePrikaz, setknjigePrikaz] = useState([])
  const dodajKnjigu = (naslov, autor, tip, opis) => {
    const novaKnjiga = {
      id: knjige.length + 1,
      naslov,
      autor,
      tip,
      opis
    };
    setknjige([novaKnjiga, ...knjige]);
  };

  function filtrirajKnjige(searchTerm, knjige, pretraziAutora = true, pretraziOpis = true, pretraziTip = true) {
    const maliSearchTerm = searchTerm.toLowerCase();
    const filtriraneKnjige = knjige.filter((knjiga) => {
      const maliNaslov = knjiga.naslov.toLowerCase();
      const maliAutor = knjiga.autor.toLowerCase();
      const maliOpis = knjiga.opis.toLowerCase(); // Dodali smo pretragu opisa
      const maliTip = knjiga.tip.toLowerCase(); // Dodali smo pretragu tipa

      const uslovNaslov = maliNaslov.includes(maliSearchTerm);
      const uslovAutor = pretraziAutora && maliAutor.includes(maliSearchTerm);
      const uslovOpis = pretraziOpis && maliOpis.includes(maliSearchTerm); // Dodali smo uslov za opis
      const uslovTip = pretraziTip && maliTip.includes(maliSearchTerm); // Dodali smo uslov za tip

      return uslovNaslov || uslovAutor || uslovOpis || uslovTip;
    });

    return filtriraneKnjige;
  }


  function vratiPrvihNekolikoKnjiga(knjige, broj) {
    return knjige.slice(0, broj); // Vraća prvih pet podataka iz niza
  }

  function pronadjiKnjiguPoId(id, nizKnjiga) {
    return nizKnjiga.find((knjiga) => knjiga.id == id);
  }

  return (
    <Context.Provider
      value={{
        knjige,
        knjigePrikaz,
        setknjige,
        dodajKnjigu,
        filtrirajKnjige,
        vratiPrvihNekolikoKnjiga,
        setknjigePrikaz,
        pronadjiKnjiguPoId
      }}
    >
      {children}
    </Context.Provider>
  )
}

export const useStateContext = () => useContext(Context);