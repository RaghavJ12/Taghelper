import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import styled from 'styled-components'
import InboxIcon from '@material-ui/icons/Inbox';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';

export default function Layout() {

    const router = useRouter()
    const l = router.pathname;
    const l2 = "/friends";
    const l3 = "/analytics";

    if (l.startsWith(l2)) {
        return (
            <>
                <Link href="./">
                    <a>
                        <div className="side py-5"><InboxIcon fontSize="large"/></div>
                    </a>
                </Link>
                <Link href="./friends">
                    <a>
                        <div className="act side py-5"><PeopleAltIcon fontSize="large"/></div>
                    </a>
                </Link>
                <Link href="./analytics">
                    <a>
                        <div className="side py-5"><TrendingUpIcon fontSize="large"/></div>
                    </a>
                </Link>
            </>
        )
    }

    if (l.startsWith(l3)) {
        return (
            <>
                <Link href="./">
                    <a>
                        <div className="side py-5"><InboxIcon fontSize="large"/></div>
                    </a>
                </Link>
                <Link href="./friends">
                    <a>
                        <div className="side py-5"><PeopleAltIcon fontSize="large"/></div>
                    </a>
                </Link>
                <Link href="./analytics">
                    <a>
                        <div className="act side py-5"><TrendingUpIcon fontSize="large"/></div>
                    </a>
                </Link>
            </>
        )
    }

    else {
        return (
            <>
                <Container>
                    <Link href="./">
                        <a>
                            <div className="act py-5"><InboxIcon fontSize="large"/></div>
                        </a>
                    </Link>
                    <Link href="./friends">
                        <a>
                            <div className="side py-5"><PeopleAltIcon fontSize="large"/></div>
                        </a>
                    </Link>
                    <Link href="./analytics">
                        <a>
                            <div className="side py-5"><TrendingUpIcon fontSize="large"/></div>
                        </a>
                    </Link>
                </Container>
            </>
        )
    }
}

const Container = styled.div``;