import "./Page.css"
import MoreVertIcon from '@material-ui/icons/MoreVert';

export default function Page() {
    return (
        <div className="PageHome">
        <div className="PageBox">
        <div className="ProgramManager">
            Program Manager
        </div>
        <div className="PageLine1" />
        <div className="PageType">
           <div className="Page1">Nutrition</div>
           <div className="Page2">Fitness</div>
           <div className="Page2">Journey</div>
        </div>
        <div className="PageLine2" />
        <div class="row">
        <div class="column"></div>
        <div class="column">Package</div>
        <div class="column">Program</div>
        </div>
        <br></br>
        <br></br>
        <table>
            <tr >
                <th scope="col">Type</th>
                <th scope="col">Client</th>
                <th scope="col">Name</th>
                <th scope="col">Status</th>
                <th scope="col">Start Date</th>
                <th scope="col">Renewal</th>
                <th scope="col">Status</th>
                <th scope="col">Renewal</th>
                <th scope="col">Actions</th>

            </tr>
            <tr >
                <th scope="row">Custom Nutition</th>
                <th scope="row">Walter White</th>
                <th scope="row">Package Name</th>
                <th scope="row">
                <button class="btn success">Active</button>
                </th>
                <th scope="row">25/06/21</th>
                <th scope="row">25/06/21</th>
                <th scope="row">
                <button class="inactive">Not Available</button>

                </th>
                <th scope="row">25/06/21</th>
                <th scope="row">
                    <MoreVertIcon/>
                </th>

            </tr>
            <tr>
                <th scope="row">Custom Nutition</th>
                <th scope="row">Walter White</th>
                <th scope="row">Package Name</th>
                <th scope="row">
                <button class="btn success">Active</button>
                </th>
                <th scope="row">25/06/21</th>
                <th scope="row">25/06/21</th>
                <th scope="row">
                <button class="btn success">Assigned</button>

                </th>
                <th scope="row">25/06/21</th>
                <th scope="row"><MoreVertIcon/></th>

            </tr>
            <tr>
                <th scope="row">Custom Nutition</th>
                <th scope="row">Walter White</th>
                <th scope="row">Package Name</th>
                <th scope="row">
                <button class="btn success">Active</button>
                </th>
                <th scope="row">25/06/21</th>
                <th scope="row">25/06/21</th>
                <th scope="row">
                <button class="btn success">Assigned</button>
                </th>
                <th scope="row">25/06/21</th>
                <th scope="row"><MoreVertIcon/></th>

            </tr>
            <tr>
                <th scope="row">Custom Nutition</th>
                <th scope="row">Walter White</th>
                <th scope="row">Package Name</th>
                <th scope="row">
                <button class="inactive">Inactive</button>
                </th>
                <th scope="row">25/06/21</th>
                <th scope="row">25/06/21</th>
                <th scope="row">
                <button class="btn success">Assigned</button>

                </th>
                <th scope="row">25/06/21</th>
                <th scope="row"><MoreVertIcon/></th>

            </tr>
            <tr>
                <th scope="row">Custom Nutition</th>
                <th scope="row">Walter White</th>
                <th scope="row">Package Name</th>
                <th scope="row">
                <button class="btn success">Active</button>
                </th>
                <th scope="row">25/06/21</th>
                <th scope="row">25/06/21</th>
                <th scope="row">
                <button class="btn success">Assigned</button>

                </th>
                <th scope="row">25/06/21</th>
                <th scope="row"><MoreVertIcon/></th>

            </tr>
            
        </table>
        </div>
        </div>

            
    )
}
