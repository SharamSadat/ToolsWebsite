import { useState } from "react";

function Container() {

    const [number , setNumber] = useState(0) ;

    function incHandler() {

        setNumber(number + 1) ;

    }

    function decHandler() {

        setNumber(number - 1) ;

    }

return [number , incHandler , decHandler] ;

}

export default Container ;