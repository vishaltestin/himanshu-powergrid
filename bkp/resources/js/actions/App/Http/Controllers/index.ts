import Api from './Api'
import Frontend from './Frontend'
import Backend from './Backend'
import DashboardController from './DashboardController'
const Controllers = {
    Api: Object.assign(Api, Api),
Frontend: Object.assign(Frontend, Frontend),
Backend: Object.assign(Backend, Backend),
DashboardController: Object.assign(DashboardController, DashboardController),
}

export default Controllers