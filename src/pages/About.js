import React from "react";

class About extends React.Component{
    render(){
        return(
            <div className="col-12 border">
                <h1 className=" text-center"> About </h1>
                <p className=" text-center">this is the About Page </p>
                <hr></hr>
                <div className="col text-center">
                    <h5> Esta es la pagina de About... </h5>
                    <div className="col-md-12 text-left">
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                        nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                        occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit 
                        anim id est laborum.</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;