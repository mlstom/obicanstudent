import React, { useState } from 'react';
import { AiFillDelete, AiTwotoneEdit } from 'react-icons/ai';
import { v4 as uuidv4 } from 'uuid';

const Admin = ({ knjige }) => {
    const [user, setUser] = useState(false);
    const [pass, setPass] = useState('');
    const [username, setUsername] = useState('');
    const [sve, setSve] = useState(false);
    const [nema, setNema] = useState(false);
    const [prpage, setPrpage] = useState(true);
    const [edit, setEdit] = useState(false);
    const [del, setDel] = useState(false);
    const [odabran, setOdabran] = useState({});
    const [createprod, setCreateprod] = useState(false);
    const [idx, setIdx] = useState(0);

    const handleDelete = async () => {
        await fetch('/api/knjige', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ id: odabran.id }),
        });
        knjige.splice(idx, 1);
        setOdabran(null);
        setIdx(0);
        setDel(false);
    };

    const handleEdit = async () => {
        await fetch('/api/knjige', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                id: odabran.id,
                naslov: odabran.naslov,
                autor: odabran.autor,
                opis: odabran.opis,
                tip: odabran.tip,
                googleDriveLink: odabran.googleDriveLink,
            }),
        });
        knjige.splice(idx, 1);
        knjige.push(odabran);
        setOdabran(null);
        setIdx(0);
        setEdit(false);
    };

    const handleCreate = async () => {
        await fetch('/api/knjige', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                naslov: odabran.naslov,
                autor: odabran.autor,
                opis: odabran.opis,
                tip: odabran.tip,
                googleDriveLink: odabran.googleDriveLink,
            }),
        });
        odabran.id = uuidv4();
        knjige.push(odabran);
        setOdabran(null);
        setIdx(0);
        setCreateprod(false);
    };

    const proveri = () => {
        if (pass && username) {
            if (pass === 'tomic' && username === 'admin') {
                setUser(true);
            } else {
                setNema(true);
                setTimeout(() => {
                    setNema(false);
                }, 2000);
            }
        } else {
            setSve(true);
            setTimeout(() => {
                setSve(false);
            }, 2000);
        }
    };

    return (
        <div>
            {user ? (
                <div style={{padding:'10px 20px'}}>
                    <div className="container">
                        {createprod && (
                            <div className="row">
                                <div className="col-12">
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="naslov" className="form-label">
                                                Naslov
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="naslov"
                                                placeholder="Naslov"
                                                value={odabran?.naslov}
                                                onChange={(e) =>
                                                    setOdabran({ ...odabran, naslov: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="autor" className="form-label">
                                                Autor
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="autor"
                                                placeholder="Autor"
                                                value={odabran?.autor}
                                                onChange={(e) =>
                                                    setOdabran({ ...odabran, autor: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="opis" className="form-label">
                                                Opis
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="opis"
                                                placeholder="Opis"
                                                value={odabran?.opis}
                                                onChange={(e) =>
                                                    setOdabran({ ...odabran, opis: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="tip" className="form-label">
                                                Tip
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="tip"
                                                placeholder="Tip"
                                                value={odabran?.tip}
                                                onChange={(e) =>
                                                    setOdabran({ ...odabran, tip: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="googleDriveLink" className="form-label">
                                                Google Drive Link
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="googleDriveLink"
                                                placeholder="Google Drive Link"
                                                value={odabran?.googleDriveLink}
                                                onChange={(e) =>
                                                    setOdabran({
                                                        ...odabran,
                                                        googleDriveLink: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button
                                                type="button"
                                                className="btn btn-danger me-2"
                                                onClick={() => {
                                                    setOdabran(null);
                                                    setCreateprod(false);
                                                    setIdx(0);
                                                }}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-success"
                                                onClick={() => handleCreate()}
                                            >
                                                Confirm
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                        {edit && (
                            <div className="row">
                                <div className="col-12">
                                    <form>
                                        <div className="mb-3">
                                            <label htmlFor="naslov" className="form-label">
                                                Naslov
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="naslov"
                                                value={odabran?.naslov}
                                                onChange={(e) =>
                                                    setOdabran({ ...odabran, naslov: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="autor" className="form-label">
                                                Autor
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="autor"
                                                value={odabran?.autor}
                                                onChange={(e) =>
                                                    setOdabran({ ...odabran, autor: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="opis" className="form-label">
                                                Opis
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="opis"
                                                value={odabran?.opis}
                                                onChange={(e) =>
                                                    setOdabran({ ...odabran, opis: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="tip" className="form-label">
                                                Tip
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="tip"
                                                value={odabran?.tip}
                                                onChange={(e) =>
                                                    setOdabran({ ...odabran, tip: e.target.value })
                                                }
                                            />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="googleDriveLink" className="form-label">
                                                Google Drive Link
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="googleDriveLink"
                                                value={odabran?.googleDriveLink}
                                                onChange={(e) =>
                                                    setOdabran({
                                                        ...odabran,
                                                        googleDriveLink: e.target.value,
                                                    })
                                                }
                                            />
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button
                                                type="button"
                                                className="btn btn-danger me-2"
                                                onClick={() => {
                                                    setOdabran(null);
                                                    setEdit(false);
                                                    setIdx(0);
                                                }}
                                            >
                                                Cancel
                                            </button>
                                            <button
                                                type="button"
                                                className="btn btn-success"
                                                onClick={() => handleEdit()}
                                            >
                                                Confirm
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        )}
                        {del && (
                            <div className="row">
                                <div className="col-12">
                                    <div className="alert alert-danger" role="alert">
                                        Da li ste sigurni da želite da obrišete ovaj proizvod?
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button
                                            type="button"
                                            className="btn btn-danger me-2"
                                            onClick={() => {
                                                setOdabran(null);
                                                setDel(false);
                                                setIdx(0);
                                            }}
                                        >
                                            Cancel
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-success"
                                            onClick={() => handleDelete()}
                                        >
                                            Confirm
                                        </button>
                                    </div>
                                </div>
                            </div>
                        )}
                        <div className="row">
                            <div className="col-12">
                                <div className="d-flex justify-content-between">
                                    <h2>Običan Student</h2>
                                    {prpage && (
                                        <button
                                            type="button"
                                            className="btn btn-primary"
                                            onClick={() => setCreateprod(true)}
                                        >
                                            Dodaj PDF
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="row" style={{marginTop:'30px'}}>
                            <div className="col-12">
                                {prpage ? (
                                    <div className="scroll-container">
                                        {knjige.map((knjiga, index) => (
                                            <div key={knjiga.id} className="product" style={{marginTop:'10px'}}>
                                                <div className="d-flex justify-content-between">
                                                    <div>{knjiga.naslov}</div>
                                                    <div>{knjiga.autor}</div>
                                                    <div>{knjiga.opis}</div>
                                                    <div>{knjiga.tip}</div>
                                                    <div>{knjiga.googleDriveLink}</div>

                                                    <div className="d-flex" style={{marginLeft:'10px',gap:'10px'}}>
                                                        <button
                                                            type="button"
                                                            className="btn btn-warning"
                                                            onClick={() => {
                                                                setOdabran(knjiga);
                                                                setEdit(true);
                                                                setIdx(index);
                                                            }}
                                                            style={{maxHeight:'50px'}}
                                                        >
                                                            <AiTwotoneEdit fontSize="25px" />
                                                        </button>
                                                        <button
                                                            type="button"
                                                            className="btn btn-danger"
                                                            style={{maxHeight:'50px'}}
                                                            onClick={() => {
                                                                setOdabran(knjiga);
                                                                setDel(true);
                                                                setIdx(index);
                                                            }}
                                                        >
                                                            <AiFillDelete fontSize="25px" />
                                                        </button>
                                                    </div>
                                                </div>

                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="scroll-container"></div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="container" style={{display:'flex',justifyContent:'center',alignItems:'center',height:'100vh'}}>
                    <div className="row">
                        <div className="col-12">
                            <form>
                                {sve && (
                                    <p style={{ color: 'red' }}>
                                        Morate uneti sva polja
                                    </p>
                                )}
                                {nema && (
                                    <p style={{ color: 'red' }}>
                                        Uneti podaci nisu tačni
                                    </p>
                                )}
                                <div className="mb-3">
                                    <label htmlFor="username" className="form-label">
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        autoCorrect="none"
                                        autoComplete="none"
                                        className="form-control"
                                        id="username"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">
                                        Password
                                    </label>
                                    <input
                                        type="password"
                                        autoCorrect="none"
                                        autoComplete="none"
                                        className="form-control"
                                        id="password"
                                        placeholder="Password"
                                        value={pass}
                                        onChange={(e) => setPass(e.target.value)}
                                    />
                                </div>
                                <div className="d-flex justify-content-center">
                                    <button
                                        type="button"
                                        className="btn btn-primary"
                                        onClick={() => proveri()}
                                    >
                                        Potvrdi
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export async function getServerSideProps() {
    const knjige = await fetch('http://localhost:3000/api/knjige')

    return {
        props: { knjige: await knjige.json() }
    }
}

export default Admin