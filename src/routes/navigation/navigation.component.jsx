import { Fragment, useContext } from 'react';
import { Outlet, Link } from 'react-router-dom';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import {signOutUser} from '../../utils/firebase.utils';

import './navigation.styles.scss';
import { UserContext } from './../../context/user.context';

const Navigation = () => {

    const { currentUser, setCurrentUser } = useContext(UserContext)

    const signOutHandler = async () => {
        await signOutUser();
        setCurrentUser(null)
    }

    return(
        <Fragment>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <CrownLogo className='logo'/>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    {
                        currentUser ? (
                            <span className='nav-link' onClick={signOutHandler}>SIGNOUT</span>
                        ) : (
                            <Link className='nav-link' to='/auth'>
                                Sign In
                            </Link>
                        )
                    }

                </div>
            </div>
            <Outlet />
        </Fragment>
    )
}

export default Navigation