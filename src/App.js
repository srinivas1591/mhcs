import Signup from "./authentication/Signup";
import  AuthContext  from './authentication/AuthProvider'
import Signin from "./authentication/Signin";
import { BrowserRouter as Router , Switch ,  Route} from 'react-router-dom'
import  PrivateRoute  from './authentication/PrivateRoute'
import Forgot from "./authentication/Forgot";
import StudentHome from "./students/StudentHome";
import StudentProfile from "./students/StudentProfile";
import Quiz from './students/Quiz'
import Suggestafriend from './students/Suggestafriend'
import Feedback from './students/Feedback'
import Councelling from './students/Councelling'
import Careerguidance from './students/Careerguidance'
import Chats from './students/Chats'
import Councellorportal from "./students/Councellorportal";
import Stuprof from "./students/Stuprof";
import CounselChat from './students/CounselChat'
import FacultySignUp from './faculty/FacultySignUp'
import FacultySignIn from "./faculty/FacultySignIn";
import CouncellorLogin from "./faculty/CouncellorLogin";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <AuthContext> 
            <PrivateRoute exact path="/" component={ StudentHome } />
            <PrivateRoute  path="/profile" component={ StudentProfile } />
            <PrivateRoute path='/quiz' component={Quiz} />
            <PrivateRoute path='/feedback' component={Feedback}/>
            <PrivateRoute path='/careerguidance' component={Careerguidance}/>
            <PrivateRoute path='/councelling' component={Councelling}/>
            <PrivateRoute path='/suggestfriend' component={Suggestafriend}/>
            <Route path='/councellorportal' component={Councellorportal}/>
            <Route path='/chat/:userId'  render={(props) => (<Chats {...props.match.params} />)}/>
            <Route path='/studentprofile/:userId'  render={(props) => (<Stuprof {...props.match.params} />)}/>
            <PrivateRoute path='/counselchat' component={CounselChat} />
            <Route path="/signin" component={ Signin } />
            <Route path="/signup" component={ Signup } />
            <Route path="/forgot" component={ Forgot } />
            <Route path="/abcd" component={ FacultySignUp } />
            <Route path="/efgh" component={ FacultySignIn } />
            <Route path="/councellorlogin" component={CouncellorLogin}  />
          </AuthContext>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
