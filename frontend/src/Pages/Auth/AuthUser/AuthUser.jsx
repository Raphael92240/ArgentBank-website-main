import React, { useState, useEffect } from 'react';
import Account from '@/Components/account/Account.jsx';
import { useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';

import { SelectorLogin } from '@/_Redux/Selector/SelectorLogin.jsx';
import { SelectorUser } from '@/_Redux/Selector/SelectorUser.jsx';

import { accountService } from '@/_Services/accountService';

import datasBank from '@/Assets/Api/datasbank.json';

import './authuser.css';

const AuthUser = () => {

    const { token } = useSelector(SelectorLogin)
    const { userName } = useSelector(SelectorUser)
    const [newUserName, setnewUserName] = useState(userName)
    const [firstname, setfirstname] = useState()
    const [lastname, setlastname] = useState()
    const [edit, setEdit] = useState(false)

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const setinfos = async () => {
        const decodedToken = await accountService.getProfile(token);
        setfirstname(decodedToken.firstName)
        setlastname(decodedToken.lastName)

    }

    const update = async (newUserName) => {
        await accountService.updateProfile({ username: newUserName, token: token })

        dispatch({ type: 'User/setUpdateProfile', payload: newUserName })
    }

    useEffect(() => {
        if (accountService.isLogged()) {
            setinfos()
            setnewUserName(userName)
        } else {
            navigate('/home')
        }
        // eslint-disable-next-line
    }, [userName])

    let reset = () => {
        setEdit(false)
        setnewUserName(userName)
    }

    let handleUpdate = () => {
        update(newUserName)
        setEdit(false)
        console.log(userName)
        console.log(newUserName)
    }

    return (
        <main className="main bg-dark displaytransaction">
            <div className="header">
                {
                    !edit &&
                    <div className='padding'>
                        <h1>Welcome back<br />{firstname} {lastname}!</h1>
                        <button className="edit-button" onClick={() => setEdit(true)}>Edit Name</button>
                    </div>
                }
                {
                    edit &&
                    <div className='padding'>
                        <h1>Welcome back</h1>
                        <section className='update'>
                            <div className='input-update'>
                                <input type='text' onChange={(e) => setnewUserName(e.target.value)} />
                                <input type='text' value={firstname} disabled />
                                <input type='text' value={lastname} disabled />
                            </div>
                            <div className='button-update'>
                                <button className="edit-button" onClick={handleUpdate}>Save</button>
                                <button className="edit-button" onClick={reset}>Cancel</button>
                            </div>
                        </section>
                    </div>
                }

            </div>
            <h2 className="sr-only">Accounts</h2>
            {
                datasBank.map((item, index) => (
                    <Account
                        key={'bank' + index}
                        title={item.title}
                        cash={item.amount}
                        description={item.description}
                    />
                ))
            }

        </main>

    );
};

export default AuthUser;