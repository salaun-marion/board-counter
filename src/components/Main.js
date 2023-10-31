import Tinypanel from "./Tinypanel";
import BackPanel from "./Backpanel";
import {v4 as uuidv4} from 'uuid';
import { useRef } from "react";


export default function Main () {
    const mail = useRef()

    const tinypanels=[
        {
            title:"Custom Fields",
            description:"Add custom fields to your passwords.",
            pro_off_on:"on",
        },
        {
            title:"Secure files & notes",
            description:"Store other secrets than a password such as notes.",
            pro_off_on:"off",
        },
        {
            title:"Custom ACL",
            description:"Store other secrets than a password such as notes. ",
            pro_off_on:"on",
            counter:0
        },
        {
            title:"Keepass as an offline client",
            description:"Bi-directional sync with keepass file format to work offline.",
            pro_off_on:"off",
            counter:0
        },
        {
            title:"Google SSO",
            description:"Authenticate with Google.",
            pro_off_on:"on",
            counter:0
        },
        {
            title:"KeyCloak SSO",
            description:"Authenticate with KeyCloak.",
            pro_off_on:"on",
            counter:0
        },
        {
            title:"RBAC",
            description:"Role Based Access Control for both user interface actions and API endpoints.",
            pro_off_on:"on",
            counter:0
        },
        {
            title:"TOTP Authenticator",
            description:"Use passbolt to store one time passwords and easily share them securely with team members.",
            pro_off_on:"on",
            counter:0
        },
        {
            title:"Advanced Audit logs",
            description:"More options to see who is doing what on passbolt.",
            pro_off_on:"on",
            counter:0
        },
        {
            title:"Microsoft SSO",
            description:"Authenticate with Microsoft.",
            pro_off_on:"on",
            counter:0
        },
        {
            title:"Account Recovery",
            description:"Users who lost their passphrase or private key can recover their account.",
            pro_off_on:"on",
            counter:0
        },
        {
            title:"Forms auto-save",
            description:"Passbolt remembers passwords from web pages.",
            pro_off_on:"on",
            counter:0
        },
        {
            title:"Mobile app",
            description:"Passwords are available on Android and iPhones.",
            pro_off_on:"on",
            counter:0
        },
        {
            title:"Internationalization",
            description:"The interface and documentation are translatable in mutliple languages.",
            pro_off_on:"on",
            counter:0
        }
    ]

    const backpanels=[
        {
            title : "In Backlog",
            color : "red",
            card : tinypanels,
            start:0,
            end:4
        },
        {
            title : "In Progress",
            color : "yellow",
            card : tinypanels,
            start:4,
            end:9
        },
        {
            title : "Completed",
            color : "green",
            card : tinypanels,
            start:9,
            end:15
        },
    ]
   
    return (
        <div className="wrap">
            {backpanels.map((backpanel)=> {
                return(
                    <BackPanel
                    title={backpanel.title} 
                    color={backpanel.color}
                    card={
                        tinypanels.slice(backpanel.start,backpanel.end).map((tinypanel)=> {
                            return(
                                <Tinypanel 
                                    key={uuidv4()}
                                    title={tinypanel.title}
                                    description={tinypanel.description}
                                    logo={tinypanel.pro_off_on}
                                    email={mail}
                                />
                            )
                        })
                    }
                    />
                )
            })}
        </div>
    )
} 


