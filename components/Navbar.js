import { useStateContext } from '@/context/StateContext';
import React, {useEffect, useState} from 'react';
import { FaSearch } from 'react-icons/fa';
import CardKnjiga from './CardKnjiga';

function CustomNavbar() {
  const [searchTerm, setsearchTerm] = useState('')
  const { knjige, filtrirajKnjige, vratiPrvihNekolikoKnjiga,knjigePrikaz,setknjigePrikaz } = useStateContext();
  
  const handleSearchClick = (e) => {
    e.preventDefault(); 
    const filterKnjige = filtrirajKnjige(searchTerm, knjige, true, true, true);
    setknjigePrikaz(filterKnjige);
  };

  const handleSearchChange = (e) => {
    setsearchTerm(e.target.value);
  }

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Obican Student</a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Pocetna</a>
            </li>
            
          </ul>
          <form className="d-flex" role="search" onSubmit={handleSearchClick}>
            <div className="position-relative">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Pretrazi"
                aria-label="Search"
                role="button"
                aria-expanded="false"
                value={searchTerm} 
                onChange={(e)=>handleSearchChange(e)}
              />
            </div>
            <button style={{marginLeft:'10px'}} className="btn btn-outline-success" type="button"  onClick={handleSearchClick}>
              <FaSearch />
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default CustomNavbar;
