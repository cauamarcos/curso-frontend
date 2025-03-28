import { useState } from "react";

import Login from "../routes/Login";
import Signup from "../routes/Signup";

export function useSignin() {
    const [currentPage, setCurrentPage] = useState(0);

    function changePage(i) {
        if (i == 0) setCurrentPage(1);
        else setCurrentPage(0);
    }

    const pages = [<Login changePage={changePage} />, <Signup changePage={changePage} />];

    return {
        currentComponent: pages[currentPage],
        changePage,
    };
}
