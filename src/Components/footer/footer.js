import React from 'react'
import classes from './footer.module.css'
import {AiFillFacebook,AiFillInstagram,AiFillMail,AiFillPhone} from 'react-icons/ai'
const footer = () => (
    <footer className={classes.footer__container}>
        <div className={classes.row}>
            <div className={classes.row__item}><ul>
            <li>asdasd</li>
            <li>asdasd</li>
            <li>asdasd</li>
            <li>asdasd</li>
            <li>asdasd</li>
            </ul>
            </div>
            <div className={classes.row__item}><ul>
            <li>asdasd</li>
            <li>asdasd</li>
            <li>asdasd</li>
            <li>asdasd</li>
            <li>asdasd</li>
            </ul>
            </div>
            <div className={classes.row__item}><ul>
            <li>asdasd</li>
            <li>asdasd</li>
            <li>asdasd</li>
            <li>asdasd</li>
            <li>asdasd</li>
            </ul>
            </div>
        </div>
    <hr></hr>
    <div className={classes.icons__row}>
    <div className={classes.row__item}><AiFillFacebook/></div>
    <div className={classes.row__item}><AiFillInstagram/></div>
    <div className={classes.row__item}><AiFillMail/></div>
    <div className={classes.row__item}><AiFillPhone/></div>
    </div>
    </footer>
)
export default footer