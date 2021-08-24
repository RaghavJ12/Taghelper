import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router'
import FontAwesome from 'react-fontawesome';

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
                        <div className="side py-5"></div>
                    </a>
                </Link>
                <Link href="./friends">
                    <a>
                        <div className="act side py-5"><i className="fa fa-user-friends icon is-medium" aria-hidden="true"></i></div>
                    </a>
                </Link>
                <Link href="./analytics">
                    <a>
                        <div className="side py-5"><i className="fa fa-chart-line icon is-medium" aria-hidden="true"></i></div>
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
                        <div className="side py-5"><i className="fa fa-inbox icon is-medium" aria-hidden="true"></i></div>
                    </a>
                </Link>
                <Link href="./friends">
                    <a>
                        <div className="side py-5"><i className="fa fa-user-friends icon is-medium" aria-hidden="true"></i></div>
                    </a>
                </Link>
                <Link href="./analytics">
                    <a>
                        <div className="act side py-5"><i className="fa fa-chart-line icon is-medium" aria-hidden="true"></i></div>
                    </a>
                </Link>
            </>
        )
    }

    else{
        return (
            <>
            <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
                <Link href="./">
                    <a>
                        <div className="act py-5"><i className="fa fa-inbox icon is-medium" aria-hidden="true"></i></div>
                    </a>
                </Link>
                <Link href="./friends">
                    <a>
                        <div className="side py-5"><i class="fas fa-phone"></i></div>
                    </a>
                </Link>
                <Link href="./analytics">
                    <a>
                        <div className="side py-5"><i className="fas fa-chart-line icon is-medium" aria-hidden="true"></i></div>
                    </a>
                </Link>
            </>
        )
    }
}