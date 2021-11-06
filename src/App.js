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
            <PrivateRoute path='/councellorportal' component={Councellorportal}/>
            <PrivateRoute path='/chat' component={Chats}/>
            <Route path="/signin" component={ Signin } />
            <Route path="/signup" component={ Signup } />
            <Route path="/forgot" component={ Forgot } />
          </AuthContext>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
