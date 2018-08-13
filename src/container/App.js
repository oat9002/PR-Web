import React, { Component } from 'react';
import './App.css';
import Home from '../components/Home';
import 'element-theme-default';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Constants from '../Constants';
import ApplyJob from '../components/ApplyJob';
import Development from '../components/Development';
import Welfare from '../components/Welfare';
import Evaluation from '../components/Evaluation';
import Progress from '../components/Progress';
import ShouldKnow from '../components/ShouldKnow';
import AboutUsBudget from '../components/TopMenus/AboutUs/Budget';
import AboutUsDepartmentValue from '../components/TopMenus/AboutUs/DepartmentValue';
import AboutUsEvaluation from '../components/TopMenus/AboutUs/Evaluation';
import AboutUsHrCourse from '../components/TopMenus/AboutUs/HrCourse';
import AboutUsHrDevelopment from '../components/TopMenus/AboutUs/HrDevelopment';
import AboutUsHrManaagement from '../components/TopMenus/AboutUs/HrManagement';
import AboutUsHrPlanning from '../components/TopMenus/AboutUs/HrPlanning';
import AboutUsProgress from '../components/TopMenus/AboutUs/Progress';
import AboutUsVision from '../components/TopMenus/AboutUs/Vision';
import AboutUsWelfareManagement from '../components/TopMenus/AboutUs/WelfareManagement';
import ContactUsFeedback from '../components/TopMenus/ContactUs/Feedback';
import ContactUsHrEmployee from '../components/TopMenus/ContactUs/HrEmployee';
import ContactUsMap from '../components/TopMenus/ContactUs/Map';
import ContactUsObservance from '../components/TopMenus/ContactUs/Observance';
import EmployeeShouldKnowInfographic from '../components/TopMenus/EmployeeShouldKnow/Infographic';
import EmployeeShouldKnowManual from '../components/TopMenus/EmployeeShouldKnow/Manual';
import InformationChart from '../components/TopMenus/Information/Chart';
import InformationReport from '../components/TopMenus/Information/Report';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path='/' component={ Home }/>
          <Route path='/applyjob' component={ ApplyJob } />
          <Route path='/shouldknow' component={ ShouldKnow } />
          <Route path='/progress' component={ Progress } />
          <Route path='/development' component={ Development } />
          <Route path='/evaluation' component={ Evaluation } />
          <Route path='/welfare' component={ Welfare } />
          <Route path={ `${ Constants.rootUrl.aboutUs }/budget` } component={ AboutUsBudget } />
          <Route path={ `${ Constants.rootUrl.aboutUs }/departmentvalue` } component={ AboutUsDepartmentValue } />
          <Route path={ `${ Constants.rootUrl.aboutUs }/evaluation` } component={ AboutUsEvaluation } />
          <Route path={ `${ Constants.rootUrl.aboutUs }/hrcourse` } component={ AboutUsHrCourse } />
          <Route path={ `${ Constants.rootUrl.aboutUs }/hrdevelopment` } component={ AboutUsHrDevelopment } />
          <Route path={ `${ Constants.rootUrl.aboutUs }/hrmanagement` } component={ AboutUsHrManaagement } />
          <Route path={ `${ Constants.rootUrl.aboutUs }/hrplanning` } component={ AboutUsHrPlanning } />
          <Route path={ `${ Constants.rootUrl.aboutUs }/progress` } component={ AboutUsProgress } />
          <Route path={ `${ Constants.rootUrl.aboutUs }/vision` } component={ AboutUsVision } />
          <Route path={ `${ Constants.rootUrl.aboutUs }/welfaremanagement` } component={ AboutUsWelfareManagement } />
          <Route path={ `${ Constants.rootUrl.contactUs }/feedback` } component={ ContactUsFeedback } />
          <Route path={ `${ Constants.rootUrl.contactUs }/hremployee` } component={ ContactUsHrEmployee } />
          <Route path={ `${ Constants.rootUrl.contactUs }/map` } component={ ContactUsMap } />
          <Route path={ `${ Constants.rootUrl.contactUs }/observance` } component={ ContactUsObservance } />
          <Route path={ `${ Constants.rootUrl.employeeShouldKnow }/infographic` } component={ EmployeeShouldKnowInfographic } />
          <Route path={ `${ Constants.rootUrl.employeeShouldKnow }/manual` } component={ EmployeeShouldKnowManual } />
          <Route path={ `${ Constants.rootUrl.information }/report` } component={ InformationReport } />
          <Route path={ `${ Constants.rootUrl.information }/chart` } component={ InformationChart } />
        </div>
      </Router>
    );
  }
}

export default App;
