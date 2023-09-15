import React, { useState } from 'react'
import styled from 'styled-components'
import { AiFillDelete, AiTwotoneEdit, AiFillHome } from 'react-icons/ai'
import { MdLocalPostOffice } from 'react-icons/md'
import { BsCheck2All } from 'react-icons/bs'
import { v4 as uuidv4 } from 'uuid';


const AdminHeader = styled.div`
    width:20%;
    background-color:#292B48;
    color:white;
    display:flex;
    flex-direction:column;
    gap:20px;
    p{
        font-size: 12px;
        font-weight: 400;
        line-height: 18px;
        color: rgb(100, 108, 154);
        text-transform: uppercase;
        font-family:'Poppins'
    }
`
const Main1 = styled.div`
    display:flex;
    background-color: var(--lightdark)
    width:100vw;
    height:90vh;
`
const LeftPart = styled.div`
    width:80%;
    padding:20px;
    background-color:#1B1F38;

`
const Graf = styled.div`
background-color:#292B48;
min-width:500px;
height:600px;
overflow:scroll;
&::-webkit-scrollbar{
    display: none;
}
`

const Login1 = styled.div`
display:flex;
width:100vw;
height:100vh;
justify-content:center;
align-items:center;

  font-family: "Roboto", sans-serif;
 
`
const Form1 = styled.div`
display:flex;
flex-direction:column; 
width: 360px;
padding: 8% 0 0;
position: relative;
  z-index: 1;
  background: #FFFFFF;
  max-width: 360px;
  padding: 45px;
  text-align: center;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);

  input{
    font-family: "Roboto", sans-serif;
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
  }
  button{
    font-family: "Roboto", sans-serif;
  text-transform: uppercase;
  outline: 0;
  width: 100%;
  border: 0;
  padding: 15px;
  color: #FFFFFF;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  }
`

const Header = styled.div`
  width:100%;
  height:10vh;
  display:flex;
  align-items:center;
  justify-content:space-between;
  color:#FFF;
  padding : 0 20px;
  p{
    marign-top:7px;
    isplay:flex;
  align-items:center;
  justify-content:center;
  }
`
const Cont = styled.div`
background-color:#292B48
`
const Button = styled.button`
border:none;
color:#fff;
background-color:#9e6de0;
padding:7px 10px;
border-radius:5px;
&:hover{
    background-color:#9e1cd4; 
}

`
const Product = styled.div`
display:flex;
flex-direction:column;
color:white;
padding:10px 20px;

`
const Border = styled.div`
display:flex;
height:10%;
align-items:center;
box-shadow:0 0 0 2px var(--purple);
justify-content:space-between;
padding: 10px 10px;
p{
    height:100%;
    text-align:center;
}

`
const Flex = styled.div`
display:flex;
align-items:center;
gap:10px;
`
const Edit = styled.div`
padding:10px;
display:flex;
align-items:center;
justify-content:center;
box-sizing: border-box;
color:#22cc9d;
&:hover{
    color:#02a145
}
cursor:pointer;
`
const Delete = styled.div`
padding:10px;
display:flex;
align-items:center;
justify-content:center;
box-sizing: border-box;
color:#FF5E41;
&:hover{
    color:#AA151F
}
`
const Editpage = styled.div`
    
    position:fixed;
    background-color:var(--providna);
    height:100vh;
    width:100vw;
    display:flex;
    align-items:center;
    justify-content:center;
    
`
const EditCont = styled.div`
    position:absolute;
    z-index:10;
    width:35%;
    min-height:20%;
    background-color:#fff;
    display:flex;
    flex-direction:column;
    border-radius:20px;
    align-items:center;
    justify-content:center;
    input{
        font-family: "Roboto", sans-serif;
      outline: 0;
      background: #f2f2f2;
      width: 100%;
      border: 0;
      margin: 0 0 15px;
      padding: 15px;
      box-sizing: border-box;
      font-size: 14px;
      }
      button{
        font-family: "Roboto", sans-serif;
      text-transform: uppercase;
      outline: 0;
      width: 100%;
      border: 0;
      padding: 15px;
      color: #FFFFFF;
      font-size: 14px;
      -webkit-transition: all 0.3 ease;
      transition: all 0.3 ease;
      cursor: pointer;
      }
      padding:10px 20px;
`
const Deletepage = styled.div`
    position:fixed;
    background-color:var(--providna);
    top:0;
    bottom:0;
    left:0;
    right:0;
    display:flex;
    align-items:center;
    justify-content:center;
`
const DelCont = styled.div`
    position:absolute;
    z-index:10;
    width:35%;
    min-height:20%;
    background-color:#fff;
    display:flex;
    flex-direction:column;
    border-radius:20px;
    align-items:center;
    justify-content:center;
`
const Confirm = styled.div`
background-color: #04AA6D;
color: white;
padding: 14px 20px;
margin: 8px 0;
border: none;
cursor: pointer;
width: 100%;
opacity: 0.9;
&:hover{
    opacity:1
}
width:100px;
border-radius:10px;
display:flex;
align-items:center;
justify-content:center;
`
const Cancel = styled.div`
background-color: #f44336;
color: white;
padding: 14px 20px;
margin: 8px 0;
border: none;
cursor: pointer;
width: 100%;
opacity: 0.9;
&:hover{
    opacity:1
}  
width:100px;
border-radius:10px;
display:flex;
align-items:center;
justify-content:center;
`
const Admin = ({ knjige }) => {
    const [user, setuser] = useState(false)
    const [pass, setpass] = useState('')
    const [username, setusername] = useState('')
    const [sve, setsve] = useState(false)
    const [nema, setnema] = useState(false)
    const [prpage, setprpage] = useState(true)
    const [edit, setedit] = useState(false)
    const [del, setdel] = useState(false)
    const [odabran, setodabran] = useState({})
    const [createprod, setcreateprod] = useState(false)
    const [idx, setidx] = useState(0)


    const handleDelete = async () => {
        await fetch('/api/knjige', {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: odabran.id })
        })
        knjige.splice(idx, 1)
        setodabran(null)
        setidx(0)
        setdel(false)
    }


    const handleEdit = async () => {
        await fetch('/api/knjige', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ id: odabran.id, naslov: odabran.naslov, autor: odabran.autor,opis: odabran.opis,  tip: odabran.tip, googleDriveLink: odabran.googleDriveLink  })
        })
        knjige.splice(idx, 1)
        knjige.push(odabran)
        setodabran(null)
        setidx(0)
        setedit(false)
    }

    const handleCreate = async () => {
        await fetch('/api/knjige', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ naslov: odabran.naslov, autor: odabran.autor,opis: odabran.opis,  tip: odabran.tip, googleDriveLink : odabran.googleDriveLink })
        })
        odabran.id = uuidv4()
        knjige.push(odabran)
        setodabran(null)
        setidx(0)
        setcreateprod(false)
    }

    const proveri = () => {
        if (pass && username) {
            if (pass == 'tomic' && username == 'admin') {
                setuser(true)
            } else {
                setnema(true)
                setTimeout(() => {
                    setnema(false)
                }, 2000)
            }
        } else {
            setsve(true)
            setTimeout(() => {
                setsve(false)
            }, 2000)
        }
    }
    

    return (
        <div>
            {user ? <Cont >
                {
                    createprod && <Editpage>
                        <EditCont>
                            <input type='text' placeholder='naslov' value={odabran?.naslov } onChange={(e) => setodabran({ ...odabran, naslov: e.target.value })} />
                            <input type='text' placeholder='autor' value={odabran?.autor} onChange={(e) => setodabran({ ...odabran, autor: e.target.value })} />
                            <input type='text' placeholder='opis' value={odabran?.opis} onChange={(e) => setodabran({ ...odabran, opis: e.target.value })} />
                            <input type='text' placeholder='tip' value={odabran?.tip} onChange={(e) => setodabran({ ...odabran, tip: e.target.value })} />
                            <input type='text' placeholder='googleDriveLink' value={odabran?.googleDriveLink} onChange={(e) => setodabran({ ...odabran, googleDriveLink: e.target.value })} />
                            <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                                <Cancel onClick={() => { setodabran(null); setcreateprod(false); setidx(0) }}>Cancel</Cancel>
                                <Confirm onClick={() => handleCreate()} >Confirm</Confirm>
                            </div>
                        </EditCont>
                    </Editpage>
                }
                {edit && <Editpage>
                    <EditCont>
                        <input type='text' value={odabran?.naslov} onChange={(e) => setodabran({ ...odabran, naslov: e.target.value })} />
                        <input type='text' value={odabran?.autor} onChange={(e) => setodabran({ ...odabran, autor: e.target.value })} />
                        <input type='text' value={odabran?.opis} onChange={(e) => setodabran({ ...odabran, opis: e.target.value })} />
                        <input type='text' value={odabran?.tip} onChange={(e) => setodabran({ ...odabran, tip: e.target.value })} />
                        <input type='text' value={odabran?.googleDriveLink} onChange={(e) => setodabran({ ...odabran, googleDriveLink: e.target.value })} />

                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                            <Cancel onClick={() => { setodabran(null); setedit(false); setidx(0) }}>Cancel</Cancel>
                            <Confirm onClick={() => handleEdit()} >Confirm</Confirm>
                        </div>
                    </EditCont>
                </Editpage>}
                {del && <Deletepage >
                    <DelCont>
                        <p style={{ textAlign: 'center' }}>Da li ste sigurni da zelite da obrisete ovaj Proizvod?</p>
                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
                            <Cancel onClick={() => { setodabran(null); setdel(false); setidx(0) }}>Cancel</Cancel>
                            <Confirm onClick={() => handleDelete()} >Confirm</Confirm>
                        </div>
                    </DelCont>
                </Deletepage>}
                <Header> <p>Obican Student</p> {prpage && <Button type='button'>  <p style={{ margin: 0 }} onClick={() => setcreateprod(true)}>Dodaj PDF</p> </Button>}</Header>
                <Main1>
                    <LeftPart>
                    {prpage ? <Graf>
                            {knjige.map((knjiga, index) => <Product key={knjiga.id}>
                                <Border><Flex> <div>{knjiga.naslov}</div> <div>{knjiga.autor}</div> <div>{knjiga.opis}</div> <div>{knjiga.tip}</div> <div>{knjiga.googleDriveLink}</div>    </Flex> <div style={{ display: 'flex' }}> <Edit onClick={() => { setodabran(knjiga); setedit(true); setidx(index) }}  ><AiTwotoneEdit fontSize='25px' /></Edit> <Delete onClick={() => { setodabran(knjiga); setdel(true); setidx(index) }} ><AiFillDelete fontSize='25px' /></Delete> </div> </Border>
                            </Product>)}
                        </Graf> : <Graf>
                        </Graf>}
                    </LeftPart>
                </Main1>
            </Cont>
                : <Login1>
                    <Form1>
                        {sve && <p style={{ color: 'red' }}>Morate uneti sva polja</p>}
                        {nema && <p style={{ color: 'red' }}>Uneti podaci nisu tacni</p>}
                        <input type='text' autoCorrect='none' autoComplete='none' placeholder='username' value={username} onChange={(e) => setusername(e.target.value)} />
                        <input type='password' autoCorrect='none' autoComplete='none' placeholder='password' value={pass} onChange={(e) => setpass(e.target.value)} />
                        <Button type='button' onClick={() => proveri()}>Potvrdi</Button>
                    </Form1>
                </Login1>}
        </div>
    )
}

export async function getServerSideProps() {
    const knjige = await fetch('http://obicanstudent.vercel.app/api/knjige')
    
    return {
        props: { knjige: await knjige.json()}
    }
}

export default Admin