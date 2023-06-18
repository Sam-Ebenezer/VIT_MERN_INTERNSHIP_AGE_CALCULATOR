import {Component} from "react"

class Main extends Component{
    constructor(props){
        super(props)
        this.state={disp_age:""}
    }

    CalculateAge=()=>{
        let dob=document.getElementById("dob").value;
        console.log(dob)

        if(dob.length===0 ||dob===undefined){


            document.getElementById("result").classList.add("text-danger")
            this.setState(
                {
                disp_age : "*Enter date of birth first to calculate Age!"
            }
            )
        }

        else{

            document.getElementById("result").classList.remove("text-danger")

        dob= new Date(dob)
        console.log(dob)

        //calculate month difference from current date in time
        let month_diff = Date.now() - dob.getTime();
        
        //convert the calculated difference in date format
        let age_dt = new Date(month_diff); 
        
        //extract year from date    
        let year = age_dt.getUTCFullYear();
        
        //now calculate the age of the user
        let age = Math.abs(year - 1970);
        
        console.log(age)

        this.setState(
            {
            disp_age : "You are "+age+" years old"
        }
        )

    }

        /*if(count!==0){
            this.setState(
                {
                disp_count : "Word count: "+count
            }
               
            )
        }
        else{
            this.setState(
                {
                disp_count : ""
            }  
            )
        }

        console.log(this.state.disp_age)*/

    }
    render(){
        return(
            <div className="row m-5">
                <span className="col-sm"></span>
                <span className="col-sm-5">
                <h1 className="text-center" >Age Calculator</h1>
                <h3 className="text-center">Enter your date of birth</h3>
                <input type="date" className="form-control m-3" id="dob" placeholder="15-11-2023"></input>
                <div className="text-center m-3">
                <button type="button" className="btn btn-lg btn-primary" onClick={this.CalculateAge}>CalculateAge</button>
                </div>
                <h3 id="result" className="text-center">{this.state.disp_age}</h3>

                </span>
                <span className="col-sm"></span>
            </div>
        )
    }
}

export default Main