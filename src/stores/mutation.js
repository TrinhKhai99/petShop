
export const SET_USERS = (state, users) => {
    state.users = users;
}

export const SET_USER = (state, user)=> {
    state.user = user;
}

export const SET_TOTAL_RQ_PET = (state, data)=> {
    state.totalRqItem = data;
}

export const SET_NEWSHOME_DETAIL = (state, data)=> {
    state.newHomeDetail = data;
}

export const SET_NEWS = (state, data) => {
    state.news = data.news;
    state.resultSearchNews = data.search;
    state.recordNews = data.record;
    state.pageNews = data.page;
    state.Category = data.category
}

export const SET_NEWS_ = (state, response)=> {
    state.news = response;
}

export const SET_NEW = (state, response)=> {
    state.new = response;
}

export const SET_SEARCHNEWS = (state, response)=> {
    state.news = response;
}

export const SET_PETS = (state, pets) => {
    state.pets = pets;
}

export const SET_PET_HOME = (state, pets) => {
    state.pet_home = pets;
}

export const SET_PRODUCTCATE = (state, productCate) => {
    state.productCate = productCate;
}

export const SET_PRODUCTS = (state, products) => {
    state.products = products;
}

export const SET_PRODUCTS_HOME = (state, products) => {
    state.products_Home = products;
}

export const SET_NEWSCATE_HOME = (state, cate) => {
    state.newsCategoryHome = cate;
}


export const SET_REQUEST_APPOINT = (state, data) => {
    state.getAppointment = data;
}

export const SET_APPOINT_TODAY = (state, data) => {
    state.appointToday = data;
}

export const SET_FIND_RQ_PETS_STT_CONTATCT = (state, data) => {
    state.rqPetStatus_Contact = data;
}

export const SET_RQ_APPPOINT = (state, data) => {
    state.appointmentDetail = data;
}

export const SET_NEWSCATE = (state, newsCate) => {
    state.newsCate = newsCate;
}

export const SET_RQ_ADPOT = (state, data) => {
    state.rqStatePet = data;
}

export const SET_RESULTPET = (state, result) => {
    state.pets = result;
}

export const SET_RESULT_RQ_PET = (state, result) => {
    state.rqPet = result;
}

export const SET_FIND_RQ_PETS_STT = (state, result) => {
    state.rqPet = result;
}

export const SET_FIND_RQ_PETS_STT_1 = (state, result) => {
    state.rqPet_stt1 = result;
}

export const SET_FIND_PETS_STT = (state, result) => {
    state.pets = result;
}

export const SET_RESULTPET_BY_ID = (state, result) => {
    state.pets = result;
}

export const SET_PET = (state, pet) => {
    state.pet = pet;
}

export const SET_PAGE = (state, data) => {
    state.pets = data.pets;
    state.page = data.page;
    state.record = data.record
}

export const SET_PAGENEWS = (state, data) => {
    state.news = data.news;
    state.pageNews = data.page;
}

export const SET_RECORD = (state, data) => {
    state.pets = data.pets;
    state.record = data.record;
}

export const SET_RECORDNEWS = (state, data) => {
    state.news = data.news;
    state.recordNews = data.record;
}

export const SET_NEWSCATEGORY = (state, data) => {
    state.news = data.news;
    state.Category = data.Category;
}

export const ADD_PET = (state, pet) => {

    state.pets['objects'] = (pet["objects"]);
}

export const ADD_NEWS = (state, news) => {
    state.news['objects'] = (news["objects"]);
}

export const SET_RQ_PET = (state, data) => {
    state.rqPet = data;
}

export const UPDATE_PET = (state, pet) => {
    state.pets['objects'] = (pet["objects"]);
}

export const DELETE_PET = (state, pet) => {
    state.pets['objects'] = (pet["objects"]);
}

export const DELETE_NEWS = (state, news) => {
    state.news['objects'] = (news["objects"]);
}

export const auth_request = (state) => {
    state.status = 'loading'
}

export const auth_success = (state, dataLogin) => {
    state.status = 'success'
    state.token = dataLogin.token
    state.isLogin = dataLogin.isLogin
}
export const auth_error = (state) => {
    state.status = 'error'
}

export const CHECK_NULL = (state, data) => {
    state.checkNull = data
}

export const get_userLogin = (state, infoUserLogin) => {
    state.userLogin = infoUserLogin.userLogin
    state.role = infoUserLogin.role
}

export const logout = (state, status) => {
    state.status = ''
    state.token = ''
    state.isLogin = status
}

export const PUSH_NOTE = (state, notes) => {
    state.notes.push({
        ...notes, 
        id: (Math.random().toString(36) + Date.now().toString(36).substr(2))
    })
}
export const DELETE_NOTE = (state, notesDelete) => {
    state.notes = state.notes.filter(note => {
        return note.id != notesDelete.id
    })
}

export const SET_DARK = (state, color) => {
    state.themes = color
}

export const SET_PETS_HOME = (state, pets) => {
    state.petsHome = pets;
}

export const SET_PETS_DOG = (state, data) => {
    state.petsHome = data;
}

export const SET_PETS_CAT = (state, data) => {
    state.petsHome = data;
}

export const SET_PETS_OTHER = (state, data) => {
    state.petsHome = data;
}


export const SET_ALL_PETS = (state, data) => {
    state.petsHome = data;
}

export const SET_LOADDING = (state, data) => {
    state.isLoading = data;
}


export const SET_NEWSHOME = (state, news) => {
    state.newsHome = news;
}

export const SET_NEWSHOME_BYCATE = (state, news) => {
    state.newsHomeByCate = news;
}

export const SET_DETAIL_RESCUES = (state, data) => {
    state.detailRescue = data;
}

export const SET_EMPLOYEE = (state, employee) => {
    state.employees = employee;
}

export const SET_EMPLOYEE_BY_ID = (state, data) => {
    state.employeesId = data;
}

export const SET_RESCUES = (state, data) => {
    state.rescues = data;
}

export const SET_PET_RESCUE_ORDER = (state, data) => {
    state.petRescueOrder = data;
}

export const SET_EMPLOYEE_BYDE = (state, data) => {
    state.employeesByDe = data;
}

export const SET_FOSTER_PET = (state, data) => {
    state.fosterPet = data;
}
export const SET_PET_FOSTER = (state, data) => {
    state.petFoster = data;
}

export const SET_DETAIL_FOSTER = (state, data) => {
    state.detailFoster = data;
}

export const SET_EMPLOYEE_FOSTER = (state, data) => {
    state.employeeFoster = data;
}

export const SELECT_EMPLOYEE_FOSTER = (state, data) => {
    state.selectEmployeeFoster = data;
}

export const SET_PetEntryType = (state, data) => {
    state.petEntryType = data;
}

export const SET_PetEntryStatus = (state, data) => {
    state.petEntryStatus = data;
}

export const SET_EMPLOYEE_RESCUEODER = (state, data) => {
    state.employee_Rescue = data;
}

export const SET_EMPLOYEE_FOSTER_FOR_DETAIL = (state, data) => {
    state.employee_Foster = data;
}

export const SET_STATISTICAL = (state, data) => {
    state.statistical = data;
}

export const SET_PET_STATUS_TYPE = (state, data) => {
    state.petStatusType = data;
}


export const SET_PET_STATUS_ENTRY = (state, data) => {
    state.petStatusEntry = data;
}

export const LOAD = (state, data) => {
    state.load = data;
}

export const SELECT_FOSTERPET_BY_ID = (state, data) => {
    state.fosterBydId = data;
}

export const SELECT_FOSTER_PET_BY_ID = (state, data) => {
    state.petFosterById = data;
}


export const SELECT_RescueOrder_BY_ID = (state, data) => {
    state.RescueOrderId = data;
}

export const SELECT_PET_RESCUE_ORDER_ID = (state, data) => {
    state.petRescueId = data;
}

export const SET_EMPLOYEE_DEPART = (state, data) => {
    state.department = data;
}

export const SELECT_EMPLOYEE_BY_ID = (state, data) => {
    state.employeeRescue = data;
}
